import { get } from "svelte/store"
import { appStatePromise } from '../lib/stores'
import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit'
import { AppConfig } from '../lib/config'

export const walletConn = RadixDappToolkit(
    { dAppDefinitionAddress: AppConfig.dAppId, dAppName: AppConfig.dAppName },
    (requestData) => {
        requestData({
            accounts: { quantifier: 'atLeast', quantity: 1 }
        }).map(({ data: { accounts } }) => {
            console.log('onConnect account data: ', accounts)
            console.log('On request, set store account to: ' + accounts[0].address)
            appStatePromise.update(() =>
                Promise.resolve(get(appStatePromise)).then((appState) =>
                    appState.refreshActiveAccount(accounts[0].address)
                )
            )
        })
    },
    {
        networkId: AppConfig.networkId,
        onDisconnect: () => {
            appStatePromise.update(() =>
                Promise.resolve(get(appStatePromise)).then((appState) =>
                    appState.refreshActiveAccount(undefined)
                )
            )
        },
        onInit: ({ accounts }) => {
            console.log('onInit account data: ', accounts)
            if (accounts === undefined || accounts.length === 0) {
                appStatePromise.update(() =>
                    Promise.resolve(get(appStatePromise)).then((appState) =>
                        appState.refreshActiveAccount(undefined)
                    )
                )
                console.log('On init, set store account to: ' + undefined)
            } else {
                console.log('On init, set store account to: ' + accounts[0].address)
                appStatePromise.update(() =>
                    Promise.resolve(get(appStatePromise)).then((appState) =>
                        appState.refreshActiveAccount(accounts[0].address)
                    )
                )
            }
        },
        onStateChange(state) {
            const accounts = state.accounts
            console.log('onStateChange account data: ', accounts)
            if (accounts === undefined || accounts.length === 0) {
                appStatePromise.update(() =>
                    Promise.resolve(get(appStatePromise)).then((appState) =>
                        appState.refreshActiveAccount(undefined)
                    )
                )
                console.log('onStateChange, set store account to: ' + undefined)
            } else {
                console.log('onStateChange, set store account to: ' + accounts[0].address)
                appStatePromise.update(() =>
                    Promise.resolve(get(appStatePromise)).then((appState) =>
                        appState.refreshActiveAccount(accounts[0].address)
                    )
                )
            }
        },
    }
)