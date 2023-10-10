<script lang="ts">
	import Button, { Label } from '@smui/button'
	import Textfield from '@smui/textfield'
	import HelperText from '@smui/textfield/helper-text'
	import { newPoolTransactionManifest } from '$lib/manifests'
	import { AppConfig } from '$lib/config'
	import { walletConn } from '$lib/walletConn'
	import { appStatePromise } from '$lib/stores'
	import type { AppState } from '$lib/model'
	import { isNumber, isPriceInvalid } from '$lib/utils'
	import Decimal from 'decimal.js'

	let appState: AppState | undefined = undefined
	$: Promise.resolve($appStatePromise).then((newAppState) => {
		appState = newAppState
	})

	let res0Addr: string = ''
	let res0AddrInvalid = false

	let res1Addr: string = ''
	let res1AddrInvalid = false

	let fee: string = ''
	let feeInvalid: boolean = false

	let price: string = ''
	let priceInvalid: boolean = false

	let minPrice: string = ''
	let minPriceInvalid = false

	let maxPrice: string = ''
	let maxPriceInvalid = false

	let res0Amount: string = ''
	let res0AmountInvalid = false

	let res1Amount: string = ''
	let res1AmountInvalid = false

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
		res0AddrInvalid = res0Addr.length === 0;
		if (res0AddrInvalid) {
			inputInvalidReason = 'Input a res0 addr'
		}
		res1AddrInvalid = res1Addr.length === 0
		if (res1AddrInvalid) {
			inputInvalidReason = 'Input a res1 addr'
		}
		feeInvalid = false
		if (!isNumber(fee)) {
			feeInvalid = true
			inputInvalidReason = 'Input a valid number for fee'
			return
		}
		const feeNumber = parseFloat(fee)
		console.log('feeNumber: ' + feeNumber)
		if (feeNumber < 0 || feeNumber > 1) {
			feeInvalid = true
			inputInvalidReason = 'Fee must >=0 and <= 1'
			return
		}
		priceInvalid = false
		if (isPriceInvalid(price)) {
			inputInvalid = true
			priceInvalid = true
			inputInvalidReason = 'Input a valid pool price'
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
		if (res0AmountDec.comparedTo(appState.accountState.getFungibleAmount(res0Addr)) > 0) {
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
		if (res1AmountDec.comparedTo(appState.accountState.getFungibleAmount(res1Addr)) > 0) {
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
	}

	async function createPool() {
		console.log('res0Addr=' + res0Addr)
		console.log('res1Addr=' + res1Addr)
		console.log('fee=' + fee)
		console.log('price=' + price)
		console.log('minPrice=' + minPrice)
		console.log('maxPrice=' + maxPrice)
		console.log('res0Amount=' + res0Amount)
		console.log('res1Amount=' + res1Amount)

		const accountAddr: string | undefined = appState?.accountState?.accountAddr
		if (
			accountAddr !== undefined &&
			!res0AddrInvalid &&
			!res1AddrInvalid &&
			!feeInvalid &&
			!priceInvalid &&
			!minPriceInvalid &&
			!maxPriceInvalid &&
			!res0AmountInvalid &&
			!res1AmountInvalid
		) {
			console.log('Sending create pool transaction...')
			const txManif = newPoolTransactionManifest(
					accountAddr,
					res0Addr,
					res1Addr,
					fee,
					new Decimal(price).sqrt().toFixed(AppConfig.decimalPrecision),
					new Decimal(minPrice).sqrt().toFixed(AppConfig.decimalPrecision),
					new Decimal(maxPrice).sqrt().toFixed(AppConfig.decimalPrecision),
					res0Amount,
					res1Amount
				)
			console.log(txManif)
			const result = await walletConn.walletApi.sendTransaction({
				transactionManifest: txManif,
				version: 1
			})
			if (result.isErr()) {
				console.log('Error when sending transaction ' + result.error)
				throw result.error
			}
			appState?.watchTx(result.value)
		}
	}
</script>

<h1>New pool page</h1>

<div>
	<Textfield
		required
		variant="filled"
		bind:value={res0Addr}
		on:input={validateInput}
		invalid={res0AddrInvalid}
		label="First fungible resource address {res0AddrInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">Resource address of the first fungible of the pair</HelperText>
	</Textfield>
	<Textfield
		required
		variant="filled"
		bind:value={res1Addr}
		on:input={validateInput}
		invalid={res1AddrInvalid}
		label="Second fungible resource address {res1AddrInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">Resource address of the second fungible of the pair</HelperText>
	</Textfield>
	<Textfield
		required
		variant="filled"
		bind:value={fee}
		on:input={validateInput}
		invalid={feeInvalid}
		label="Fee {feeInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper"
			>The swap fee percentage, e.g. 0.3%. It must be a value between 0 and 1.</HelperText
		>
	</Textfield>
	<Textfield
		required
		variant="filled"
		bind:value={price}
		on:input={validateInput}
		invalid={priceInvalid}
		label="Price {priceInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">The initial price of the pair. It must be greater than 0.</HelperText>
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
	<Button disabled={inputInvalid} on:click={() => createPool()} variant="raised" class="half-page-input">
		<Label>{inputInvalidReason === null ? 'Create pool' : inputInvalidReason}</Label>
	</Button>
</div>

<div>
	{#if appState !== undefined}
		Recent transactions:
		<ul>
			{#each Array.from(appState?.inProgressTxs) as [txIdentHash, { status, statusDate }]}
				<li>{txIdentHash} => [{status}, {statusDate}]</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	* :global(.half-page-input) {
		width: 60%;
		margin-top: .5%;
	}
</style>
