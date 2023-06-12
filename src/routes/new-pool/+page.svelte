<script lang="ts">
	import Button, { Label } from '@smui/button'
	import Textfield from '@smui/textfield'
	import HelperText from '@smui/textfield/helper-text'
	import { newPoolTransactionManifest } from '$lib/manifests'
	import { AppConfig } from '$lib/config'
	import { walletConn } from '$lib/walletConn'
	import { appStatePromise } from '$lib/stores'
	import type { AppState } from '$lib/model'
	import { isNumber } from '$lib/utils'
	import Decimal from 'decimal.js'

	let appState: AppState | undefined = undefined
	$: Promise.resolve($appStatePromise).then((newAppState) => {
		appState = newAppState
	})

	let res0Addr: string = ''
	let res0AddrInvalid = false
	function validateRes0Addr() {
		res0AddrInvalid = res0Addr.length === 0
	}

	let res1Addr: string = ''
	let res1AddrInvalid = false
	function validateRes1Addr() {
		res1AddrInvalid = res1Addr.length === 0
	}

	let fee: string = ''
	let feeInvalid: boolean = false
	function validateFee() {
		if (!isNumber(fee)) {
			feeInvalid = true
			return
		}
		const feeNumber = parseFloat(fee)
		console.log('feeNumber: ' + feeNumber)
		if (feeNumber < 0 || feeNumber > 1) {
			feeInvalid = true
			return
		}
		feeInvalid = false
	}

	let price: string = ''
	let priceInvalid: boolean = false
	function validatePrice() {
		if (!isNumber(price)) {
			priceInvalid = true
			return
		}
		const priceNumber = parseFloat(price)
		if (priceNumber < AppConfig.minPrice || priceNumber > AppConfig.maxPrice) {
			priceInvalid = true
			return
		}
		priceInvalid = false
	}

	async function createPool() {
		console.log('res0Addr=' + res0Addr)
		console.log('res1Addr=' + res1Addr)
		console.log('fee=' + fee)
		console.log('price=' + price)

		validateRes0Addr()
		validateRes1Addr()
		validateFee()
		validatePrice()

		const accountAddr: string | undefined = appState?.accountState?.accountAddr
		if (
			accountAddr !== undefined &&
			!res0AddrInvalid &&
			!res1AddrInvalid &&
			!feeInvalid &&
			!priceInvalid
		) {
			console.log('Sending create pool transaction...')
			const result = await walletConn.sendTransaction({
				transactionManifest: newPoolTransactionManifest(
					accountAddr,
					res0Addr,
					res1Addr,
					fee,
					new Decimal(price).sqrt().toFixed()
				),
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
		on:input={validateRes0Addr}
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
		on:input={validateRes1Addr}
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
		on:input={validateFee}
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
		on:input={validatePrice}
		invalid={priceInvalid}
		label="Price {priceInvalid ? ' - INVALID' : ''}"
		class="half-page-input"
	>
		<HelperText slot="helper">The initial price of the pair. It must be greater than 0.</HelperText>
	</Textfield>
	<Button on:click={() => createPool()} variant="raised" class="half-page-input">
		<Label>Create pool</Label>
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
		width: 50%;
		margin-top: .5%;
	}
</style>
