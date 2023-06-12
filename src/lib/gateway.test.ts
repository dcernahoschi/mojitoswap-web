import { beforeEach, expect, test, vi } from 'vitest'
import Decimal from "decimal.js"
import { Gateway } from './gateway';
import { stateEntityDetailsTestData, entityNonFungibleResourceVaultPageTestData, entityNonFungibleIdsPageTestData, streamTransactionsTestData } from './gatewayTestData';

let gateway: Gateway;
beforeEach((ctx) => {
    const StateApi = vi.fn();
    StateApi.prototype.stateEntityDetails = vi.fn(({ stateEntityDetailsRequest }) => {
        const stateEntityDetails = stateEntityDetailsTestData.get(ctx.meta.name);
        return stateEntityDetails?.get(stateEntityDetailsRequest.addresses[0]);
    });
    StateApi.prototype.entityNonFungibleResourceVaultPage = vi.fn(({ stateEntityNonFungibleResourceVaultsPageRequest }) => {
        const entityNonFungibleResourceVaultPage = entityNonFungibleResourceVaultPageTestData.get(ctx.meta.name);
        const key = stateEntityNonFungibleResourceVaultsPageRequest.address + '|'
            + stateEntityNonFungibleResourceVaultsPageRequest.resource_address;
        return entityNonFungibleResourceVaultPage?.get(key);
    });
    StateApi.prototype.entityNonFungibleIdsPage = vi.fn(({ stateEntityNonFungibleIdsPageRequest }) => {
        const entityNonFungibleIdsPage = entityNonFungibleIdsPageTestData.get(ctx.meta.name);
        const key = stateEntityNonFungibleIdsPageRequest.address + '|'
            + stateEntityNonFungibleIdsPageRequest.resource_address; + '|' + stateEntityNonFungibleIdsPageRequest.vault_address;
        return entityNonFungibleIdsPage?.get(key);
    });

    const StreamApi = vi.fn();
    StreamApi.prototype.streamTransactions = vi.fn(({ streamTransactionsRequest }) => {
        const streamTransactions = streamTransactionsTestData.get(ctx.meta.name);
        return streamTransactions?.get(streamTransactionsRequest.cursor);
    });

    gateway = new Gateway(new StateApi(), new StreamApi());
})

test('Dex with pools', async () => {
    const dexState = await gateway.fetchDexState();
    expect(gateway.stateApi.stateEntityDetails).toHaveBeenCalledTimes(4);
    expect(dexState.stateVersion).toBe(15447899);
    expect(dexState.poolAddrs()).toEqual(new Set(['component_tdx_c_1qvjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05srvqsl2']));
    expect(Array.from(dexState.poolAddrToPoolState.values())).toEqual([
        {
            "posNFTAddr": "resource_tdx_c_1qgjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05skr94gw",
            "price": new Decimal("1"),
            "fee": new Decimal("0.03"),
            "resource0Addr": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv",
            "resource1Addr": "resource_tdx_c_1q8wy3klwfuqr3ku0jey2xkdjnjm3dhzye008tt0k07tqy7u5ep",
            "stateVersion": 15447899,
            "resource0Symbol": "XRD",
            "resource1Symbol": "MOJ USDT",
            "componentAddr": "component_tdx_c_1qvjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05srvqsl2"
        }
    ])
})

test('Dex without pools', async () => {
    const dexState = await gateway.fetchDexState();
    expect(gateway.stateApi.stateEntityDetails).toHaveBeenCalledOnce();
    expect(dexState.stateVersion).toBe(15447899);
    expect(dexState.poolAddrs()).toEqual(new Set());
})

test('Account state admin', async () => {
    const fungibleAddrs = new Set([
        'resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv',
        'resource_tdx_c_1q8wy3klwfuqr3ku0jey2xkdjnjm3dhzye008tt0k07tqy7u5ep'
    ]);
    const posNFTAddrToPoolAddr = new Map(
        [
            [
                'resource_tdx_c_1qgjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05skr94gw', 'component_tdx_c_1qvjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05srvqsl2'
            ]
        ]
    );
    const accountState = await gateway.fetchAccountState(15447899,
        'account_tdx_c_1p9jy2vlth43flyqdn97gxprra0mjnxme8qprzqy5h9ls9hwp8l', fungibleAddrs, posNFTAddrToPoolAddr);

    expect(gateway.stateApi.stateEntityDetails).toHaveBeenCalledOnce();
    expect(accountState?.accountAddr).toBe('account_tdx_c_1p9jy2vlth43flyqdn97gxprra0mjnxme8qprzqy5h9ls9hwp8l');
    expect(accountState?.isAdmin).toBe(true);
    expect(accountState?.fungibleAddrToAmount.size).toBe(2);
    expect(accountState?.fungibleAddrToAmount.get('resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv'))
        .toEqual(new Decimal("9981.671361"));
    expect(accountState?.fungibleAddrToAmount.get('resource_tdx_c_1q8wy3klwfuqr3ku0jey2xkdjnjm3dhzye008tt0k07tqy7u5ep'))
        .toEqual(new Decimal("10000"));
    expect(accountState?.poolAddrToPosition.size).toBe(0);
})

test('Account state not admin', async () => {
    const accountState = await gateway.fetchAccountState(15447899, 'account_tdx_c_1pycd4l080u9fc87a26c7n2ulz3rv2hj7ruuan53gkf7szqygsu');
    expect(accountState?.accountAddr).toBe('account_tdx_c_1pycd4l080u9fc87a26c7n2ulz3rv2hj7ruuan53gkf7szqygsu');
    expect(accountState?.isAdmin).toBe(false);
})

test('Committed txs', async () => {
    const committedTxs = await gateway.fetchCommittedTxs(null, 15329549);
    expect(gateway.streamApi.streamTransactions).toBeCalledTimes(2);
    expect(committedTxs.stateVersion).toBe(15393650);
    expect(committedTxs.txs.length).toBe(8);
    expect(committedTxs.txs.filter(tx => tx.stateVersion < 15329549)).toEqual([]);
})
