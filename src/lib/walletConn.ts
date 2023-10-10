import { get } from "svelte/store"
import { appStatePromise } from './stores'
import { DataRequestBuilder, RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit'
import { AppConfig } from './config'

export const walletConn = RadixDappToolkit({
    dAppDefinitionAddress: AppConfig.dAppId,
    networkId: AppConfig.networkId,
    applicationName: AppConfig.dAppName,
    applicationVersion: AppConfig.dAppVersion
});
walletConn.walletApi.setRequestData(DataRequestBuilder.accounts().atLeast(1));
walletConn.walletApi.walletData$.subscribe(walletData => {
    console.log('onStateChange wallet data: ', walletData)
    const accounts = walletData.accounts
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
});