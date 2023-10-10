import { RadixNetwork } from '@radixdlt/radix-dapp-toolkit'

export const AppConfig = {
    dAppId: 'account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua',
    networkId: RadixNetwork.Stokenet, // 12 is for RCnet 01 for Mainnet
    dAppName: 'MojitoSwap',
    dAppVersion: '0.1.0',
    dexPackageAddr: 'package_tdx_2_1p5vq4c5euldnlmlpv83rrsre7edpd06k5rt0tevnfp6drwng06q98g', // for reference, not needed
    dexComponentAddr: 'component_tdx_2_1cz8hcmc5u9rtfny3yrt8hewm4wlsjyatjs7trgzgdl82vnucfa7q7l',
    poolPackageAddr: 'package_tdx_2_1pkmkzk8w82r064prwecrqrjrfrp88jhdwqkyv49juek4ynhn7476xx',
    dexAdminBadgeAddr: 'resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773', // hard code this to avoid a call to gateway
    gatewayBasePath: 'https://babylon-stokenet-gateway.radixdlt.com',
    stateRefreshMs: 30_000,
    minPrice:  0.000000000000019849,
    maxPrice:  170134484377190040957.155711420855095752,
    removeCommittedTransactionTimeoutMs: 600000,
    decimalPrecision: 18
}

// xrd: resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc
// moj usdt: resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu
// moj btc: resource_tdx_2_1tkjmxmcg9czh3p4y3e3hr9cdgv4umn4qg9lm46mrvpuarschcwwmn7

// pool xrd-usdt: component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv
// pool xrd-usdt: component_tdx_2_1cp6cthqe2wee0nwg29hyz0xefvtxrpj4yf9yh97nszp3avwnhxwn5e
// pool btc-usdt: component_tdx_2_1cqxshx9mcg8yqkjvpxaj3e7x6vgzk6c8eyh4eglwkjjuld90qs4mdl