import { beforeEach, expect, test, vi } from 'vitest'
import Decimal from "decimal.js"
import { Gateway } from './gateway';
import { stateEntityDetailsTestData, nonFungibleDataTestData, streamTransactionsTestData } from './gatewayTestData';

let gateway: Gateway;
beforeEach((ctx) => {
    const StateApi = vi.fn();
    StateApi.prototype.stateEntityDetails = vi.fn(({ stateEntityDetailsRequest }) => {
        const stateEntityDetails = stateEntityDetailsTestData.get(ctx.meta.name);
        return stateEntityDetails?.get(stateEntityDetailsRequest.addresses[0]);
    });
    StateApi.prototype.nonFungibleData = vi.fn(({ stateNonFungibleDataRequest }) => {
        const entityNonFungibleData = nonFungibleDataTestData.get(ctx.meta.name);
        return entityNonFungibleData?.get(stateNonFungibleDataRequest.resource_address);
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
    expect(dexState.stateVersion).toBe(3348688);
    expect(dexState.poolAddrs()).toEqual(new Set(['component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv']));
    expect(Array.from(dexState.poolAddrToPoolState.values())).toEqual([
        {
            "posNFTAddr": "resource_tdx_2_1nt0uz6tdsz0v2a37g0eajjhugzm607y6ldkyd207wpy6c8zygp6tmt",
            "price": new Decimal("1"),
            "fee": new Decimal("0.03"),
            "resource0Addr": "resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc",
            "resource1Addr": "resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu",
            "stateVersion": 3348688,
            "resource0Symbol": "XRD",
            "resource1Symbol": "MOJ USDT",
            "componentAddr": "component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv"
        }
    ])
})

test('Dex without pools', async () => {
    const dexState = await gateway.fetchDexState();
    expect(gateway.stateApi.stateEntityDetails).toHaveBeenCalledOnce();
    expect(dexState.stateVersion).toBe(3348688);
    expect(dexState.poolAddrs()).toEqual(new Set());
})

test('Account state admin', async () => {
    const fungibleAddrs = new Set([
        'resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc',
        'resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu'
    ]);
    const posNFTAddrToPoolAddr = new Map(
        [
            [
                'resource_tdx_2_1nt0uz6tdsz0v2a37g0eajjhugzm607y6ldkyd207wpy6c8zygp6tmt', 'component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv'
            ]
        ]
    );
    const accountState = await gateway.fetchAccountState(3348688,
        'account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua', fungibleAddrs, posNFTAddrToPoolAddr);

    expect(gateway.stateApi.stateEntityDetails).toHaveBeenCalledOnce();
    expect(accountState?.accountAddr).toBe('account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua');
    expect(accountState?.isAdmin).toBe(true);
    expect(accountState?.fungibleAddrToAmount.size).toBe(3);
    expect(accountState?.fungibleAddrToAmount.get('resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc'))
        .toEqual(new Decimal("8745.016306942658624181"));
    expect(accountState?.fungibleAddrToAmount.get('resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu'))
        .toEqual(new Decimal("9000"));
    expect(accountState?.fungibleAddrToAmount.get('resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773'))
        .toEqual(new Decimal("1"))
    expect(accountState?.poolAddrToPosition.size).toBe(1);
})

test('Account state not admin', async () => {
    const accountState = await gateway.fetchAccountState(3348688, 'account_tdx_2_129as4l332h8euyes6csxmn0enps2kzl6afmhwmjpp5q4ukwmv3mvld');
    expect(accountState?.accountAddr).toBe('account_tdx_2_129as4l332h8euyes6csxmn0enps2kzl6afmhwmjpp5q4ukwmv3mvld');
    expect(accountState?.isAdmin).toBe(false);
})

test('Committed txs', async () => {
    const committedTxs = await gateway.fetchCommittedTxs(null, 3299000, new Set(["account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua"]));
    expect(gateway.streamApi.streamTransactions).toBeCalledTimes(2);
    expect(committedTxs.stateVersion).toBe(3348688);
    expect(committedTxs.txs.length).toBe(6);
})
