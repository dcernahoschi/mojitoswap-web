<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Select, { Option } from '@smui/select';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import {
		addPositionTransactionManifest,
		removePositionTransactionManifest
	} from '$lib/manifests';
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

	let inputInvalid: boolean = true;
	let inputInvalidReason: string | null = null;

	let createPosDialogOpen = false;

	const currentPoolKey: (p: PoolState) => string = currentPool => currentPool ? currentPool.componentAddr : ''

	function cancelCreatePosition() {
		pool = null;
		poolInvalid = false;
		minPrice = '';
		minPriceInvalid = false;
		maxPrice = '';
		maxPriceInvalid = false;
		res0Amount = '';
		res0AmountInvalid = false;
		res1Amount = '';
		res1AmountInvalid = false;
		inputInvalid = true;
		inputInvalidReason = null;
		createPosDialogOpen = false;
	}

	function prepareCreatePosition() {
		createPosDialogOpen = true;
	}

	function resetOnNewPoolSelected() {
		minPrice = '';
		maxPrice = '';
		res0Amount = '';
		res1Amount = '';
		inputInvalid = true;
		poolInvalid = pool === null;
	}

	function validateCreatePositionInput() {
		inputInvalid = false;
		inputInvalidReason = null;
		if (appState?.accountState === undefined) {
			inputInvalid = true;
			inputInvalidReason = 'Connect your wallet';
			return;
		}
		poolInvalid = false;
		if (pool === null) {
			inputInvalid = true;
			poolInvalid = true;
			inputInvalidReason = 'Select the pool';
			return;
		}
		minPriceInvalid = false;
		if (isPriceInvalid(minPrice)) {
			inputInvalid = true;
			minPriceInvalid = true;
			inputInvalidReason = 'Input a valid min price';
			return;
		}
		maxPriceInvalid = false;
		if (isPriceInvalid(maxPrice)) {
			inputInvalid = true;
			maxPriceInvalid = true;
			inputInvalidReason = 'Input a valid max price';
			return;
		}
		const minPriceDec = new Decimal(minPrice);
		const maxPriceDec = new Decimal(maxPrice);
		if (maxPriceDec.comparedTo(minPriceDec) < 0) {
			inputInvalid = true;
			minPriceInvalid = true;
			maxPriceInvalid = true;
			inputInvalidReason = 'Max price must be greater than min price';
			return;
		}
		res0AmountInvalid = false;
		if (!isNumber(res0Amount)) {
			inputInvalid = true;
			res0AmountInvalid = true;
			inputInvalidReason = 'Input a valid first token amount';
			return;
		}
		const res0AmountDec = new Decimal(res0Amount);
		if (res0AmountDec.comparedTo(appState.accountState.getFungibleAmount(pool.resource0Addr)) > 0) {
			inputInvalid = true;
			res0AmountInvalid = true;
			inputInvalidReason = 'Not enough balance for first token';
			return;
		}
		res1AmountInvalid = false;
		if (!isNumber(res1Amount)) {
			inputInvalid = true;
			res1AmountInvalid = true;
			inputInvalidReason = 'Input a valid second token amount';
			return;
		}
		const res1AmountDec = new Decimal(res1Amount);
		if (res1AmountDec.comparedTo(appState.accountState.getFungibleAmount(pool.resource1Addr)) > 0) {
			inputInvalid = true;
			res1AmountInvalid = true;
			inputInvalidReason = 'Not enough balance for second token';
			return;
		}
	}

	async function createPosition() {
		const accountAddr: string | undefined = appState?.accountState?.accountAddr;

		console.log('accountAddr=' + accountAddr);
		console.log('pool=' + pool?.componentAddr);
		console.log('res0Amount=' + res0Amount);
		console.log('res0Addr=' + pool?.resource0Addr);
		console.log('res1Amount=' + res1Amount);
		console.log('res1Addr=' + pool?.resource1Addr);
		console.log('minPrice=' + minPrice);
		console.log('maxPrice=' + maxPrice);

		if (
			accountAddr !== undefined &&
			pool?.componentAddr !== undefined &&
			!minPriceInvalid &&
			!maxPriceInvalid &&
			!res0AmountInvalid &&
			!res1AmountInvalid
		) {
			console.log('Sending create position transaction...');
			const txManif = addPositionTransactionManifest(
				accountAddr,
				pool.componentAddr,
				res0Amount,
				pool.resource0Addr,
				res1Amount,
				pool.resource1Addr,
				new Decimal(minPrice).sqrt().toFixed(AppConfig.decimalPrecision),
				new Decimal(maxPrice).sqrt().toFixed(AppConfig.decimalPrecision)
			);
			sendTxManifest(txManif);
		}
	}

	let removePosDialogOpen = false;
	let removePoolAddr = '';
	let removePosNFTAddr = '';
	let removePosId = '';
	function prepareRemovePosition(poolAddr: string, posNFTAddr: string, posId: string) {
		removePoolAddr = poolAddr;
		removePosNFTAddr = posNFTAddr;
		removePosId = posId;
		removePosDialogOpen = true;
	}

	function cancelRemovePosition() {
		removePoolAddr = '';
		removePosNFTAddr = '';
		removePosId = '';
		removePosDialogOpen = false;
	}

	async function removePosition() {
		const accountAddr: string | undefined = appState?.accountState?.accountAddr;

		console.log('accountAddr=' + accountAddr);
		console.log('poolAddr=' + removePoolAddr);
		console.log('posNFTAddr=' + removePosNFTAddr);
		console.log('posId=' + removePosId);

		if (accountAddr !== undefined) {
			console.log('Sending remove position transaction...');
			const txManif = removePositionTransactionManifest(
				accountAddr,
				removePoolAddr,
				removePosNFTAddr,
				removePosId
			);
			sendTxManifest(txManif);
		}
		removePosDialogOpen = false;
	}

	async function sendTxManifest(txManif: string) {
		console.log(txManif);
		const result = await walletConn.walletApi.sendTransaction({
			transactionManifest: txManif,
			version: 1
		});
		if (result.isErr()) {
			console.log('Error when sending transaction ' + result.error);
			throw result.error;
		}
		appState?.watchTx(result.value);
	}
</script>

{#if appState !== undefined && appState.accountState !== undefined}
	<Dialog bind:open={removePosDialogOpen}>
		<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
		<Title>Do you want to remove the position?</Title>
		<Actions>
			<Button on:click={() => cancelRemovePosition()}>
				<Label>No</Label>
			</Button>
			<Button on:click={() => removePosition()}>
				<Label>Yes</Label>
			</Button>
		</Actions>
	</Dialog>

	<Dialog bind:open={createPosDialogOpen} surface$style="width: 500px;">
		<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
		<Title>Create new position</Title>
		<Content>
			<!--<div class="half-page-input">
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
			</div-->
			<div>
				<Select
					required
					key={currentPoolKey}
					bind:value={pool}
					on:SMUISelect:change={resetOnNewPoolSelected}
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
					<svelte:fragment slot="helperText"
						>Select the pool to provide liquidity to.</svelte:fragment
					>
				</Select>

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
					on:input={validateCreatePositionInput}
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
					on:input={validateCreatePositionInput}
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
					on:input={validateCreatePositionInput}
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
					on:input={validateCreatePositionInput}
					invalid={res1AmountInvalid}
					label="Second token amount {res1AmountInvalid ? ' - INVALID' : ''}"
					class="half-page-input"
				>
					<HelperText slot="helper">The amount for the second token of the pair.</HelperText>
				</Textfield>
			</div>
		</Content>
		<Actions>
			<div style="margin: 0 auto; display: flex;">
				<Button on:click={() => cancelCreatePosition()} variant="raised">
					<Label>Cancel</Label>
				</Button>
				<Button disabled={inputInvalid} on:click={() => createPosition()} variant="raised">
					<Label>{inputInvalidReason === null ? 'Create position' : inputInvalidReason}</Label>
				</Button>
			</div>
		</Actions>
	</Dialog>

	<h1>Existing positions</h1>
	<div>
		<Button variant="raised" on:click={() => prepareCreatePosition()}>
			<Label>Add position</Label>
		</Button>
		<DataTable stickyHeader table$aria-label="User list" style="width: 100%; margin-top: .5%">
			<Head>
				<Row>
					<Cell>Pool</Cell>
					<Cell numeric>Liq</Cell>
					<Cell numeric>Range</Cell>
					<Cell numeric>Current price</Cell>
					<Cell>Remove liq</Cell>
					<Cell>Add liq</Cell>
					<Cell>Add fees to liq</Cell>
				</Row>
			</Head>
			<Body>
				{#each Array.from(appState.accountState.poolAddrToPosition) as [poolAddr, positions]}
					{@const poolState = appState.dexState.poolAddrToPoolState.get(poolAddr)}
					{#if poolState != undefined}
						{#each positions as { id, posNFTAddr, liq, low_price, high_price }}
							<Row>
								<Cell>{poolState.resource0Symbol}/{poolState.resource1Symbol}</Cell>
								<Cell numeric>{new Decimal(liq).toDecimalPlaces(4)}</Cell>
								<Cell numeric
									>{new Decimal(low_price).toDecimalPlaces(8)} - {new Decimal(
										high_price
									).toDecimalPlaces(8)}</Cell
								>
								<Cell numeric>{new Decimal(poolState.price).toDecimalPlaces(4)}</Cell>
								<Cell>
									<Button
										variant="raised"
										on:click={() => prepareRemovePosition(poolAddr, posNFTAddr, id)}
									>
										<Label>Remove</Label>
									</Button>
								</Cell>
								<Cell>
									<Button variant="raised">
										<Label>Add</Label>
									</Button>
								</Cell>
								<Cell>
									<Button variant="raised">
										<Label>Add fees</Label>
									</Button>
								</Cell>
							</Row>
						{/each}
					{/if}
				{/each}
			</Body>
		</DataTable>
	</div>
{/if}

<style>
	* :global(.half-page-input) {
		width: 100%;
		margin-top: 0.5%;
	}
</style>
