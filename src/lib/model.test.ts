import { expect, test, vi } from 'vitest'
import { AccountState, AppState, DexState, PoolState } from './model'
import { AppConfig } from './config'
import Decimal from "decimal.js"

const appGateway: () => any =
    () => {
        const Gateway = vi.fn()
        Gateway.prototype.fetchDexState = vi.fn()
        Gateway.prototype.fetchPoolState = vi.fn()
        Gateway.prototype.fetchAccountState = vi.fn()
        Gateway.prototype.fetchCommittedTxs = vi.fn()
        Gateway.prototype.fetchTxDetails = vi.fn()

        return new Gateway()
    }

const appState: (gateway: any) => AppState =
    gateway => {
        const dexState = new DexState(gateway, 1, new Map(
            [['pool1', new PoolState(1, 'pool1', 'res0', 'res1', 'pool1 pos NFT', new Decimal("0.03"), new Decimal("3"), 'RES0', 'RES1')]]
        ))
        const appState = new AppState(gateway, 1, dexState, 1, new Map(
            [
                ['tx0', { status: "CommittedSuccess", statusDate: new Date("2023-05-27T07:00:30.008Z") }],
                ['tx1', { status: "Pending", statusDate: new Date("2023-05-27T07:01:30.008Z") }],
                ['tx2', { status: "Pending", statusDate: new Date("2023-05-27T07:02:30.008Z") }]
            ]
        ))
        appState.accountState = new AccountState(1, "acc1", new Map(), new Map(), false)
        return appState
    }

test('App state refresh on Dex update', async () => {
    const gateway = appGateway();
    const existingAppState = appState(gateway);

    const committedTxInfo = {
        stateVersion: 2,
        txIntentHash: 'tx1',
        status: "CommittedSuccess"
    }
    gateway.fetchCommittedTxs.mockResolvedValueOnce({
        stateVersion: 2,
        txs: [committedTxInfo]
    })
    gateway.fetchTxDetails.mockResolvedValueOnce({
        txInfo: committedTxInfo,
        referencedEntityAddrs: [AppConfig.dexComponentAddr, 'pool2']
    })

    const newDexState = new DexState(gateway, 1, new Map([
        ['pool1', new PoolState(1, 'pool1', 'res0', 'res1', 'pool1 pos NFT', new Decimal("0.03"), new Decimal("3"), 'RES0', 'RES1')],
        ['pool2', new PoolState(2, 'pool2', 'res2', 'res3', 'pool2 pos NFT', new Decimal("0.02"), new Decimal("2"), 'RES2', 'RES3')]
    ]))
    gateway.fetchDexState.mockResolvedValueOnce(newDexState)

    const newAccountState = new AccountState(2, 'acc1', new Map([['res2', new Decimal("4")], ['res3', new Decimal("10")]]), new Map(), false)
    gateway.fetchAccountState.mockResolvedValueOnce(newAccountState)

    const newAppState = await existingAppState.processCommittedTxs()

    expect(newAppState.inProgressTxs.get('tx0')).toBe(undefined)
    expect(newAppState.inProgressTxs.get('tx1')?.status).toBe("CommittedSuccess")
    expect(newAppState.inProgressTxs.get('tx2')?.status).toBe("Pending")

    expect(newAppState.stateVersion).toBe(2)
    expect(newAppState.dexState).toEqual(newDexState)
    expect(newAppState.accountState).toEqual(newAccountState)
})

test('App state refresh on active account assets update', async () => {
    const gateway = appGateway();
    const existingAppState = appState(gateway);

    const committedTxInfo = {
        stateVersion: 2,
        txIntentHash: 'tx1',
        status: "CommittedSuccess"
    }
    gateway.fetchCommittedTxs.mockResolvedValueOnce({
        stateVersion: 2,
        txs: [committedTxInfo]
    })
    gateway.fetchTxDetails.mockResolvedValueOnce({
        txInfo: committedTxInfo,
        referencedEntityAddrs: ['acc1']
    })

    const newAccountState = new AccountState(2, 'acc1', new Map([['res0', new Decimal("4")], ['res1', new Decimal("10")]]), new Map(), true)
    gateway.fetchAccountState.mockResolvedValueOnce(newAccountState)

    const newAppState = await existingAppState.processCommittedTxs()

    expect(newAppState.stateVersion).toBe(2)
    expect(newAppState.accountState).toEqual(newAccountState)
    expect(newAppState.dexState.stateVersion).toBe(1)
})

test('App state refresh on pool update', async () => {
    const gateway = appGateway();
    const existingAppState = appState(gateway);

    const committedTxInfo = {
        stateVersion: 2,
        txIntentHash: 'tx1',
        status: "CommittedSuccess"
    }
    gateway.fetchCommittedTxs.mockResolvedValueOnce({
        stateVersion: 2,
        txs: [committedTxInfo]
    })
    gateway.fetchTxDetails.mockResolvedValueOnce({
        txInfo: committedTxInfo,
        referencedEntityAddrs: ['pool1']
    })

    const newPoolState = new PoolState(2, 'pool1', 'res0', 'res1', 'pool1 pos NFT', new Decimal("0.03"), new Decimal("4"), 'RES0', 'RES1')
    gateway.fetchPoolState.mockResolvedValueOnce(newPoolState)

    const newAppState = await existingAppState.processCommittedTxs()

    expect(newAppState.stateVersion).toBe(2)
    expect(newAppState.dexState.poolAddrToPoolState.get('pool1')).toEqual(newPoolState)
    expect(newAppState.accountState?.stateVersion).toEqual(1)
    expect(newAppState.dexState.stateVersion).toEqual(1)
})
