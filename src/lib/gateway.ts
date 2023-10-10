import { AppConfig } from './config'
import {
    type FungibleResourcesCollectionItem,
    type NonFungibleResourcesCollectionItem,
    type FungibleResourcesCollectionItemVaultAggregated,
    type NonFungibleResourcesCollectionItemVaultAggregated,
    type StateEntityDetailsResponseComponentDetails,
    type StateEntityDetailsResponseItemDetails,
    Configuration, StateApi, StreamApi, TransactionApi, type StateEntityDetailsResponseItem,
} from '@radixdlt/babylon-gateway-api-sdk'
import Decimal from "decimal.js"
import { type CommittedTxInfo, type CommittedTxDetails, type CommittedTxs, DexState, AccountState, PoolState, Position } from './model'

const config = new Configuration({ basePath: AppConfig.gatewayBasePath })

export class Gateway {
    stateApi: StateApi
    streamApi: StreamApi
    transactionApi: TransactionApi

    constructor(
        stateApi: StateApi = new StateApi(config),
        streamApi: StreamApi = new StreamApi(config),
        transactionApi: TransactionApi = new TransactionApi(config)) {
        this.stateApi = stateApi
        this.streamApi = streamApi
        this.transactionApi = transactionApi
    }

    async fetchDexState(stateVersion?: number): Promise<DexState> {
        const dexEntityResponse = await this.stateApi.stateEntityDetails({
            stateEntityDetailsRequest: {
                ...(stateVersion !== undefined) && {
                    at_ledger_state: {
                        state_version: stateVersion
                    }
                },
                addresses: [AppConfig.dexComponentAddr]
            }
        })
        //console.log(dexEntityResponse)

        const resultsCount = dexEntityResponse.items.length
        if (resultsCount === 0) {
            throw new Error("Dex component not found at addr " + AppConfig.dexComponentAddr + " and state version " + stateVersion)
        } else if (resultsCount > 1) {
            throw new Error("Dex component addr must uniquely identify a dex, but for addr " + AppConfig.dexComponentAddr + " we found " + resultsCount + " entities.")
        }
        const poolAddrs: Array<string> = this.asComponentDetails(dexEntityResponse.items[0].details).state
            //@ts-ignore
            ?.fields
            //@ts-ignore
            .filter(field => field.field_name === "pools")
            //@ts-ignore
            .filter(field => field.elements.length !== 0)
            //@ts-ignore
            .flatMap(field => field.elements)
            //@ts-ignore
            .map(elem => elem.value)
        const initialStateVersion = dexEntityResponse.ledger_state.state_version
        if (poolAddrs === undefined || poolAddrs.length === 0) {
            return new DexState(this, initialStateVersion, new Map())
        }
        const poolEntitiesResponse = await this.stateApi.stateEntityDetails({
            stateEntityDetailsRequest: {
                at_ledger_state: {
                    state_version: initialStateVersion
                },
                addresses: poolAddrs,
                aggregation_level: "Vault"
            }
        })
        //console.log(poolEntitiesResponse)

        const poolAddrToPoolState = new Map<string, PoolState>()
        for (let item of poolEntitiesResponse.items) {
            const poolState = await this.createPoolState(initialStateVersion, item)
            poolAddrToPoolState.set(item.address, poolState)

        }
        return new DexState(this, initialStateVersion, poolAddrToPoolState)
    }

    async fetchPoolState(stateVersion: number, poolAddr: string): Promise<PoolState> {
        const response = await this.stateApi.stateEntityDetails({
            stateEntityDetailsRequest: {
                at_ledger_state: {
                    state_version: stateVersion
                },
                addresses: [poolAddr],
                aggregation_level: "Vault"
            }
        })

        const resultsCount = response.items.length
        if (resultsCount === 0) {
            throw new Error("No pool found with pool addr " + poolAddr)
        } else if (resultsCount > 1) {
            throw new Error("Pool addr must uniquely identify a pool, but for addr " + poolAddr + " we found " + resultsCount + " entities.")
        }

        return this.createPoolState(stateVersion, response.items[0])
    }

    async fetchAccountState(
        stateVersion: number,
        accountAddr: string,
        fungibleAddrs: Set<string> | undefined = new Set(),
        posNFTAddrToPoolAddr: Map<string, string> | undefined = new Map()): Promise<AccountState> {
        const response = await this.stateApi.stateEntityDetails({
            stateEntityDetailsRequest: {
                at_ledger_state: {
                    state_version: stateVersion
                },
                addresses: [accountAddr],
                aggregation_level: "Vault",
                opt_ins: {
                    non_fungible_include_nfids: true
                }
            }
        })
        //console.log(response)

        const resultsCount = response.items.length
        if (resultsCount === 0) {
            throw new Error("No account found for account addr " + accountAddr)
        } else if (resultsCount > 1) {
            throw new Error("Account addr must uniquely identify an account, but for addr " + accountAddr + " we found " + resultsCount + " entities.")
        }

        let dexAdminBadgeCount = response.items[0]
            .fungible_resources
            ?.items
            ?.filter(item => item.resource_address === AppConfig.dexAdminBadgeAddr)
            ?.length
        const isAdmin = dexAdminBadgeCount !== undefined && dexAdminBadgeCount > 0

        const accountFungibleAddrToAmount = new Map(
            response.items[0]
                .fungible_resources
                ?.items
                ?.filter(item => fungibleAddrs.has(item.resource_address) || isAdmin)
                ?.map(item => [item.resource_address, new Decimal(this.asFungibleResourcesCollectionItemVaultAggregated(item).vaults.items[0].amount)])
        )

        const accountPosNFTAddrToNFTIds = new Map(
            response.items[0]
                .non_fungible_resources
                ?.items
                ?.filter(item => posNFTAddrToPoolAddr.has(item.resource_address))
                ?.map(item => [item.resource_address, this.asNonFungibleResourcesCollectionItemVaultAggregated(item).vaults.items[0].items])
        )

        const poolAddrToPositions = new Map()
        for (let posNFTAddrToNFTIds of accountPosNFTAddrToNFTIds) {
            const posNFTAddr = posNFTAddrToNFTIds[0];
            const NFTIds = posNFTAddrToNFTIds[1];
            if (NFTIds !== undefined) {
                const positions = await this.fetchAccountPositions(posNFTAddr, NFTIds, stateVersion)
                poolAddrToPositions.set(posNFTAddrToPoolAddr.get(posNFTAddr), positions)
            }
        }

        return new AccountState(stateVersion, accountAddr, accountFungibleAddrToAmount, poolAddrToPositions, isAdmin)
    }

    async fetchCommittedTxs(atLedgerStateVersion: number | null, untilLedgerStateVersion: number, forEntities: Set<string>): Promise<CommittedTxs> {
        //console.log("atLedgerStateVersion=" + atLedgerStateVersion)
        //console.log("untilLedgerStateVersion=" + untilLedgerStateVersion)

        let ledgerStateVersion = atLedgerStateVersion
        let currentTxStateVersion = null
        let currentCursor = null
        let allTxs = new Array<CommittedTxInfo>()
        while (currentTxStateVersion == null || currentTxStateVersion > untilLedgerStateVersion) {
            //console.log("ledgerStateVersion=" + ledgerStateVersion)
            //console.log("currentTxStateVersion=" + currentTxStateVersion)
            //console.log("currentCursor=" + currentCursor)

            const response = await this.streamApi.streamTransactions({
                streamTransactionsRequest: {
                    ...(ledgerStateVersion !== null) && {
                        at_ledger_state: {
                            state_version: ledgerStateVersion
                        }
                    },
                    opt_ins: {
                        affected_global_entities: true
                    },
                    cursor: currentCursor,
                    limit_per_page: 5
                }
            })
            //console.log(response)

            if (ledgerStateVersion === null) {
                ledgerStateVersion = response.ledger_state.state_version
            }

            const rawTxs = response.items
            if (rawTxs.length == 0) {
                break
            }
            currentTxStateVersion = rawTxs[rawTxs.length - 1].state_version

            const currentTxs: Array<CommittedTxInfo> = rawTxs
                .filter(item => item.transaction_status === "CommittedSuccess")
                .filter(item => item.state_version != null && item.state_version >= untilLedgerStateVersion)
                .filter(item => [...item.affected_global_entities!].filter(e => forEntities.has(e)).length > 0)
                .flatMap(item => typeof item.intent_hash === "string"
                    && typeof item.state_version === "number" ? [{
                        stateVersion: item.state_version,
                        txIntentHash: item.intent_hash,
                        status: item.transaction_status
                    }] : [])

            if (currentTxs.length !== 0) {
                allTxs = [...allTxs, ...currentTxs]
            }
            //console.log(allTxs)
            // safe guard against infinit cycles, but this should not happen 
            // as we should still have cursors until we get to our target state version
            // well... this can happen if the txs to the target state version are not user txs
            if (response.next_cursor == null) {
                break
            }
            currentCursor = response.next_cursor
        }
        return {
            stateVersion: ledgerStateVersion!,
            txs: allTxs
        }
    }

    async fetchTxDetails(txInfo: CommittedTxInfo): Promise<CommittedTxDetails> {
        const response = await this.transactionApi.transactionCommittedDetails({
            transactionCommittedDetailsRequest: {
                at_ledger_state: {
                    state_version: txInfo.stateVersion,
                },
                intent_hash: txInfo.txIntentHash,
                opt_ins: {
                    affected_global_entities: true
                }
            }
        })
        return {
            txInfo: txInfo,
            referencedEntityAddrs: response.transaction.affected_global_entities!
        }
    }

    private async fetchResourceSymbol(resourceAddr: string): Promise<string> {
        const response = await this.stateApi.stateEntityDetails({
            stateEntityDetailsRequest: {
                addresses: [resourceAddr],
                aggregation_level: "Global"
            }
        })
        const resultsCount = response.items.length
        if (resultsCount !== 1) {
            throw new Error("For resource addr " + resourceAddr + " there should be exactly one entity, but found " + resultsCount)
        }
        const symbols = response.items[0].metadata.items
            .filter(item => item.key === 'symbol')
            .map(item => item.value)
        if (symbols.length !== 1) {
            throw new Error("For resource addr " + resourceAddr +
                " there should be exactly one symbol metadata, but found " + symbols.length)
        }
        if (symbols[0].typed === undefined) {
            throw new Error("No symbol string found for symbol value");
        }
        //@ts-ignore
        return symbols[0].typed.value
    }

    private async fetchAccountPositions(posNFTAddr: string, ids: Array<string>, ledgerStateVersion: number): Promise<Array<Position>> {
        const response = await this.stateApi.nonFungibleData({
            stateNonFungibleDataRequest: {
                at_ledger_state: {
                    state_version: ledgerStateVersion
                },
                resource_address: posNFTAddr,
                non_fungible_ids: ids
            }
        })
        return response.non_fungible_ids
            .map(item => new Position(
                item.non_fungible_id,
                posNFTAddr,
                //@ts-ignore
                parseFloat(item.data?.programmatic_json.fields[0].value),
                //@ts-ignore
                parseFloat(item.data?.programmatic_json.fields[1].value),
                //@ts-ignore
                parseFloat(item.data?.programmatic_json.fields[2].value),
            ))
    }

    private async createPoolState(stateVersion: number, item: StateEntityDetailsResponseItem): Promise<PoolState> {
        console.log("Creating state from item:")
        console.log(item)
        const vaultAddressToResourceAddress = new Map(
            item.fungible_resources?.items
                .map(it => [this.asFungibleResourcesCollectionItemVaultAggregated(it).vaults.items[0].vault_address, it.resource_address])
        )
        //console.log(vaultAddressToResourceAddress)
        const vault0Addr: string = this.asComponentDetails(item.details).state
            //@ts-ignore
            ?.fields[0].value
        const vault1Addr: string = this.asComponentDetails(item.details).state
            //@ts-ignore
            ?.fields[1].value
        const res0Addr = vaultAddressToResourceAddress.get(vault0Addr)
        if (res0Addr === undefined) {
            throw new Error("No vault resource address found for vault addr " + vault0Addr)
        }
        const res0Symbol = await this.fetchResourceSymbol(res0Addr)
        const res1Addr = vaultAddressToResourceAddress.get(vault1Addr)
        if (res1Addr === undefined) {
            throw new Error("No vault resource address found for vault addr " + vault1Addr)
        }
        const res1Symbol = await this.fetchResourceSymbol(res1Addr)
        return new PoolState(
            stateVersion,
            item.address,
            res0Addr,
            res1Addr,
            this.asComponentDetails(item.details).state
                //@ts-ignore
                ?.fields[8].value,
            new Decimal(this.asComponentDetails(item.details).state
                //@ts-ignore
                ?.fields[5].value
            ),
            new Decimal(this.asComponentDetails(item.details).state
                //@ts-ignore
                ?.fields[4].value
            ),
            res0Symbol,
            res1Symbol
        )
    }

    private asComponentDetails(details?: StateEntityDetailsResponseItemDetails): StateEntityDetailsResponseComponentDetails {
        return details as StateEntityDetailsResponseComponentDetails
    }

    private asFungibleResourcesCollectionItemVaultAggregated(item?: FungibleResourcesCollectionItem): FungibleResourcesCollectionItemVaultAggregated {
        return item as FungibleResourcesCollectionItemVaultAggregated
    }

    private asNonFungibleResourcesCollectionItemVaultAggregated(item?: NonFungibleResourcesCollectionItem): NonFungibleResourcesCollectionItemVaultAggregated {
        return item as NonFungibleResourcesCollectionItemVaultAggregated
    }
}