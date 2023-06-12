import { TransactionStatus } from "@radixdlt/babylon-gateway-api-sdk"
import { AppConfig } from "./config"
import { Gateway } from "./gateway"
import Decimal from "decimal.js"

export class AppState {
    gateway: Gateway
    stateVersion: number
    dexState: DexState
    accountState?: AccountState
    usdtToUsdPrice: number
    inProgressTxs: Map<string, { status: string, statusDate: Date }>

    public static async create(): Promise<AppState> {
        try {
            const gateway = new Gateway()
            const dexState = await gateway.fetchDexState()
            const stateVersion = dexState.stateVersion
            const usdtToUsdPrice = 1 //for the moment hard code this
            const inProgressTxs = new Map<string, { status: string, statusDate: Date }>()
            return new this(gateway, stateVersion, dexState, usdtToUsdPrice, inProgressTxs)
        } catch (e) {
            console.log("Unexpected error when initializing app state: " + e)
            throw e
        }
    }

    constructor(
        gateway: Gateway,
        stateVersion: number,
        dexState: DexState,
        usdtToUsdPrice: number,
        inProgressTxs: Map<string, { status: string, statusDate: Date }>
    ) {
        this.gateway = gateway
        this.stateVersion = stateVersion
        this.dexState = dexState
        this.usdtToUsdPrice = usdtToUsdPrice
        this.inProgressTxs = inProgressTxs
    }

    public async refreshActiveAccount(accountAddr: string | undefined, stateVersion?: number): Promise<AppState> {
        try {
            if (accountAddr === undefined) {
                this.accountState = undefined
                return this
            }
            if (stateVersion !== undefined && stateVersion <= this.stateVersion) {
                throw new Error("Cannot update app state from an oldStateVersion.")
            }
            const accountState = await this.gateway.fetchAccountState(
                stateVersion ?? this.stateVersion, accountAddr, this.dexState.fungibleAddrs(), this.dexState.posNFTAddrToPoolAddr())
            this.accountState = accountState
            return this
        } catch (e) {
            console.log("Unexpected error when updating app state on new active account: " + e)
            throw e
        }
    }

    public async processCommittedTxs(): Promise<AppState> {
        try {
            this.cleanupOldCommittedTxs()

            const newCommittedTxs = await this.gateway.fetchCommittedTxs(null, this.stateVersion)
            //console.log(newCommittedTxs)

            this.markInProgressTxsCommitted(newCommittedTxs)

            const result = await this.analyzeSuccessfullyCommittedTxs(newCommittedTxs)
            //console.log(result)
            await this.refreshAppState(result, newCommittedTxs)

            return this
        } catch (e) {
            console.log("Unexpected error when processing new committed transactions: " + e)
            throw e
        }
    }

    public async watchTx({ transactionIntentHash, status }: { transactionIntentHash: string, status: TransactionStatus }) {
        this.inProgressTxs.set(transactionIntentHash, { status, statusDate: new Date() })
    }

    private async refreshAppState(
        txAnalysisResult: CommittedTxsAnalysisResult,
        committedTxs: CommittedTxs) {
        if (txAnalysisResult.dexReferenced) {
            this.dexState = await this.gateway.fetchDexState(committedTxs.stateVersion)
        } else {
            await this.dexState.refreshPools(committedTxs.stateVersion, new Set(txAnalysisResult.referencedPools))
        }
        if (this.accountState !== undefined && (txAnalysisResult.dexReferenced || txAnalysisResult.activeAccountReferenced)) {
            await this.refreshActiveAccount(this.accountState?.accountAddr, committedTxs.stateVersion)
        }
        this.stateVersion = committedTxs.stateVersion
    }

    private async analyzeSuccessfullyCommittedTxs(committedTxs: CommittedTxs): Promise<CommittedTxsAnalysisResult> {
        return Promise.all(
            committedTxs.txs
                .filter(tx => tx.status === "CommittedSuccess")
                .map(async tx => {
                    const txDetails = await this.gateway.fetchTxDetails(tx)
                    return {
                        referencedPools: Array.from(this.dexState.poolsReferencedByTx(txDetails)),
                        activeAccountReferenced: !!this.accountState?.isReferencedBy(txDetails),
                        dexReferenced: !!txDetails.referencedEntityAddrs.find(refAddr => refAddr === AppConfig.dexComponentAddr)
                    }
                }))
            .then(allTxDetails => allTxDetails
                .reduce(
                    (accumulator, txDetails) => {
                        accumulator.referencedPools = [...accumulator.referencedPools, ...txDetails.referencedPools]
                        accumulator.activeAccountReferenced = accumulator.activeAccountReferenced || txDetails.activeAccountReferenced
                        accumulator.dexReferenced = accumulator.dexReferenced || txDetails.dexReferenced
                        return accumulator
                    },
                    {
                        referencedPools: new Array<string>(),
                        activeAccountReferenced: false,
                        dexReferenced: false
                    }
                ))
    }

    private markInProgressTxsCommitted(committedTxs: CommittedTxs) {
        committedTxs.txs
            .filter(tx => this.inProgressTxs.has(tx.txIntentHash))
            .forEach(tx => {
                const inProgressTx = this.inProgressTxs.get(tx.txIntentHash)
                if (inProgressTx?.status !== tx.status) {
                    this.inProgressTxs.set(tx.txIntentHash, {
                        status: tx.status,
                        statusDate: new Date()
                    })
                }
            })
    }

    private cleanupOldCommittedTxs() {
        const now = new Date()
        Array.from(this.inProgressTxs)
            .forEach(([txIntentHash, { status, statusDate }]) => {
                if ((status === TransactionStatus.CommittedSuccess || status === TransactionStatus.CommittedSuccess)
                    && now.getTime() - statusDate.getTime() > AppConfig.removeCommittedTransactionTimeoutMs) {
                    this.inProgressTxs.delete(txIntentHash)
                }
            })
    }
}

export class DexState {
    gateway: Gateway
    stateVersion: number
    poolAddrToPoolState: Map<string, PoolState>

    constructor(gateway: Gateway, stateVersion: number, poolAddrToPoolState: Map<string, PoolState>) {
        this.gateway = gateway
        this.stateVersion = stateVersion
        this.poolAddrToPoolState = poolAddrToPoolState
    }

    pools(): Array<PoolState> {
        return Array.from(this.poolAddrToPoolState.values())
    }

    poolAddrs(): Set<string> {
        return new Set(this.poolAddrToPoolState.keys())
    }

    fungibleAddrs(): Set<string> {
        const fungibles: Set<string> = new Set()
        for (let poolState of this.poolAddrToPoolState.values()) {
            fungibles.add(poolState.resource0Addr)
            fungibles.add(poolState.resource1Addr)
        }
        return fungibles
    }

    posNFTAddrs(): Set<string> {
        return new Set(
            Array.from(this.poolAddrToPoolState.values(), poolState => poolState.posNFTAddr)
        )
    }

    posNFTAddrToPoolAddr(): Map<string, string> {
        return new Map(
            Array.from(this.poolAddrToPoolState, ([poolAddr, poolState]) =>
                [poolState.posNFTAddr, poolAddr]
            )
        )
    }

    poolsReferencedByTx(txDetails: CommittedTxDetails): Set<string> {
        const poolAddrs = this.poolAddrs()
        return new Set(
            txDetails.referencedEntityAddrs
                .filter(refAddr => poolAddrs.has(refAddr))
        )
    }

    addPool(stateVersion: number, poolAddr: string) {
        this.refreshPools(stateVersion, new Set([poolAddr]))
    }

    async refreshPools(stateVersion: number, poolAddrs: Set<string>): Promise<void> {
        poolAddrs.forEach(async poolAddr => {
            const newPoolState = await this.gateway.fetchPoolState(stateVersion, poolAddr)
            this.poolAddrToPoolState.set(poolAddr, newPoolState)
        })
    }
}

export class PoolState {
    readonly stateVersion: number
    readonly componentAddr: string
    readonly resource0Addr: string
    readonly resource1Addr: string
    readonly posNFTAddr: string
    readonly fee: Decimal
    readonly price: Decimal
    readonly resource0Symbol: string
    readonly resource1Symbol: string

    constructor(stateVersion: number, componentAddr:string, resource0: string, resource1: string, 
        posNFTAddr: string, fee:Decimal, sqrtPrice: Decimal, resource0Symbol: string, resource1Symbol: string) {
        this.stateVersion = stateVersion
        this.componentAddr = componentAddr
        this.resource0Addr = resource0
        this.resource1Addr = resource1
        this.posNFTAddr = posNFTAddr
        this.fee = fee
        this.price = sqrtPrice.pow(2)
        this.resource0Symbol = resource0Symbol
        this.resource1Symbol = resource1Symbol
    }
}

export class AccountState {
    readonly stateVersion: number
    readonly accountAddr: string
    readonly fungibleAddrToAmount: Map<string, Decimal>
    readonly poolAddrToPosition: Map<string, Array<Position>>
    readonly isAdmin: boolean

    constructor(
        stateVersion: number,
        accountAddr: string,
        fungibleAddrToAmount: Map<string, Decimal>,
        poolAddrToPositions: Map<string, Array<Position>>,
        isAdmin: boolean
    ) {
        this.stateVersion = stateVersion
        this.accountAddr = accountAddr
        this.fungibleAddrToAmount = fungibleAddrToAmount
        this.poolAddrToPosition = poolAddrToPositions
        this.isAdmin = isAdmin
    }

    isReferencedBy(txDetails: CommittedTxDetails): boolean {
        if (this.areAddrsReferencedByTx([this.accountAddr], txDetails)) {
            return true
        }
        if (this.areAddrsReferencedByTx([AppConfig.dexAdminBadgeAddr], txDetails)) {
            return true
        }
        if (this.areAddrsReferencedByTx(Array.from(this.fungibleAddrToAmount.keys()), txDetails)) {
            return true
        }
        const posNFTAddrs = Array.from(this.poolAddrToPosition.values())
            .flatMap(positions => positions.map(position => position.posNFTAddr))
        if (this.areAddrsReferencedByTx(posNFTAddrs, txDetails)) {
            return true
        }
        return false
    }

    getFungibleAmount(fungibleAddr: string): Decimal {
        return this.fungibleAddrToAmount.get(fungibleAddr) ?? new Decimal("0")
    }

    private areAddrsReferencedByTx(addrs: Array<string>, txDetails: CommittedTxDetails): boolean {
        return !!txDetails.referencedEntityAddrs.find(refAddr => addrs.includes(refAddr))
    }
}

export class Position {
    readonly id: string
    readonly posNFTAddr: string
    readonly liq: number
    readonly low_price: number
    readonly high_price: number

    constructor(id: string, posNFTAddr: string, liq: number, low_sqrt_price: number, high_sqrt_price: number) {
        this.id = id
        this.posNFTAddr = posNFTAddr
        this.liq = liq
        this.low_price = Math.pow(low_sqrt_price, 2)
        this.high_price = Math.pow(high_sqrt_price, 2)
    }
}

export type CommittedTxs = {
    stateVersion: number,
    txs: Array<CommittedTxInfo>
}

export type CommittedTxInfo = {
    stateVersion: number,
    txIntentHash: string,
    status: string
}

export type CommittedTxDetails = {
    txInfo: CommittedTxInfo,
    referencedEntityAddrs: Array<string>
}

export type CommittedTxsAnalysisResult = {
    referencedPools: Array<string>,
    activeAccountReferenced: boolean,
    dexReferenced: boolean
}