<script lang="ts">
	import { walletConn } from '../lib/walletConn';
</script>

<header>
	<div>
		<nav>
			<a href="/">Mojitoswap</a>
			<a href="/swap">Swap</a>
			<a href="/positions">Positions</a>
			<a href="/tokens">Tokens</a>
			<a href="/pools">Pools</a>
			<a href="/new-pool">New pool</a>
			<radix-connect-button />
		</nav>
	</div>
</header>
<main>
	<slot />
</main>
