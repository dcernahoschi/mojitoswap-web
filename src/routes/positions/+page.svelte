<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Select, { Option } from '@smui/select';
	import { newPoolTransactionManifest } from '$lib/manifests';
	import { AppConfig } from '$lib/config';
	import { walletConn } from '$lib/walletConn';
	import { appStatePromise } from '$lib/stores';
	import type { AppState, PoolState } from '$lib/model';
	import { isNumber, isPriceInvalid } from '$lib/utils';
	import Decimal from 'decimal.js';

	let appState: AppState | undefined = undefined;
	$: Promise.resolve($appStatePromise).then((newAppState) => {
		appState = newAppState;
	});

	let pool: PoolState | null = null;
	let poolInvalid = false;

	let minPrice: string = '';
	let minPriceInvalid = false;

	let maxPrice: string = '';
	let maxPriceInvalid = false;

	let res0Amount: string = '';
	let res0AmountInvalid = false;

	let res1Amount: string = '';
	let res1AmountInvalid = false;

	let inputInvalid: boolean = true
	let inputInvalidReason: string | null = null
	function validateInput() {
		inputInvalid = false
		inputInvalidReason = null
		if (appState?.accountState === undefined) {
			inputInvalid = true
			inputInvalidReason = 'Connect your wallet'
			return
		}
		poolInvalid = false
		if (pool === null) {
			inputInvalid = true
			poolInvalid = true
			inputInvalidReason = 'Select the pool'
			return
		}
		minPriceInvalid = false
		if (isPriceInvalid(minPrice)) {
			inputInvalid = true
			minPriceInvalid = true
			inputInvalidReason = 'Input a valid min price'
			return
		}
		maxPriceInvalid = false
		if (isPriceInvalid(maxPrice)) {
			inputInvalid = true
			maxPriceInvalid = true
			inputInvalidReason = 'Input a valid max price'
			return
		}
		const minPriceDec = new Decimal(minPrice)
		const maxPriceDec = new Decimal(maxPrice)
		if (maxPriceDec.comparedTo(minPriceDec) < 0) {
			inputInvalid = true
			minPriceInvalid = true
			maxPriceInvalid = true
			inputInvalidReason = 'Max price must be greater than min price'
			return
		}
		res0AmountInvalid = false
		if (!isNumber(res0Amount)) {
			inputInvalid = true
			res0AmountInvalid = true
			inputInvalidReason = 'Input a valid first token amount'
			return
		}
		const res0AmountDec = new Decimal(res0Amount)
		if (res0AmountDec.comparedTo(appState.accountState.getFungibleAmount(pool.resource0Addr)) > 0) {
			inputInvalid = true
			res0AmountInvalid = true
			inputInvalidReason = 'Not enough balance for first token'
			return
		}
		res1AmountInvalid = false
		if (!isNumber(res1Amount)) {
			inputInvalid = true
			res1AmountInvalid = true
			inputInvalidReason = 'Input a valid second token amount'
			return
		}
		const res1AmountDec = new Decimal(res1Amount)
		if (res1AmountDec.comparedTo(appState.accountState.getFungibleAmount(pool.resource1Addr)) > 0) {
			inputInvalid = true
			res1AmountInvalid = true
			inputInvalidReason = 'Not enough balance for second token'
			return
		}
	}

	function reset() {
		minPrice = ''
		maxPrice = ''
		res0Amount = ''
		res1Amount = ''
		inputInvalid = true
		poolInvalid = pool === null
	}

	async function createPosition() {

		//convert min & max price to ticks

		// construct & send tx

		//watch result
	}
</script>

<h1>New position</h1>
<div>
	<!-- <div class="half-page-input">
	    <Autocomplete
			options={appState?.dexState.pools()}
			getOptionLabel={(option) =>
				option ? `${option.resource0Symbol} - ${option.resource1Symbol}` : ''}
			bind:value={pool}
			bind:text={poolText}
			style="width: 100%;"
			selectOnExactMatch
		>
			<Textfield
				required
				label="Liquidity pool {poolInvalid ? ' - INVALID' : ''}"
				bind:value={poolText}
				invalid={poolInvalid}
				variant="filled"
				style="width: 100%;"
			>
				<HelperText slot="helper">Select the pair to provide liquidity</HelperText>
			</Textfield>
		</Autocomplete>
		<pre class="status">Selected: {pool ? JSON.stringify(pool) : ''}</pre>
		<pre class="status">Selected text: {poolText ? poolText : ''}</pre>
	</div> -->

	<div>
		<Select
			required
			key={(currentPool) => `${currentPool ? currentPool.componentAddr : ''}`}
			bind:value={pool}
			on:SMUISelect:change={reset}
			invalid={poolInvalid}
			label="Liquidity pool {poolInvalid ? ' - INVALID' : ''}"
			class="half-page-input"
		>
			<Option value={null} />
			{#each appState?.dexState.pools() ?? [] as currentPool}
				<Option value={currentPool}>
					{currentPool.resource0Symbol} - {currentPool.resource1Symbol}
				</Option>
			{/each}
			<svelte:fragment slot="helperText">Select the pool to provide liquidity to.</svelte:fragment>
		</Select>
	</div>

	<Textfield
		disabled
		variant="filled"
		value={pool ? pool.fee.toFixed() : ''}
		label="Fee"
		class="half-page-input"
	>
		<HelperText slot="helper" />
	</Textfield>

	<Textfield
		disabled
		variant="filled"
		value={pool ? pool.price.toFixed() : ''}
		label="Current price"
		class="half-page-input"
	>
		<HelperText slot="helper" />
	</Textfield>

	<Textfield
		required
		variant="filled"
		bind:value={minPrice}
		on:input={validateInput}
		invalid={minPriceInvalid}
		label="Min price {minPriceInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">The min price to provide liquidity.</HelperText>
	</Textfield>

	<Textfield
		required
		variant="filled"
		bind:value={maxPrice}
		on:input={validateInput}
		invalid={maxPriceInvalid}
		label="Max price {maxPriceInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">The max price to provide liquidity.</HelperText>
	</Textfield>

	<Textfield
		required
		variant="filled"
		bind:value={res0Amount}
		on:input={validateInput}
		invalid={res0AmountInvalid}
		label="First token amount {res0AmountInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">The amount for the first token of the pair.</HelperText>
	</Textfield>

	<Textfield
		required
		variant="filled"
		bind:value={res1Amount}
		on:input={validateInput}
		invalid={res1AmountInvalid}
		label="Second token amount {res1AmountInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">The amount for the second token of the pair.</HelperText>
	</Textfield>

	<Button disabled={inputInvalid} on:click={() => createPosition()} variant="raised" class="half-page-input">
		<Label>{inputInvalidReason === null ? 'Create position' : inputInvalidReason}</Label>
	</Button>
</div>

<style>
	* :global(.half-page-input) {
		width: 50%;
		margin-top: .5%;
	}
</style>
