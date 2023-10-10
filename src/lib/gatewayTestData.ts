import { AppConfig } from './config'
import type { StateEntityDetailsResponse, StateEntityNonFungibleResourceVaultsPageResponse, StateNonFungibleIdsResponse, StateNonFungibleDataResponse } from '@radixdlt/babylon-gateway-api-sdk'
import type { StreamTransactionsResponse } from '@radixdlt/babylon-gateway-api-sdk'

export const stateEntityDetailsTestData = new Map<string, Map<string, StateEntityDetailsResponse>>(
    [
        [
            'Dex with pools',
            new Map<string, StateEntityDetailsResponse>(
                [
                    [
                        AppConfig.dexComponentAddr,
                        {
                            "ledger_state": {
                                "network": "stokenet",
                                "state_version": 3348688,
                                "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                                "epoch": 2804,
                                "round": 489
                            },
                            "items": [
                                {
                                    "address": "component_tdx_2_1cz8hcmc5u9rtfny3yrt8hewm4wlsjyatjs7trgzgdl82vnucfa7q7l",
                                    "fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "explicit_metadata": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "details": {
                                        "package_address": "package_tdx_2_1p5vq4c5euldnlmlpv83rrsre7edpd06k5rt0tevnfp6drwng06q98g",
                                        "blueprint_name": "Dex",
                                        "blueprint_version": "1.0.0",
                                        "state": {
                                            "kind": "Tuple",
                                            "type_name": "Dex",
                                            "fields": [
                                                {
                                                    "kind": "Reference",
                                                    "type_name": "ResourceAddress",
                                                    "field_name": "dex_admin_badge_addr",
                                                    "value": "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773"
                                                },
                                                {
                                                    "kind": "Array",
                                                    "field_name": "pools",
                                                    "element_kind": "Reference",
                                                    "element_name": "ComponentAddress",
                                                    "elements": [
                                                        {
                                                            "kind": "Reference",
                                                            "type_name": "ComponentAddress",
                                                            "value": "component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "role_assignments": {
                                            "owner": {
                                                "rule": {
                                                    "type": "DenyAll"
                                                },
                                                "updater": "None"
                                            },
                                            "entries": [
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "admin"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "requirement": {
                                                                        "type": "Resource",
                                                                        "resource": "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "updater_roles": []
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "type": "Component"
                                    }
                                }
                            ]
                        }
                    ],
                    [
                        'component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv',
                        {
                            "ledger_state": {
                                "network": "stokenet",
                                "state_version": 3348688,
                                "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                                "epoch": 2804,
                                "round": 489
                            },
                            "items": [
                                {
                                    "address": "component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv",
                                    "fungible_resources": {
                                        "total_count": 3,
                                        "items": [
                                            {
                                                "vaults": {
                                                    "total_count": 1,
                                                    "items": [
                                                        {
                                                            "vault_address": "internal_vault_tdx_2_1tzrjc45ghscxpgcsnu4ayn9axsj4ku2vx0wkhdk564st4sp2l3dy9a",
                                                            "amount": "1",
                                                            "last_updated_at_state_version": 3347684
                                                        }
                                                    ]
                                                },
                                                "aggregation_level": "Vault",
                                                "resource_address": "resource_tdx_2_1thc639q73xqt88xf7j628wynswjjs9cqpg0aqh8tjavwxp9wpv4ge9",
                                                "explicit_metadata": {
                                                    "total_count": 0,
                                                    "items": []
                                                }
                                            },
                                            {
                                                "vaults": {
                                                    "total_count": 1,
                                                    "items": [
                                                        {
                                                            "vault_address": "internal_vault_tdx_2_1tqkase0ck3lesxgwhzjf356mt9f5f4045utrmcsfqld98kt8j9gtnc",
                                                            "amount": "1000",
                                                            "last_updated_at_state_version": 3347684
                                                        }
                                                    ]
                                                },
                                                "aggregation_level": "Vault",
                                                "resource_address": "resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu",
                                                "explicit_metadata": {
                                                    "total_count": 0,
                                                    "items": []
                                                }
                                            },
                                            {
                                                "vaults": {
                                                    "total_count": 1,
                                                    "items": [
                                                        {
                                                            "vault_address": "internal_vault_tdx_2_1tr70yt9669huevcmlxdtn8nfupy0xjph0vr39tmmn0hf03vsgwyz6r",
                                                            "amount": "990.099500643531375819",
                                                            "last_updated_at_state_version": 3347684
                                                        }
                                                    ]
                                                },
                                                "aggregation_level": "Vault",
                                                "resource_address": "resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc",
                                                "explicit_metadata": {
                                                    "total_count": 2,
                                                    "items": [
                                                        {
                                                            "key": "name",
                                                            "value": {
                                                                "raw_hex": "5c2200010c055261646978",
                                                                "programmatic_json": {
                                                                    "kind": "Enum",
                                                                    "variant_id": "0",
                                                                    "fields": [
                                                                        {
                                                                            "kind": "String",
                                                                            "value": "Radix"
                                                                        }
                                                                    ]
                                                                },
                                                                "typed": {
                                                                    "value": "Radix",
                                                                    "type": "String"
                                                                }
                                                            },
                                                            "is_locked": true,
                                                            "last_updated_at_state_version": 2
                                                        },
                                                        {
                                                            "key": "description",
                                                            "value": {
                                                                "raw_hex": "5c2200010c9e01546865205261646978205075626c6963204e6574776f726b2773206e617469766520746f6b656e2c207573656420746f2070617920746865206e6574776f726b2773207265717569726564207472616e73616374696f6e206665657320616e6420746f2073656375726520746865206e6574776f726b207468726f756768207374616b696e6720746f206974732076616c696461746f72206e6f6465732e",
                                                                "programmatic_json": {
                                                                    "kind": "Enum",
                                                                    "variant_id": "0",
                                                                    "fields": [
                                                                        {
                                                                            "kind": "String",
                                                                            "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes."
                                                                        }
                                                                    ]
                                                                },
                                                                "typed": {
                                                                    "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes.",
                                                                    "type": "String"
                                                                }
                                                            },
                                                            "is_locked": true,
                                                            "last_updated_at_state_version": 2
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "explicit_metadata": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "details": {
                                        "package_address": "package_tdx_2_1pkmkzk8w82r064prwecrqrjrfrp88jhdwqkyv49juek4ynhn7476xx",
                                        "blueprint_name": "Pool",
                                        "blueprint_version": "1.0.0",
                                        "state": {
                                            "kind": "Tuple",
                                            "type_name": "Pool",
                                            "fields": [
                                                {
                                                    "kind": "Own",
                                                    "type_name": "Vault",
                                                    "field_name": "vault0",
                                                    "value": "internal_vault_tdx_2_1tr70yt9669huevcmlxdtn8nfupy0xjph0vr39tmmn0hf03vsgwyz6r"
                                                },
                                                {
                                                    "kind": "Own",
                                                    "type_name": "Vault",
                                                    "field_name": "vault1",
                                                    "value": "internal_vault_tdx_2_1tqkase0ck3lesxgwhzjf356mt9f5f4045utrmcsfqld98kt8j9gtnc"
                                                },
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "live_liq",
                                                    "value": "1000.100005088515876415"
                                                },
                                                {
                                                    "kind": "I32",
                                                    "field_name": "tick",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "sqrt_price",
                                                    "value": "1"
                                                },
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "fee",
                                                    "value": "0.03"
                                                },
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "fee_global0",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "fee_global1",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "Reference",
                                                    "type_name": "ResourceAddress",
                                                    "field_name": "pos_nft_addr_resource_manager",
                                                    "value": "resource_tdx_2_1nt0uz6tdsz0v2a37g0eajjhugzm607y6ldkyd207wpy6c8zygp6tmt"
                                                },
                                                {
                                                    "kind": "Map",
                                                    "field_name": "positions",
                                                    "key_kind": "NonFungibleLocalId",
                                                    "value_kind": "Tuple",
                                                    "value_type_name": "Position",
                                                    "entries": [
                                                        {
                                                            "key": {
                                                                "kind": "NonFungibleLocalId",
                                                                "value": "{f0b78d2ab8014de2-390c0dd66455bbee-2a35f213abd1b81a-f86031cd94593007}"
                                                            },
                                                            "value": {
                                                                "kind": "Tuple",
                                                                "type_name": "Position",
                                                                "fields": [
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "liq",
                                                                        "value": "1000.100005088515876415"
                                                                    },
                                                                    {
                                                                        "kind": "I32",
                                                                        "field_name": "low_tick",
                                                                        "value": "-184217"
                                                                    },
                                                                    {
                                                                        "kind": "I32",
                                                                        "field_name": "high_tick",
                                                                        "value": "92109"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "range_fee0",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "range_fee1",
                                                                        "value": "0"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    "kind": "Array",
                                                    "field_name": "used_ticks",
                                                    "element_kind": "I32",
                                                    "elements": [
                                                        {
                                                            "kind": "I32",
                                                            "value": "-184217"
                                                        },
                                                        {
                                                            "kind": "I32",
                                                            "value": "92109"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "kind": "Map",
                                                    "field_name": "tick_states",
                                                    "key_kind": "I32",
                                                    "value_kind": "Tuple",
                                                    "value_type_name": "TickState",
                                                    "entries": [
                                                        {
                                                            "key": {
                                                                "kind": "I32",
                                                                "value": "-184217"
                                                            },
                                                            "value": {
                                                                "kind": "Tuple",
                                                                "type_name": "TickState",
                                                                "fields": [
                                                                    {
                                                                        "kind": "I32",
                                                                        "field_name": "tick",
                                                                        "value": "-184217"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "liq_net",
                                                                        "value": "1000.100005088515876415"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "liq_gross",
                                                                        "value": "1000.100005088515876415"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "fee_outside0",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "fee_outside1",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "Bool",
                                                                        "field_name": "init",
                                                                        "value": true
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "key": {
                                                                "kind": "I32",
                                                                "value": "92109"
                                                            },
                                                            "value": {
                                                                "kind": "Tuple",
                                                                "type_name": "TickState",
                                                                "fields": [
                                                                    {
                                                                        "kind": "I32",
                                                                        "field_name": "tick",
                                                                        "value": "92109"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "liq_net",
                                                                        "value": "-1000.100005088515876415"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "liq_gross",
                                                                        "value": "1000.100005088515876415"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "fee_outside0",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "Decimal",
                                                                        "field_name": "fee_outside1",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "Bool",
                                                                        "field_name": "init",
                                                                        "value": true
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    "kind": "Own",
                                                    "type_name": "Vault",
                                                    "field_name": "pos_nft_minter_badge",
                                                    "value": "internal_vault_tdx_2_1tzrjc45ghscxpgcsnu4ayn9axsj4ku2vx0wkhdk564st4sp2l3dy9a"
                                                },
                                                {
                                                    "kind": "Reference",
                                                    "type_name": "ResourceAddress",
                                                    "field_name": "admin_badge_addr",
                                                    "value": "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773"
                                                }
                                            ]
                                        },
                                        "role_assignments": {
                                            "owner": {
                                                "rule": {
                                                    "type": "DenyAll"
                                                },
                                                "updater": "None"
                                            },
                                            "entries": [
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "admin"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "requirement": {
                                                                        "type": "Resource",
                                                                        "resource": "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "updater_roles": []
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "type": "Component"
                                    }
                                }
                            ]
                        }
                    ],
                    [
                        'resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc',
                        {
                            "ledger_state": {
                                "network": "stokenet",
                                "state_version": 3348688,
                                "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                                "epoch": 2804,
                                "round": 489
                            },
                            "items": [
                                {
                                    "address": "resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc",
                                    "fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "total_count": 6,
                                        "items": [
                                            {
                                                "key": "tags",
                                                "value": {
                                                    "raw_hex": "5c228001200c00",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "128",
                                                        "fields": [
                                                            {
                                                                "kind": "Array",
                                                                "element_kind": "String",
                                                                "elements": []
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "values": [],
                                                        "type": "StringArray"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            },
                                            {
                                                "key": "icon_url",
                                                "value": {
                                                    "raw_hex": "5c220d010c3468747470733a2f2f6173736574732e7261646978646c742e636f6d2f69636f6e732f69636f6e2d7872642d33327833322e706e67",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "13",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "https://assets.radixdlt.com/icons/icon-xrd-32x32.png"
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "https://assets.radixdlt.com/icons/icon-xrd-32x32.png",
                                                        "type": "Url"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            },
                                            {
                                                "key": "symbol",
                                                "value": {
                                                    "raw_hex": "5c2200010c03585244",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "0",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "XRD"
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "XRD",
                                                        "type": "String"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            },
                                            {
                                                "key": "description",
                                                "value": {
                                                    "raw_hex": "5c2200010c9e01546865205261646978205075626c6963204e6574776f726b2773206e617469766520746f6b656e2c207573656420746f2070617920746865206e6574776f726b2773207265717569726564207472616e73616374696f6e206665657320616e6420746f2073656375726520746865206e6574776f726b207468726f756768207374616b696e6720746f206974732076616c696461746f72206e6f6465732e",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "0",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes."
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes.",
                                                        "type": "String"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            },
                                            {
                                                "key": "name",
                                                "value": {
                                                    "raw_hex": "5c2200010c055261646978",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "0",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "Radix"
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "Radix",
                                                        "type": "String"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            },
                                            {
                                                "key": "info_url",
                                                "value": {
                                                    "raw_hex": "5c220d010c1b68747470733a2f2f746f6b656e732e7261646978646c742e636f6d",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "13",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "https://tokens.radixdlt.com"
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "https://tokens.radixdlt.com",
                                                        "type": "Url"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            }
                                        ]
                                    },
                                    "explicit_metadata": {
                                        "total_count": 2,
                                        "items": [
                                            {
                                                "key": "name",
                                                "value": {
                                                    "raw_hex": "5c2200010c055261646978",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "0",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "Radix"
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "Radix",
                                                        "type": "String"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            },
                                            {
                                                "key": "description",
                                                "value": {
                                                    "raw_hex": "5c2200010c9e01546865205261646978205075626c6963204e6574776f726b2773206e617469766520746f6b656e2c207573656420746f2070617920746865206e6574776f726b2773207265717569726564207472616e73616374696f6e206665657320616e6420746f2073656375726520746865206e6574776f726b207468726f756768207374616b696e6720746f206974732076616c696461746f72206e6f6465732e",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "0",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes."
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes.",
                                                        "type": "String"
                                                    }
                                                },
                                                "is_locked": true,
                                                "last_updated_at_state_version": 2
                                            }
                                        ]
                                    },
                                    "details": {
                                        "role_assignments": {
                                            "owner": {
                                                "rule": {
                                                    "type": "Protected",
                                                    "access_rule": {
                                                        "type": "ProofRule",
                                                        "proof_rule": {
                                                            "type": "Require",
                                                            "requirement": {
                                                                "type": "NonFungible",
                                                                "non_fungible": {
                                                                    "local_id": {
                                                                        "id_type": "Integer",
                                                                        "sbor_hex": "5cc0010000000000000000",
                                                                        "simple_rep": "#0#"
                                                                    },
                                                                    "resource_address": "resource_tdx_2_1nfxxxxxxxxxxsystxnxxxxxxxxx002683325037xxxxxxxxxcss8hx"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "updater": "None"
                                            },
                                            "entries": [
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "burner"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "requirement": {
                                                                        "type": "NonFungible",
                                                                        "non_fungible": {
                                                                            "local_id": {
                                                                                "id_type": "Bytes",
                                                                                "sbor_hex": "5cc0022068c44e9d432e71c51e2a2ac285897b372328d8b31374ff29131bc6b25b6bd070",
                                                                                "simple_rep": "[68c44e9d432e71c51e2a2ac285897b372328d8b31374ff29131bc6b25b6bd070]"
                                                                            },
                                                                            "resource_address": "resource_tdx_2_1nfxxxxxxxxxxglcllrxxxxxxxxx002350006550xxxxxxxxxqtcnwk"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "burner_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "minter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "requirement": {
                                                                        "type": "NonFungible",
                                                                        "non_fungible": {
                                                                            "local_id": {
                                                                                "id_type": "Bytes",
                                                                                "sbor_hex": "5cc0022068c44e9d432e71c51e2a2ac285897b372328d8b31374ff29131bc6b25b6bd070",
                                                                                "simple_rep": "[68c44e9d432e71c51e2a2ac285897b372328d8b31374ff29131bc6b25b6bd070]"
                                                                            },
                                                                            "resource_address": "resource_tdx_2_1nfxxxxxxxxxxglcllrxxxxxxxxx002350006550xxxxxxxxxqtcnwk"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "minter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "freezer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "freezer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "recaller"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "recaller_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "depositor"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "depositor_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "withdrawer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "withdrawer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "burner_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "burner_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "minter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "minter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "freezer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "freezer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "recaller_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "recaller_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "depositor_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "depositor_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "withdrawer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "withdrawer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "divisibility": 18,
                                        "total_supply": "1704007780150.089604868834237738",
                                        "total_minted": "1704007842083.494752432584237138",
                                        "total_burned": "61933.4051475637499994",
                                        "type": "FungibleResource"
                                    }
                                }
                            ]
                        }

                    ],
                    [
                        'resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu',
                        {
                            "ledger_state": {
                                "network": "stokenet",
                                "state_version": 3348688,
                                "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                                "epoch": 2804,
                                "round": 489
                            },
                            "items": [
                                {
                                    "address": "resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu",
                                    "fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "total_count": 1,
                                        "items": [
                                            {
                                                "key": "symbol",
                                                "value": {
                                                    "raw_hex": "5c2200010c084d4f4a2055534454",
                                                    "programmatic_json": {
                                                        "kind": "Enum",
                                                        "variant_id": "0",
                                                        "fields": [
                                                            {
                                                                "kind": "String",
                                                                "value": "MOJ USDT"
                                                            }
                                                        ]
                                                    },
                                                    "typed": {
                                                        "value": "MOJ USDT",
                                                        "type": "String"
                                                    }
                                                },
                                                "is_locked": false,
                                                "last_updated_at_state_version": 3342018
                                            }
                                        ]
                                    },
                                    "explicit_metadata": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "details": {
                                        "role_assignments": {
                                            "owner": {
                                                "rule": {
                                                    "type": "DenyAll"
                                                },
                                                "updater": "None"
                                            },
                                            "entries": [
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "burner"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "burner_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "minter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "minter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "freezer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "freezer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "recaller"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "recaller_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "depositor"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "depositor_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "withdrawer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "withdrawer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "burner_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "burner_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "minter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "minter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "freezer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "freezer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "recaller_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "recaller_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "depositor_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "depositor_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "withdrawer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Main",
                                                            "name": "withdrawer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "divisibility": 18,
                                        "total_supply": "10000",
                                        "total_minted": "10000",
                                        "total_burned": "0",
                                        "type": "FungibleResource"
                                    }
                                }
                            ]
                        }

                    ]
                ]
            )
        ],
        [
            'Dex without pools',
            new Map<string, StateEntityDetailsResponse>(
                [
                    [
                        AppConfig.dexComponentAddr,
                        {
                            "ledger_state": {
                                "network": "stokenet",
                                "state_version": 3348688,
                                "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                                "epoch": 2804,
                                "round": 489
                            },
                            "items": [
                                {
                                    "address": "component_tdx_2_1cz8hcmc5u9rtfny3yrt8hewm4wlsjyatjs7trgzgdl82vnucfa7q7l",
                                    "fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "explicit_metadata": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "details": {
                                        "package_address": "package_tdx_2_1p5vq4c5euldnlmlpv83rrsre7edpd06k5rt0tevnfp6drwng06q98g",
                                        "blueprint_name": "Dex",
                                        "blueprint_version": "1.0.0",
                                        "state": {
                                            "kind": "Tuple",
                                            "type_name": "Dex",
                                            "fields": [
                                                {
                                                    "kind": "Reference",
                                                    "type_name": "ResourceAddress",
                                                    "field_name": "dex_admin_badge_addr",
                                                    "value": "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773"
                                                },
                                                {
                                                    "kind": "Array",
                                                    "field_name": "pools",
                                                    "element_kind": "Reference",
                                                    "element_name": "ComponentAddress",
                                                    "elements": []
                                                }
                                            ]
                                        },
                                        "role_assignments": {
                                            "owner": {
                                                "rule": {
                                                    "type": "DenyAll"
                                                },
                                                "updater": "None"
                                            },
                                            "entries": [
                                                {
                                                    "role_key": {
                                                        "module": "Main",
                                                        "name": "admin"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Explicit",
                                                        "explicit_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "requirement": {
                                                                        "type": "Resource",
                                                                        "resource": "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "updater_roles": []
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Metadata",
                                                            "name": "metadata_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_setter_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_locker_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "role_key": {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    },
                                                    "assignment": {
                                                        "resolution": "Owner"
                                                    },
                                                    "updater_roles": [
                                                        {
                                                            "module": "Royalty",
                                                            "name": "royalty_claimer_updater"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "type": "Component"
                                    }
                                }
                            ]
                        }
                    ]
                ]
            )
        ],
        ['Account state admin', new Map<string, StateEntityDetailsResponse>(
            [
                [
                    'account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua',
                    {
                        "ledger_state": {
                            "network": "stokenet",
                            "state_version": 3348688,
                            "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                            "epoch": 2804,
                            "round": 489
                        },
                        "items": [
                            {
                                "address": "account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua",
                                "fungible_resources": {
                                    "total_count": 3,
                                    "items": [
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "vault_address": "internal_vault_tdx_2_1treynadvku0g9fc6jesklsrqj5sm66vs96vf4mlcvtcn80lqq58ly7",
                                                        "amount": "9000",
                                                        "last_updated_at_state_version": 3347684
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu",
                                            "explicit_metadata": {
                                                "total_count": 0,
                                                "items": []
                                            }
                                        },
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "vault_address": "internal_vault_tdx_2_1tzn67hgwy6j5zdxvxhux7chzs9543j24t6tuul4kfkmcrkapkthsv6",
                                                        "amount": "8745.016306942658624181",
                                                        "last_updated_at_state_version": 3347684
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc",
                                            "explicit_metadata": {
                                                "total_count": 2,
                                                "items": [
                                                    {
                                                        "key": "name",
                                                        "value": {
                                                            "raw_hex": "5c2200010c055261646978",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Radix"
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Radix",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 2
                                                    },
                                                    {
                                                        "key": "description",
                                                        "value": {
                                                            "raw_hex": "5c2200010c9e01546865205261646978205075626c6963204e6574776f726b2773206e617469766520746f6b656e2c207573656420746f2070617920746865206e6574776f726b2773207265717569726564207472616e73616374696f6e206665657320616e6420746f2073656375726520746865206e6574776f726b207468726f756768207374616b696e6720746f206974732076616c696461746f72206e6f6465732e",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes."
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes.",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 2
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "vault_address": "internal_vault_tdx_2_1tzgrr9pn2x433vqakdyq6gk7y4vg7v8z3l02zn7ryk875wn62ynhdj",
                                                        "amount": "1",
                                                        "last_updated_at_state_version": 3309175
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773",
                                            "explicit_metadata": {
                                                "total_count": 0,
                                                "items": []
                                            }
                                        }
                                    ]
                                },
                                "non_fungible_resources": {
                                    "total_count": 2,
                                    "items": [
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "total_count": 1,
                                                        "items": [
                                                            "{f0b78d2ab8014de2-390c0dd66455bbee-2a35f213abd1b81a-f86031cd94593007}"
                                                        ],
                                                        "vault_address": "internal_vault_tdx_2_1nqj2xtdh547zxjegx3lfrlvmrr2v2j8x4ceacjygjcfy44sqgkkr77",
                                                        "last_updated_at_state_version": 3347684
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1nt0uz6tdsz0v2a37g0eajjhugzm607y6ldkyd207wpy6c8zygp6tmt",
                                            "explicit_metadata": {
                                                "total_count": 0,
                                                "items": []
                                            }
                                        },
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "total_count": 2,
                                                        "items": [
                                                            "[0db76158ee3a86fd54237670300e4348c273caed702c4654b2e66d524ef3]",
                                                            "[0d180ae299e7db3fefe161e231c079f65a16bf56a0d6f5e5934874d1ba68]"
                                                        ],
                                                        "vault_address": "internal_vault_tdx_2_1nrcxsnrd98y50lz3g7e2rrmth2qs74ssmq27t6mk5l2hmzvwhgje9w",
                                                        "last_updated_at_state_version": 3304402
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1nfxxxxxxxxxxpkgwnrxxxxxxxxx002558553505xxxxxxxxxfzgzzk",
                                            "explicit_metadata": {
                                                "total_count": 2,
                                                "items": [
                                                    {
                                                        "key": "name",
                                                        "value": {
                                                            "raw_hex": "5c2200010c145061636b616765204f776e657220426164676573",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Package Owner Badges"
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Package Owner Badges",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 2
                                                    },
                                                    {
                                                        "key": "description",
                                                        "value": {
                                                            "raw_hex": "5c2200010c724261646765732063726561746564206279207468652052616469782073797374656d20746861742070726f7669646520696e646976696475616c20636f6e74726f6c206f76657220626c75657072696e74207061636b61676573206465706c6f79656420627920646576656c6f706572732e",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Badges created by the Radix system that provide individual control over blueprint packages deployed by developers."
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Badges created by the Radix system that provide individual control over blueprint packages deployed by developers.",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 2
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "metadata": {
                                    "total_count": 2,
                                    "items": [
                                        {
                                            "key": "owner_keys",
                                            "value": {
                                                "raw_hex": "5c228f01202201010120071d9baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5",
                                                "programmatic_json": {
                                                    "kind": "Enum",
                                                    "variant_id": "143",
                                                    "fields": [
                                                        {
                                                            "kind": "Array",
                                                            "element_kind": "Enum",
                                                            "elements": [
                                                                {
                                                                    "kind": "Enum",
                                                                    "variant_id": "1",
                                                                    "fields": [
                                                                        {
                                                                            "kind": "Bytes",
                                                                            "element_kind": "U8",
                                                                            "hex": "9baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "typed": {
                                                    "values": [
                                                        {
                                                            "hash_hex": "9baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5",
                                                            "key_hash_type": "EddsaEd25519"
                                                        }
                                                    ],
                                                    "type": "PublicKeyHashArray"
                                                }
                                            },
                                            "is_locked": false,
                                            "last_updated_at_state_version": 3299047
                                        },
                                        {
                                            "key": "owner_badge",
                                            "value": {
                                                "raw_hex": "5c220b01c0021e519baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5",
                                                "programmatic_json": {
                                                    "kind": "Enum",
                                                    "variant_id": "11",
                                                    "fields": [
                                                        {
                                                            "kind": "NonFungibleLocalId",
                                                            "value": "[519baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5]"
                                                        }
                                                    ]
                                                },
                                                "typed": {
                                                    "value": "[519baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5]",
                                                    "type": "NonFungibleLocalId"
                                                }
                                            },
                                            "is_locked": true,
                                            "last_updated_at_state_version": 3299047
                                        }
                                    ]
                                },
                                "explicit_metadata": {
                                    "total_count": 0,
                                    "items": []
                                },
                                "details": {
                                    "package_address": "package_tdx_2_1pkgxxxxxxxxxaccntxxxxxxxxxx000929625493xxxxxxxxx9jat20",
                                    "blueprint_name": "Account",
                                    "blueprint_version": "1.0.0",
                                    "state": {
                                        "default_deposit_rule": "Accept"
                                    },
                                    "role_assignments": {
                                        "owner": {
                                            "rule": {
                                                "type": "Protected",
                                                "access_rule": {
                                                    "type": "ProofRule",
                                                    "proof_rule": {
                                                        "type": "Require",
                                                        "requirement": {
                                                            "type": "NonFungible",
                                                            "non_fungible": {
                                                                "local_id": {
                                                                    "id_type": "Bytes",
                                                                    "sbor_hex": "5cc0021d9baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5",
                                                                    "simple_rep": "[9baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5]"
                                                                },
                                                                "resource_address": "resource_tdx_2_1nfxxxxxxxxxxed25sgxxxxxxxxx002236757237xxxxxxxxx3e2cpa"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "updater": "Object"
                                        },
                                        "entries": [
                                            {
                                                "role_key": {
                                                    "module": "Main",
                                                    "name": "securify"
                                                },
                                                "assignment": {
                                                    "resolution": "Explicit",
                                                    "explicit_rule": {
                                                        "type": "Protected",
                                                        "access_rule": {
                                                            "type": "ProofRule",
                                                            "proof_rule": {
                                                                "type": "Require",
                                                                "requirement": {
                                                                    "type": "NonFungible",
                                                                    "non_fungible": {
                                                                        "local_id": {
                                                                            "id_type": "Bytes",
                                                                            "sbor_hex": "5cc0021d9baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5",
                                                                            "simple_rep": "[9baed0346caf958ebf1e752e5da7ca68bfa71a30df17ca85d96b8f92f5]"
                                                                        },
                                                                        "resource_address": "resource_tdx_2_1nfxxxxxxxxxxed25sgxxxxxxxxx002236757237xxxxxxxxx3e2cpa"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Main",
                                                        "name": "_self_"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_locker"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_locker_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_setter"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_setter_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_setter"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_setter_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_locker"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_locker_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_claimer"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_claimer_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "type": "Component"
                                }
                            }
                        ]
                    }
                ]
            ]
        )],
        ['Account state not admin', new Map<string, StateEntityDetailsResponse>(
            [
                ['account_tdx_2_129as4l332h8euyes6csxmn0enps2kzl6afmhwmjpp5q4ukwmv3mvld',
                    {
                        "ledger_state": {
                            "network": "stokenet",
                            "state_version": 3348688,
                            "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                            "epoch": 2804,
                            "round": 489
                        },
                        "items": [
                            {
                                "address": "account_tdx_2_129as4l332h8euyes6csxmn0enps2kzl6afmhwmjpp5q4ukwmv3mvld",
                                "fungible_resources": {
                                    "total_count": 4,
                                    "items": [
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "vault_address": "internal_vault_tdx_2_1tp8459x3n7ut850xez7kt8unqhljrule5fnr7t0zguefyqnf2wpsju",
                                                        "amount": "12",
                                                        "last_updated_at_state_version": 3295216
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1t4pre2zseqavzsktmhtffkfc8kwqmydj6ejtft0chevyvwrjmmwftq",
                                            "explicit_metadata": {
                                                "total_count": 2,
                                                "items": [
                                                    {
                                                        "key": "name",
                                                        "value": {
                                                            "raw_hex": "5c2200010c09474320546f6b656e73",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "GC Tokens"
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "GC Tokens",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    },
                                                    {
                                                        "key": "description",
                                                        "value": {
                                                            "raw_hex": "5c2200010c334f6e6c7920666f7220757365206174207468652047756d62616c6c20436c75622e204e6f74206c6567616c2074656e6465722e",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Only for use at the Gumball Club. Not legal tender."
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Only for use at the Gumball Club. Not legal tender.",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "vault_address": "internal_vault_tdx_2_1tq4akdlq2qrrcdvqmumfet0zlurq0tdstugpvxdaku7mkkc04usnqx",
                                                        "amount": "9997.56968519763",
                                                        "last_updated_at_state_version": 3295216
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc",
                                            "explicit_metadata": {
                                                "total_count": 2,
                                                "items": [
                                                    {
                                                        "key": "name",
                                                        "value": {
                                                            "raw_hex": "5c2200010c055261646978",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Radix"
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Radix",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 2
                                                    },
                                                    {
                                                        "key": "description",
                                                        "value": {
                                                            "raw_hex": "5c2200010c9e01546865205261646978205075626c6963204e6574776f726b2773206e617469766520746f6b656e2c207573656420746f2070617920746865206e6574776f726b2773207265717569726564207472616e73616374696f6e206665657320616e6420746f2073656375726520746865206e6574776f726b207468726f756768207374616b696e6720746f206974732076616c696461746f72206e6f6465732e",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes."
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes.",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 2
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "vault_address": "internal_vault_tdx_2_1tqtw0mk4ua7hcdk5ekfkz6qy8z99e3d40tg72rsdm08axczpalsnea",
                                                        "amount": "36",
                                                        "last_updated_at_state_version": 3295216
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1thfegpdrkld3hdf5vlldwz8vhpvtmkkr78u6evguqwstvdv0k6zryd",
                                            "explicit_metadata": {
                                                "total_count": 2,
                                                "items": [
                                                    {
                                                        "key": "name",
                                                        "value": {
                                                            "raw_hex": "5c2200010c0a47432043616e64696573",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "GC Candies"
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "GC Candies",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    },
                                                    {
                                                        "key": "description",
                                                        "value": {
                                                            "raw_hex": "5c2200010c564f6666696369616c2047756d62616c6c20436c75622063616e646965732c207573696e67206f6e6c79207468652066696e6573742073756761722066726f6d20646563656e7472616c697a6564206d61726b6574732e",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Official Gumball Club candies, using only the finest sugar from decentralized markets."
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Official Gumball Club candies, using only the finest sugar from decentralized markets.",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "vault_address": "internal_vault_tdx_2_1tr5636j0627v4j7p0vv5prlarmsd32pa9f7x6d05z7wl3jzlk8l52s",
                                                        "amount": "1",
                                                        "last_updated_at_state_version": 3294737
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1t4e3rx59pfumryng7r6ezm2tsu72lhtl4whj6wjryrquwnhm2yrtwf",
                                            "explicit_metadata": {
                                                "total_count": 2,
                                                "items": [
                                                    {
                                                        "key": "name",
                                                        "value": {
                                                            "raw_hex": "5c2200010c0b47432047756d62616c6c73",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "GC Gumballs"
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "GC Gumballs",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    },
                                                    {
                                                        "key": "description",
                                                        "value": {
                                                            "raw_hex": "5c2200010c474f6666696369616c2047756d62616c6c20436c75622067756d62616c6c732c20666f722074686f73652077686f2061726520616c6c206f7574206f6620627562626c6567756d2e",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Official Gumball Club gumballs, for those who are all out of bubblegum."
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Official Gumball Club gumballs, for those who are all out of bubblegum.",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "non_fungible_resources": {
                                    "total_count": 1,
                                    "items": [
                                        {
                                            "vaults": {
                                                "total_count": 1,
                                                "items": [
                                                    {
                                                        "total_count": 1,
                                                        "items": [
                                                            "<Member_9>"
                                                        ],
                                                        "vault_address": "internal_vault_tdx_2_1nq5vt9xkp7prkke07vj7y69dcuzxmptvy7sr976qcst6quchypjse5",
                                                        "last_updated_at_state_version": 3294931
                                                    }
                                                ]
                                            },
                                            "aggregation_level": "Vault",
                                            "resource_address": "resource_tdx_2_1ntps5asnsjrajuef209kdjd779r84dnd473ltxtlga838rp6ez2zk6",
                                            "explicit_metadata": {
                                                "total_count": 2,
                                                "items": [
                                                    {
                                                        "key": "name",
                                                        "value": {
                                                            "raw_hex": "5c2200010c0f4743204d656d626572204361726473",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "GC Member Cards"
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "GC Member Cards",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    },
                                                    {
                                                        "key": "description",
                                                        "value": {
                                                            "raw_hex": "5c2200010c564d656d626572204361726420686f6c64657273206175746f6d61746963616c6c792067657420612035302520646973636f756e74206f6e20707572636861736573206174207468652047756d62616c6c20436c75622e",
                                                            "programmatic_json": {
                                                                "kind": "Enum",
                                                                "variant_id": "0",
                                                                "fields": [
                                                                    {
                                                                        "kind": "String",
                                                                        "value": "Member Card holders automatically get a 50% discount on purchases at the Gumball Club."
                                                                    }
                                                                ]
                                                            },
                                                            "typed": {
                                                                "value": "Member Card holders automatically get a 50% discount on purchases at the Gumball Club.",
                                                                "type": "String"
                                                            }
                                                        },
                                                        "is_locked": true,
                                                        "last_updated_at_state_version": 1878435
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "metadata": {
                                    "total_count": 2,
                                    "items": [
                                        {
                                            "key": "owner_keys",
                                            "value": {
                                                "raw_hex": "5c228f01202201010120071d7b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db",
                                                "programmatic_json": {
                                                    "kind": "Enum",
                                                    "variant_id": "143",
                                                    "fields": [
                                                        {
                                                            "kind": "Array",
                                                            "element_kind": "Enum",
                                                            "elements": [
                                                                {
                                                                    "kind": "Enum",
                                                                    "variant_id": "1",
                                                                    "fields": [
                                                                        {
                                                                            "kind": "Bytes",
                                                                            "element_kind": "U8",
                                                                            "hex": "7b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "typed": {
                                                    "values": [
                                                        {
                                                            "hash_hex": "7b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db",
                                                            "key_hash_type": "EddsaEd25519"
                                                        }
                                                    ],
                                                    "type": "PublicKeyHashArray"
                                                }
                                            },
                                            "is_locked": false,
                                            "last_updated_at_state_version": 2883480
                                        },
                                        {
                                            "key": "owner_badge",
                                            "value": {
                                                "raw_hex": "5c220b01c0021e517b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db",
                                                "programmatic_json": {
                                                    "kind": "Enum",
                                                    "variant_id": "11",
                                                    "fields": [
                                                        {
                                                            "kind": "NonFungibleLocalId",
                                                            "value": "[517b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db]"
                                                        }
                                                    ]
                                                },
                                                "typed": {
                                                    "value": "[517b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db]",
                                                    "type": "NonFungibleLocalId"
                                                }
                                            },
                                            "is_locked": true,
                                            "last_updated_at_state_version": 2883480
                                        }
                                    ]
                                },
                                "explicit_metadata": {
                                    "total_count": 0,
                                    "items": []
                                },
                                "details": {
                                    "package_address": "package_tdx_2_1pkgxxxxxxxxxaccntxxxxxxxxxx000929625493xxxxxxxxx9jat20",
                                    "blueprint_name": "Account",
                                    "blueprint_version": "1.0.0",
                                    "state": {
                                        "default_deposit_rule": "Accept"
                                    },
                                    "role_assignments": {
                                        "owner": {
                                            "rule": {
                                                "type": "Protected",
                                                "access_rule": {
                                                    "type": "ProofRule",
                                                    "proof_rule": {
                                                        "type": "Require",
                                                        "requirement": {
                                                            "type": "NonFungible",
                                                            "non_fungible": {
                                                                "local_id": {
                                                                    "id_type": "Bytes",
                                                                    "sbor_hex": "5cc0021d7b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db",
                                                                    "simple_rep": "[7b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db]"
                                                                },
                                                                "resource_address": "resource_tdx_2_1nfxxxxxxxxxxed25sgxxxxxxxxx002236757237xxxxxxxxx3e2cpa"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "updater": "Object"
                                        },
                                        "entries": [
                                            {
                                                "role_key": {
                                                    "module": "Main",
                                                    "name": "securify"
                                                },
                                                "assignment": {
                                                    "resolution": "Explicit",
                                                    "explicit_rule": {
                                                        "type": "Protected",
                                                        "access_rule": {
                                                            "type": "ProofRule",
                                                            "proof_rule": {
                                                                "type": "Require",
                                                                "requirement": {
                                                                    "type": "NonFungible",
                                                                    "non_fungible": {
                                                                        "local_id": {
                                                                            "id_type": "Bytes",
                                                                            "sbor_hex": "5cc0021d7b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db",
                                                                            "simple_rep": "[7b0afe3155cf9e1330d6206dcdf99860ab0bfaea77776e410d015e59db]"
                                                                        },
                                                                        "resource_address": "resource_tdx_2_1nfxxxxxxxxxxed25sgxxxxxxxxx002236757237xxxxxxxxx3e2cpa"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Main",
                                                        "name": "_self_"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_locker"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_locker_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_setter"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Metadata",
                                                    "name": "metadata_setter_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Metadata",
                                                        "name": "metadata_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_setter"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_setter_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_setter_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_locker"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_locker_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_locker_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_claimer"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    }
                                                ]
                                            },
                                            {
                                                "role_key": {
                                                    "module": "Royalty",
                                                    "name": "royalty_claimer_updater"
                                                },
                                                "assignment": {
                                                    "resolution": "Owner"
                                                },
                                                "updater_roles": [
                                                    {
                                                        "module": "Royalty",
                                                        "name": "royalty_claimer_updater"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "type": "Component"
                                }
                            }
                        ]
                    }
                ]
            ]
        )]
    ]
)

export const nonFungibleDataTestData = new Map<string, Map<string, StateNonFungibleDataResponse>>(
    [
        [
            'Account state admin', new Map(
                [
                    [
                        'resource_tdx_2_1nt0uz6tdsz0v2a37g0eajjhugzm607y6ldkyd207wpy6c8zygp6tmt',
                        {
                            "non_fungible_id_type": "Ruid",
                            "ledger_state": {
                                "network": "stokenet",
                                "state_version": 3348688,
                                "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                                "epoch": 2804,
                                "round": 489
                            },
                            "resource_address": "resource_tdx_2_1nt0uz6tdsz0v2a37g0eajjhugzm607y6ldkyd207wpy6c8zygp6tmt",
                            "non_fungible_ids": [
                                {
                                    "is_burned": false,
                                    "non_fungible_id": "{f0b78d2ab8014de2-390c0dd66455bbee-2a35f213abd1b81a-f86031cd94593007}",
                                    "data": {
                                        "raw_hex": "5c2103a03f6658ffdef72c3736000000000000000000000000000000a018aebaebf15a000000000000000000000000000000000000a040b3df9675f9d86b05000000000000000000000000000000",
                                        "programmatic_json": {
                                            "kind": "Tuple",
                                            "type_name": "PositionNFTData",
                                            "fields": [
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "liq",
                                                    "value": "1000.100005088515876415"
                                                },
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "low_sqrt_price",
                                                    "value": "0.0000999950884982"
                                                },
                                                {
                                                    "kind": "Decimal",
                                                    "field_name": "high_sqrt_price",
                                                    "value": "100.0049558090132816"
                                                }
                                            ]
                                        }
                                    },
                                    "last_updated_at_state_version": 3347684
                                }
                            ]
                        }
                    ]
                ]
            )
        ]
    ]
)

export const streamTransactionsTestData = new Map<string, Map<string | null, StreamTransactionsResponse>>(
    [
        [
            'Committed txs', new Map(
                [
                    [
                        null,
                        {
                            "ledger_state": {
                                "network": "stokenet",
                                "state_version": 3348688,
                                "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                                "epoch": 2804,
                                "round": 489
                            },
                            "next_cursor": "eyJ2IjozMjk5MDQ3fQ==",
                            "items": [
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 3347684,
                                    "epoch": 2802,
                                    "round": 493,
                                    "round_timestamp": "2023-10-02T14:03:53.244Z",
                                    "payload_hash": "notarizedtransaction_tdx_2_1t4w93w69m9clnx7xl2mhm96cvmfer5yhewjefsa3grk769ngr5qqqjce5x",
                                    "intent_hash": "txid_tdx_2_1hkjpj769uqqlracayhxwnefmv7wqasdgh9ykm2zzfl3k675alxhsgusleh",
                                    "fee_paid": "2.2658534177",
                                    "affected_global_entities": [
                                        "transactiontracker_tdx_2_1stxxxxxxxxxxtxtrakxxxxxxxxx006844685494xxxxxxxxxxzw7jp",
                                        "account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua",
                                        "resource_tdx_2_1thc639q73xqt88xf7j628wynswjjs9cqpg0aqh8tjavwxp9wpv4ge9",
                                        "resource_tdx_2_1nt0uz6tdsz0v2a37g0eajjhugzm607y6ldkyd207wpy6c8zygp6tmt",
                                        "component_tdx_2_1crxtxaa3p9fwu70yy5q0x4nc7prju5t7z3pgmrw3m4t5l0sfkxr7wv",
                                        "consensusmanager_tdx_2_1scxxxxxxxxxxcnsmgrxxxxxxxxx000999665565xxxxxxxxxv6cg29",
                                        "component_tdx_2_1cz8hcmc5u9rtfny3yrt8hewm4wlsjyatjs7trgzgdl82vnucfa7q7l"
                                    ],
                                    "confirmed_at": new Date("2023-10-02T14:03:53.244Z"),
                                    "receipt": {
                                        "status": "CommittedSuccess" as unknown as object,
                                        "output": [
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c90f89c174c700ed894bd488276b45672ee7986208912de62ffcac4f87a902f",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c90f843f1f316c1a98fc48a7c7d6cb1ea181995764917da41842d5a7b0bb8fb",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c90f88a8ba50408df752ca4360f7e4428f8ff71a746d3f396f874fe28244280",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c210480c0ccb377b10952ee79e42500f35678f0472e517e14428d8dd1dd574fbe0990f8ab31b6467e9bd0c7dbb68e8e8d4546f83fbfaeae3490a8cd685017f01490f843f1f316c1a98fc48a7c7d6cb1ea181995764917da41842d5a7b0bb8fb90f88a8ba50408df752ca4360f7e4428f8ff71a746d3f396f874fe28244280",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c220000",
                                                "programmatic_json": null
                                            }
                                        ]
                                    }
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 3342018,
                                    "epoch": 2791,
                                    "round": 336,
                                    "round_timestamp": "2023-10-02T13:07:30.63Z",
                                    "payload_hash": "notarizedtransaction_tdx_2_1ut7mf06hwpvva24ptamkyf8e6jtppljvr7sef809ud7asl2k9ksqvd4xhy",
                                    "intent_hash": "txid_tdx_2_14qy6ene8ptddr84ux0xd4kw0kjz27wcc3lkf752ec5vnr3zsc89qxllhpn",
                                    "fee_paid": "0.54119616113",
                                    "affected_global_entities": [
                                        "transactiontracker_tdx_2_1stxxxxxxxxxxtxtrakxxxxxxxxx006844685494xxxxxxxxxxzw7jp",
                                        "account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua",
                                        "resource_tdx_2_1tkrtf93xqr8409h4gf8vqz82u0679xtrtx7mgqd96adjx0rzmn5alu",
                                        "consensusmanager_tdx_2_1scxxxxxxxxxxcnsmgrxxxxxxxxx000999665565xxxxxxxxxv6cg29"
                                    ],
                                    "confirmed_at": new Date("2023-10-02T13:07:30.63Z"),
                                    "receipt": {
                                        "status": "CommittedSuccess" as unknown as object,
                                        "output": [
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2102805d86b4962600cf5796f5424ec008eae3f5e2996359bdb401a5d75b233c6290f8f669ec124a6a921b8906e839b59f529943eaa829c60bc4c80d30ca3a1a",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c220000",
                                                "programmatic_json": null
                                            }
                                        ]
                                    }
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 3309175,
                                    "epoch": 2736,
                                    "round": 295,
                                    "round_timestamp": "2023-10-02T08:31:27.169Z",
                                    "payload_hash": "notarizedtransaction_tdx_2_1yvz9v8326ammfrkkvpsl2yt634r5vqevww9ndp8q6n52q36udlhsvheu7u",
                                    "intent_hash": "txid_tdx_2_1xecf2hp73zhm64695v58mysruwqemrylrkpa27z5pnc7x0we245stu8ts2",
                                    "fee_paid": "0.6488213825",
                                    "affected_global_entities": [
                                        "transactiontracker_tdx_2_1stxxxxxxxxxxtxtrakxxxxxxxxx006844685494xxxxxxxxxxzw7jp",
                                        "account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua",
                                        "resource_tdx_2_1tkh0y4lhn95yl2y8lxn2lhk5fgw8rd2p6fzyl94wsd2v3ygvn50773",
                                        "component_tdx_2_1cz8hcmc5u9rtfny3yrt8hewm4wlsjyatjs7trgzgdl82vnucfa7q7l",
                                        "consensusmanager_tdx_2_1scxxxxxxxxxxcnsmgrxxxxxxxxx000999665565xxxxxxxxxv6cg29"
                                    ],
                                    "confirmed_at": new Date("2023-10-02T08:31:27.169Z"),
                                    "receipt": {
                                        "status": "CommittedSuccess" as unknown as object,
                                        "output": [
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c210280c08f7c6f14e146b4cc9120d67be5dbabbf0913ab943cb1a0486fcea64f9890f8386485308d4827ee268157f661b12c94c32b63dad8b5cf0f024178cff2",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            }
                                        ]
                                    }
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 3304402,
                                    "epoch": 2729,
                                    "round": 263,
                                    "round_timestamp": "2023-10-02T07:56:06.507Z",
                                    "payload_hash": "notarizedtransaction_tdx_2_1xmp4ffsutttx58j8hatc98juwuym7qxez6zxcwsnxamm5j26fnzqal6435",
                                    "intent_hash": "txid_tdx_2_16erg2njjtx5f4zf556n5j9ctrl3q5rt9zm0c7y6wvl5n9sd2zgcqxr7jqp",
                                    "fee_paid": "46.37573750511",
                                    "affected_global_entities": [
                                        "transactiontracker_tdx_2_1stxxxxxxxxxxtxtrakxxxxxxxxx006844685494xxxxxxxxxxzw7jp",
                                        "package_tdx_2_1p5vq4c5euldnlmlpv83rrsre7edpd06k5rt0tevnfp6drwng06q98g",
                                        "resource_tdx_2_1nfxxxxxxxxxxpkgwnrxxxxxxxxx002558553505xxxxxxxxxfzgzzk",
                                        "account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua",
                                        "consensusmanager_tdx_2_1scxxxxxxxxxxcnsmgrxxxxxxxxx000999665565xxxxxxxxxv6cg29"
                                    ],
                                    "confirmed_at": new Date("2023-10-02T07:56:06.507Z"),
                                    "receipt": {
                                        "status": "CommittedSuccess" as unknown as object,
                                        "output": [
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2102800d180ae299e7db3fefe161e231c079f65a16bf56a0d6f5e5934874d1ba6890f84f054d73ed6e122ee4522a1f944e98b2651afeb829cf8dc90ccc39a5ff",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            }
                                        ]
                                    }
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 3299976,
                                    "epoch": 2722,
                                    "round": 570,
                                    "round_timestamp": "2023-10-02T07:23:15.938Z",
                                    "payload_hash": "notarizedtransaction_tdx_2_1uzc6cajglk4tx3rlssphl5wxcd7zqltshc4qyenx73tp96v24n2sq5znfv",
                                    "intent_hash": "txid_tdx_2_1m22ankrnkjgt8p8jq285wd5jdg5ydk99c3c5gw896gjlp0ffs9mqgtpgzn",
                                    "fee_paid": "215.05258394737",
                                    "affected_global_entities": [
                                        "transactiontracker_tdx_2_1stxxxxxxxxxxtxtrakxxxxxxxxx006844685494xxxxxxxxxxzw7jp",
                                        "account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua",
                                        "package_tdx_2_1pkmkzk8w82r064prwecrqrjrfrp88jhdwqkyv49juek4ynhn7476xx",
                                        "resource_tdx_2_1nfxxxxxxxxxxpkgwnrxxxxxxxxx002558553505xxxxxxxxxfzgzzk",
                                        "consensusmanager_tdx_2_1scxxxxxxxxxxcnsmgrxxxxxxxxx000999665565xxxxxxxxxv6cg29"
                                    ],
                                    "confirmed_at": new Date("2023-10-02T07:23:15.938Z"),
                                    "receipt": {
                                        "status": "CommittedSuccess" as unknown as object,
                                        "output": [
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2102800db76158ee3a86fd54237670300e4348c273caed702c4654b2e66d524ef390f808aafa91a7f1ec922b6c86b2912623d329cc9581fbf3d0fde386d1fff3",
                                                "programmatic_json": null
                                            },
                                            {
                                                "hex": "5c2100",
                                                "programmatic_json": null
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ],
                    [
                        "eyJ2IjozMjk5MDQ3fQ==",
                        {
                            "ledger_state": {
                              "network": "stokenet",
                              "state_version": 3348688,
                              "proposer_round_timestamp": "2023-10-02T14:13:39.137Z",
                              "epoch": 2804,
                              "round": 489
                            },
                            "items": [
                              {
                                "transaction_status": "CommittedSuccess",
                                "state_version": 3299047,
                                "epoch": 2721,
                                "round": 295,
                                "round_timestamp": "2023-10-02T07:16:30.747Z",
                                "payload_hash": "notarizedtransaction_tdx_2_13u9yktdjnqff2dt9hqtwye4aafdkvhm2egd08gj7rescu5tgex0q36kgky",
                                "intent_hash": "txid_tdx_2_1a22fvqxj67ckd955ghw3q62nznfjd576dzfdpf5zxky60zw2edts5fdvzx",
                                "fee_paid": "0.57970396891",
                                "affected_global_entities": [
                                  "transactiontracker_tdx_2_1stxxxxxxxxxxtxtrakxxxxxxxxx006844685494xxxxxxxxxxzw7jp",
                                  "component_tdx_2_1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxyulkzl",
                                  "account_tdx_2_12xd6a5p5djhetr4lre6juhd8ef5tlfc6xr030j59m94clyh4a5xpua",
                                  "consensusmanager_tdx_2_1scxxxxxxxxxxcnsmgrxxxxxxxxx000999665565xxxxxxxxxv6cg29"
                                ],
                                "confirmed_at": new Date("2023-10-02T07:16:30.747Z"),
                                "receipt": {
                                  "status": "CommittedSuccess" as unknown as object,
                                  "output": [
                                    {
                                      "hex": "5c2100",
                                      "programmatic_json": null
                                    },
                                    {
                                      "hex": "5c90f899f10b903f5be400b04eb1a96ce6093a3a6809d499c7febdfde0f934d1",
                                      "programmatic_json": null
                                    },
                                    {
                                      "hex": "5c2100",
                                      "programmatic_json": null
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                          
                    ]
                ]
            )
        ]
    ]
)