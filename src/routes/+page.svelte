<script lang="ts">
	import { appStatePromise } from '../lib/stores'
	import type { AppState } from '../lib/model'

	let appState: AppState|undefined = undefined
	$: Promise.resolve($appStatePromise).then(newAppState => {
		appState = newAppState
	})
</script>

<h1>Welcome to Mojitoswap</h1>
<p>This is the home page</p>

App state:
{#if appState !== undefined}
	<ul>
		<li>state version: {appState?.stateVersion}</li>
		<li>pool addrs: {appState?.dexState.poolAddrToPoolState.size}</li>
		<ul>
			{#each Array.from(appState?.dexState.poolAddrToPoolState) as [poolAddr, { resource0Addr, resource1Addr, posNFTAddr, price, resource0Symbol, resource1Symbol }]}
				<li>{poolAddr} => {resource0Addr}, {resource1Addr}, {posNFTAddr}, {price}, {resource0Symbol}, {resource1Symbol}</li>
			{/each}
		</ul>
		<li>
			connected account: {appState?.accountState?.accountAddr}
			{#if appState.accountState !== undefined}
				<ul>
					{#each Array.from(appState?.accountState?.fungibleAddrToAmount) as [fungibleAddress, amount]}
						<li>{fungibleAddress} => {amount}</li>
					{/each}
				</ul>
			{/if}
		</li>
		<li>
			recent transactions:
			<ul>
				{#each Array.from(appState?.inProgressTxs) as [txIdentHash, { status, statusDate }]}
					<li>{txIdentHash} => [{status}, {statusDate}]</li>
				{/each}
			</ul>
		</li>
	</ul>
{/if}