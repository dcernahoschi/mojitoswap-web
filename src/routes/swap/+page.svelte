<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Select, { Option } from '@smui/select';
	import { appStatePromise } from '$lib/stores';
	import { isNumber } from '$lib/utils';
	import type { AppState, PoolState } from '$lib/model';
	import Decimal from 'decimal.js';
	import { AppConfig } from '$lib/config';

	type SelectedPool = {
		state: PoolState;
		swapRes0: boolean;
	};

	let appState: AppState | undefined = undefined;
	$: Promise.resolve($appStatePromise).then((newAppState) => {
		appState = newAppState;
	});

	let pool: SelectedPool | null = null;
	let poolInvalid = false;
	let isRes0Amount = true;
    let toSwapResAddr = '';
    let toSwapResSymbol = '';

	let toSwapAmount = '';
	let toSwapAmountInvalid = false;

	let receivedAmount = '';
    let receivedAmountSymbol = '';

	let inputInvalid: boolean = true;
	let inputInvalidReason: string | null = null;

	const currentPoolKey: (sp: SelectedPool) => string = (selectedPool) =>
		selectedPool ? selectedPool.state.componentAddr + '|' + selectedPool.swapRes0 : '';

	function resetOnNewPoolSelected() {
        if (pool != null) {
            toSwapResAddr = pool.swapRes0 ? pool.state.resource0Addr : pool.state.resource1Addr;
            toSwapResSymbol = pool.swapRes0 ? pool.state.resource0Symbol : pool.state.resource1Symbol;
            receivedAmountSymbol = pool.swapRes0 ? pool.state.resource1Symbol : pool.state.resource0Symbol;
        } else {
            toSwapResAddr = '';
            toSwapResSymbol = '';
            receivedAmount = '';
            receivedAmountSymbol = '';
        }

		toSwapAmount = '';
		toSwapAmountInvalid = false;
		inputInvalid = true;
		inputInvalidReason = null;
		isRes0Amount = true;
	}

	function validateSwapInput() {
		inputInvalid = false;
		inputInvalidReason = null;
		if (appState?.accountState === undefined) {
			inputInvalid = true;
            toSwapAmount = '';
            receivedAmount = '';
			inputInvalidReason = 'Connect your wallet';
			return;
		}

		poolInvalid = false;
		if (pool === null) {
			inputInvalid = true;
			poolInvalid = true;
            toSwapAmount = ''
            receivedAmount = '';
			inputInvalidReason = 'Select the pool';
			return;
		}

		toSwapAmountInvalid = false;
		if (toSwapAmount == '' || !isNumber(toSwapAmount)) {
			inputInvalid = true;
			toSwapAmountInvalid = true;
            receivedAmount = '';
			inputInvalidReason = 'Input a valid amount to swap';
			return;
		}

        let toSwapAmountDec = new Decimal(toSwapAmount);
        let toSwapAmountRes = pool.swapRes0 ? pool.state.resource0Addr : pool.state.resource1Addr;
        let accountAmount = appState.accountState.fungibleAddrToAmount.get(toSwapAmountRes);
        if (accountAmount === undefined || accountAmount.comparedTo(toSwapAmountDec) < 0) {
            inputInvalid = true;
			toSwapAmountInvalid = true;
			inputInvalidReason = 'Not enough balance';
			return;
        }

		const receivedAmountDecimal = pool.swapRes0
			? pool.state.price.mul(new Decimal(toSwapAmount))
			: new Decimal(toSwapAmount).div(pool.state.inversePrice());
        receivedAmount = receivedAmountDecimal.toDecimalPlaces(AppConfig.decimalPrecision).toString();
	}

	function swap() {}
</script>

<h1>Swap page</h1>

{#if appState !== undefined && appState.dexState !== undefined}
	<div>
		<Select
			required
			key={currentPoolKey}
			bind:value={pool}
			on:SMUISelect:change={resetOnNewPoolSelected}
			invalid={poolInvalid}
			label="Swap {poolInvalid ? ' - INVALID' : ''}"
			class="half-page-input"
		>
			<Option value={null} />
			{#each appState?.dexState.pools() ?? [] as currentPool}
				<Option value={{ state: currentPool, swapRes0: true }}>
					{currentPool.resource0Symbol} -> {currentPool.resource1Symbol} (current price: {currentPool.price}
					{currentPool.resource0Symbol}/{currentPool.resource1Symbol}, fee: {currentPool.fee}%)
				</Option>
				<Option value={{ state: currentPool, swapRes0: false }}>
					{currentPool.resource1Symbol} -> {currentPool.resource0Symbol} (current price: {currentPool.inversePrice()}
					{currentPool.resource1Symbol}/{currentPool.resource0Symbol}, fee: {currentPool.fee}%)
				</Option>
			{/each}
			<svelte:fragment slot="helperText">Select the pair to swap.</svelte:fragment>
		</Select>

		<Textfield
			required
			variant="filled"
			bind:value={toSwapAmount}
			on:input={validateSwapInput}
			invalid={toSwapAmountInvalid}
			label="Amount {toSwapResSymbol != '' ? ' of ' + toSwapResSymbol : ''} to swap {toSwapAmountInvalid ? ' - INVALID' : ''}"
			class="half-page-input"
		>
			<HelperText slot="helper">The amount you will swap.</HelperText>
		</Textfield>

		<Textfield
			disabled
			variant="filled"
			bind:value={receivedAmount}
			label="Received amount {receivedAmountSymbol != '' ? ' in ' + receivedAmountSymbol : ''}"
			class="half-page-input"
		>
			<HelperText slot="helper">The amount for the second token of the pair.</HelperText>
		</Textfield>

		<Button
			disabled={inputInvalid}
			on:click={() => swap()}
			variant="raised"
			class="half-page-input"
		>
			<Label>{inputInvalidReason === null ? 'Swap' : inputInvalidReason}</Label>
		</Button>
	</div>
{/if}

<style>
	* :global(.half-page-input) {
		width: 80%;
		margin-top: 0.5%;
	}
</style>
