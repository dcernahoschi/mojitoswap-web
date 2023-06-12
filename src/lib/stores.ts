import { type Writable, writable, get } from 'svelte/store';
import { AppState } from './model';
import { AppConfig } from './config';

export const appStatePromise:Writable<Promise<AppState>> = writable(AppState.create())
setInterval(() =>
    appStatePromise.update(() =>
        Promise.resolve(get(appStatePromise))
            .then(appState => appState.processCommittedTxs())
    )
    , AppConfig.stateRefreshMs
)