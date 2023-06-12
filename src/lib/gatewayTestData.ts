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
                                "network": "kisharnet",
                                "state_version": 15447899,
                                "proposer_round_timestamp": "2023-05-27T16:47:21.784Z",
                                "epoch": 8739,
                                "round": 1622
                            },
                            "items": [
                                {
                                    "address": "component_tdx_c_1qvg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasf23lu5",
                                    "fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "items": []
                                    },
                                    "details": {
                                        "package_address": "package_tdx_c_1qr486gxctdfqyymclng79yqj68aqlm3uhcc9h2ztj6mq6a5qmy",
                                        "blueprint_name": "Dex",
                                        "state": {
                                            "data_hex": "5c210380011151f2ffc07d1bb42e16d851d43be6438bf4ca04899d4911037b8000fdd7ce26c945eac03fcd24ab80e875e79edb82ea4ca474b7be8c2080040309803fc779e489d8e7d8fe9f4612c405280ab95d073d1c1b3a6f03248bca201977400f51c6d61177991145540afcd4caa7121f1be9037cb1004ac44db7b5fdbe9cd2582156c2553afbb7d8289875515103ebb4bd2dd0af31461c33253a783dc9dd54428a16bafee0236a7f",
                                            "data_json": {
                                                "kind": "Tuple",
                                                "fields": [
                                                    {
                                                        "kind": "Address",
                                                        "value": "resource_tdx_c_1qyg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasrtr3e0"
                                                    },
                                                    {
                                                        "kind": "Address",
                                                        "value": "package_tdx_c_1qr7a0n3xe9z74sple5j2hq8gwhneakuzafx2ga9hh6xqyeactl"
                                                    },
                                                    {
                                                        "kind": "Array",
                                                        "elements": [
                                                            "component_tdx_c_1qvjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05srvqsl2",
                                                        ],
                                                        "element_kind": "Address"
                                                    }
                                                ]
                                            }
                                        },
                                        "access_rules_chain": {
                                            "method_auth": [
                                                {
                                                    "method": {
                                                        "name": "new_pool",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "resource": {
                                                                        "type": "Resource",
                                                                        "resource_address": "resource_tdx_c_1qyg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasrtr3e0"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                }
                                            ],
                                            "default_auth": {
                                                "type": "AllowAll"
                                            },
                                            "grouped_auth": [],
                                            "method_auth_mutability": [
                                                {
                                                    "method": {
                                                        "name": "new_pool",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "default_auth_mutability": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth_mutability": []
                                        },
                                        "type": "Component"
                                    }
                                }
                            ]
                        }],
                    [
                        'component_tdx_c_1qvjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05srvqsl2',
                        {
                            "ledger_state": {
                                "network": "kisharnet",
                                "state_version": 15447899,
                                "proposer_round_timestamp": "2023-05-27T16:47:21.784Z",
                                "epoch": 8739,
                                "round": 1622
                            },
                            "items": [
                                {
                                    "address": "component_tdx_c_1qvjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05srvqsl2",
                                    "fungible_resources": {
                                        "total_count": 3,
                                        "items": [
                                            {
                                                "vaults": {
                                                    "total_count": 1,
                                                    "items": [
                                                        {
                                                            "vault_address": "0eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb710000000",
                                                            "amount": "1",
                                                            "last_updated_at_state_version": 14737284
                                                        }
                                                    ]
                                                },
                                                "aggregation_level": "Vault",
                                                "resource_address": "resource_tdx_c_1qyjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05sfdj763"
                                            },
                                            {
                                                "vaults": {
                                                    "total_count": 1,
                                                    "items": [
                                                        {
                                                            "vault_address": "0eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb70f000000",
                                                            "amount": "0",
                                                            "last_updated_at_state_version": 14737284
                                                        }
                                                    ]
                                                },
                                                "aggregation_level": "Vault",
                                                "resource_address": "resource_tdx_c_1q8wy3klwfuqr3ku0jey2xkdjnjm3dhzye008tt0k07tqy7u5ep"
                                            },
                                            {
                                                "vaults": {
                                                    "total_count": 1,
                                                    "items": [
                                                        {
                                                            "vault_address": "0eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb70e000000",
                                                            "amount": "0",
                                                            "last_updated_at_state_version": 14737284
                                                        }
                                                    ]
                                                },
                                                "aggregation_level": "Vault",
                                                "resource_address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                            }
                                        ]
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "items": []
                                    },
                                    "details": {
                                        "package_address": "package_tdx_c_1qr7a0n3xe9z74sple5j2hq8gwhneakuzafx2ga9hh6xqyeactl",
                                        "blueprint_name": "Pool",
                                        "state": {
                                            "data_hex": "5c210e90020eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb70e00000090020eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb70f000000a000000000000000000000000000000000000000000000000000000000000000000400000000a0000064a7b3b6e00d000000000000000000000000000000000000000000000000a00000434fd7946a00000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000008002248bca201977400f51c6d61177991145540afcd4caa7121f1be923c021002004002304210090020eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb71000000080011151f2ffc07d1bb42e16d851d43be6438bf4ca04899d4911037b",
                                            "data_json": {
                                                "kind": "Tuple",
                                                "fields": [
                                                    {
                                                        "kind": "Own",
                                                        "value": "0eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb70e000000"
                                                    },
                                                    {
                                                        "kind": "Own",
                                                        "value": "0eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb70f000000"
                                                    },
                                                    {
                                                        "kind": "Decimal",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "I32",
                                                        "value": 0
                                                    },
                                                    {
                                                        "kind": "Decimal",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "kind": "Decimal",
                                                        "value": "0.03"
                                                    },
                                                    {
                                                        "kind": "Decimal",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "Decimal",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "Address",
                                                        "value": "resource_tdx_c_1qgjghj3qr9m5qr63cmtpzauez9z4gzhu6n92wyslr05skr94gw"
                                                    },
                                                    {
                                                        "kind": "Map",
                                                        "entries": [],
                                                        "key_kind": "NonFungibleLocalId",
                                                        "value_kind": "Tuple"
                                                    },
                                                    {
                                                        "kind": "Array",
                                                        "elements": [],
                                                        "element_kind": "I32"
                                                    },
                                                    {
                                                        "kind": "Map",
                                                        "entries": [],
                                                        "key_kind": "I32",
                                                        "value_kind": "Tuple"
                                                    },
                                                    {
                                                        "kind": "Own",
                                                        "value": "0eed473c2c0e62b4cd68dc223b6bb0c39c3add72b146d32d78cbb710000000"
                                                    },
                                                    {
                                                        "kind": "Address",
                                                        "value": "resource_tdx_c_1qyg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasrtr3e0"
                                                    }
                                                ]
                                            }
                                        },
                                        "access_rules_chain": {
                                            "method_auth": [
                                                {
                                                    "method": {
                                                        "name": "destroy",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "resource": {
                                                                        "type": "Resource",
                                                                        "resource_address": "resource_tdx_c_1qyg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasrtr3e0"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                }
                                            ],
                                            "default_auth": {
                                                "type": "AllowAll"
                                            },
                                            "grouped_auth": [],
                                            "method_auth_mutability": [
                                                {
                                                    "method": {
                                                        "name": "destroy",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "default_auth_mutability": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth_mutability": []
                                        },
                                        "type": "Component"
                                    }
                                }
                            ]
                        }
                    ],
                    [
                        'resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv',
                        {
                            "ledger_state": {
                                "network": "kisharnet",
                                "state_version": 16733596,
                                "proposer_round_timestamp": "2023-06-05T08:52:23.11Z",
                                "epoch": 9496,
                                "round": 146
                            },
                            "items": [
                                {
                                    "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv",
                                    "fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "total_count": 4,
                                        "items": [
                                            {
                                                "key": "description",
                                                "value": {
                                                    "raw_hex": "5c2200012200010c9e01546865205261646978205075626c6963204e6574776f726b2773206e617469766520746f6b656e2c207573656420746f2070617920746865206e6574776f726b2773207265717569726564207472616e73616374696f6e206665657320616e6420746f2073656375726520746865206e6574776f726b207468726f756768207374616b696e6720746f206974732076616c696461746f72206e6f6465732e",
                                                    "raw_json": {
                                                        "type": "Enum",
                                                        "variant": "0",
                                                        "fields": [
                                                            {
                                                                "type": "Enum",
                                                                "variant": "0",
                                                                "fields": [
                                                                    {
                                                                        "type": "String",
                                                                        "value": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes."
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    "as_string": "The Radix Public Network's native token, used to pay the network's required transaction fees and to secure the network through staking to its validator nodes."
                                                },
                                                "last_updated_at_state_version": 1
                                            },
                                            {
                                                "key": "symbol",
                                                "value": {
                                                    "raw_hex": "5c2200012200010c03585244",
                                                    "raw_json": {
                                                        "type": "Enum",
                                                        "variant": "0",
                                                        "fields": [
                                                            {
                                                                "type": "Enum",
                                                                "variant": "0",
                                                                "fields": [
                                                                    {
                                                                        "type": "String",
                                                                        "value": "XRD"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    "as_string": "XRD"
                                                },
                                                "last_updated_at_state_version": 1
                                            },
                                            {
                                                "key": "name",
                                                "value": {
                                                    "raw_hex": "5c2200012200010c055261646978",
                                                    "raw_json": {
                                                        "type": "Enum",
                                                        "variant": "0",
                                                        "fields": [
                                                            {
                                                                "type": "Enum",
                                                                "variant": "0",
                                                                "fields": [
                                                                    {
                                                                        "type": "String",
                                                                        "value": "Radix"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    "as_string": "Radix"
                                                },
                                                "last_updated_at_state_version": 1
                                            },
                                            {
                                                "key": "url",
                                                "value": {
                                                    "raw_hex": "5c2200012200010c1b68747470733a2f2f746f6b656e732e7261646978646c742e636f6d",
                                                    "raw_json": {
                                                        "type": "Enum",
                                                        "variant": "0",
                                                        "fields": [
                                                            {
                                                                "type": "Enum",
                                                                "variant": "0",
                                                                "fields": [
                                                                    {
                                                                        "type": "String",
                                                                        "value": "https://tokens.radixdlt.com"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    "as_string": "https://tokens.radixdlt.com"
                                                },
                                                "last_updated_at_state_version": 1
                                            }
                                        ]
                                    },
                                    "details": {
                                        "access_rules_chain": {
                                            "method_auth": [
                                                {
                                                    "method": {
                                                        "name": "burn",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_bucket",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_vault",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_type",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_total_supply",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "mint"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint_uuid",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "mint"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "non_fungible_exists",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "update_non_fungible_data",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "set",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    }
                                                }
                                            ],
                                            "default_auth": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth": [
                                                {
                                                    "group_name": "mint",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "method_auth_mutability": [
                                                {
                                                    "method": {
                                                        "name": "burn",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_bucket",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_vault",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_type",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_total_supply",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint_uuid",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "non_fungible_exists",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "update_non_fungible_data",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "set",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "default_auth_mutability": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth_mutability": [
                                                {
                                                    "group_name": "mint",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ]
                                        },
                                        "vault_access_rules_chain": {
                                            "method_auth": [
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible_local_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_address",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "lock_fee",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "withdraw"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "put",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "withdraw"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "withdraw"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                }
                                            ],
                                            "default_auth": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth": [
                                                {
                                                    "group_name": "recall",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "group_name": "withdraw",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            ],
                                            "method_auth_mutability": [
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible_local_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_address",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "lock_fee",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "put",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "default_auth_mutability": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth_mutability": [
                                                {
                                                    "group_name": "recall",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "group_name": "withdraw",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ]
                                        },
                                        "divisibility": 18,
                                        "type": "FungibleResource"
                                    }
                                }
                            ]
                        }
                    ],
                    [
                        'resource_tdx_c_1q8wy3klwfuqr3ku0jey2xkdjnjm3dhzye008tt0k07tqy7u5ep',
                        {
                            "ledger_state": {
                                "network": "kisharnet",
                                "state_version": 16733755,
                                "proposer_round_timestamp": "2023-06-05T08:53:37.611Z",
                                "epoch": 9496,
                                "round": 311
                            },
                            "items": [
                                {
                                    "address": "resource_tdx_c_1q8wy3klwfuqr3ku0jey2xkdjnjm3dhzye008tt0k07tqy7u5ep",
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
                                                    "raw_hex": "5c2200012200010c084d4f4a2055534454",
                                                    "raw_json": {
                                                        "type": "Enum",
                                                        "variant": "0",
                                                        "fields": [
                                                            {
                                                                "type": "Enum",
                                                                "variant": "0",
                                                                "fields": [
                                                                    {
                                                                        "type": "String",
                                                                        "value": "MOJ USDT"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    "as_string": "MOJ USDT"
                                                },
                                                "last_updated_at_state_version": 14723965
                                            }
                                        ]
                                    },
                                    "details": {
                                        "access_rules_chain": {
                                            "method_auth": [
                                                {
                                                    "method": {
                                                        "name": "burn",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_bucket",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_vault",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_type",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_total_supply",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "mint"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint_uuid",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "mint"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "non_fungible_exists",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "update_non_fungible_data",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "set",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "DenyAll"
                                                        }
                                                    }
                                                }
                                            ],
                                            "default_auth": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth": [
                                                {
                                                    "group_name": "mint",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "method_auth_mutability": [
                                                {
                                                    "method": {
                                                        "name": "burn",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_bucket",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_vault",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_type",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_total_supply",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "mint_uuid",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "non_fungible_exists",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "update_non_fungible_data",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "set",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "default_auth_mutability": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth_mutability": [
                                                {
                                                    "group_name": "mint",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ]
                                        },
                                        "vault_access_rules_chain": {
                                            "method_auth": [
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible_local_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_address",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "lock_fee",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "withdraw"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "put",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "withdraw"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Group",
                                                        "group_name": "withdraw"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                }
                                            ],
                                            "default_auth": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth": [
                                                {
                                                    "group_name": "recall",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "group_name": "withdraw",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            ],
                                            "method_auth_mutability": [
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_lock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "Vault_unlock_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "create_proof_by_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_amount",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_non_fungible_local_ids",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get_resource_address",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "lock_fee",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "put",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "take_non_fungibles",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "default_auth_mutability": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth_mutability": [
                                                {
                                                    "group_name": "recall",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "group_name": "withdraw",
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ]
                                        },
                                        "divisibility": 18,
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
                                "network": "kisharnet",
                                "state_version": 15447899,
                                "proposer_round_timestamp": "2023-05-27T16:47:21.784Z",
                                "epoch": 8739,
                                "round": 1622
                            },
                            "items": [
                                {
                                    "address": "component_tdx_c_1qvg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasf23lu5",
                                    "fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "non_fungible_resources": {
                                        "total_count": 0,
                                        "items": []
                                    },
                                    "metadata": {
                                        "items": []
                                    },
                                    "details": {
                                        "package_address": "package_tdx_c_1qr486gxctdfqyymclng79yqj68aqlm3uhcc9h2ztj6mq6a5qmy",
                                        "blueprint_name": "Dex",
                                        "state": {
                                            "data_hex": "5c210380011151f2ffc07d1bb42e16d851d43be6438bf4ca04899d4911037b8000fdd7ce26c945eac03fcd24ab80e875e79edb82ea4ca474b7be8c2080040309803fc779e489d8e7d8fe9f4612c405280ab95d073d1c1b3a6f03248bca201977400f51c6d61177991145540afcd4caa7121f1be9037cb1004ac44db7b5fdbe9cd2582156c2553afbb7d8289875515103ebb4bd2dd0af31461c33253a783dc9dd54428a16bafee0236a7f",
                                            "data_json": {
                                                "kind": "Tuple",
                                                "fields": [
                                                    {
                                                        "kind": "Address",
                                                        "value": "resource_tdx_c_1qyg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasrtr3e0"
                                                    },
                                                    {
                                                        "kind": "Address",
                                                        "value": "package_tdx_c_1qr7a0n3xe9z74sple5j2hq8gwhneakuzafx2ga9hh6xqyeactl"
                                                    },
                                                    {
                                                        "kind": "Array",
                                                        "elements": [
                                                        ],
                                                        "element_kind": "Address"
                                                    }
                                                ]
                                            }
                                        },
                                        "access_rules_chain": {
                                            "method_auth": [
                                                {
                                                    "method": {
                                                        "name": "new_pool",
                                                        "module": "Self"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "Protected",
                                                            "access_rule": {
                                                                "type": "ProofRule",
                                                                "proof_rule": {
                                                                    "type": "Require",
                                                                    "resource": {
                                                                        "type": "Resource",
                                                                        "resource_address": "resource_tdx_c_1qyg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasrtr3e0"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule_reference": {
                                                        "type": "Rule",
                                                        "access_rule": {
                                                            "type": "AllowAll"
                                                        }
                                                    }
                                                }
                                            ],
                                            "default_auth": {
                                                "type": "AllowAll"
                                            },
                                            "grouped_auth": [],
                                            "method_auth_mutability": [
                                                {
                                                    "method": {
                                                        "name": "new_pool",
                                                        "module": "Self"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                },
                                                {
                                                    "method": {
                                                        "name": "get",
                                                        "module": "Metadata"
                                                    },
                                                    "access_rule": {
                                                        "type": "DenyAll"
                                                    }
                                                }
                                            ],
                                            "default_auth_mutability": {
                                                "type": "DenyAll"
                                            },
                                            "grouped_auth_mutability": []
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
                    'account_tdx_c_1p9jy2vlth43flyqdn97gxprra0mjnxme8qprzqy5h9ls9hwp8l',
                    {
                        "ledger_state": {
                            "network": "kisharnet",
                            "state_version": 15447899,
                            "proposer_round_timestamp": "2023-05-27T16:47:21.784Z",
                            "epoch": 8739,
                            "round": 1622
                        },
                        "items": [
                            {
                                "address": "account_tdx_c_1p9jy2vlth43flyqdn97gxprra0mjnxme8qprzqy5h9ls9hwp8l",
                                "fungible_resources": {
                                    "total_count": 10,
                                    "items": [
                                        {
                                            "amount": "9981.671361",
                                            "last_updated_at_state_version": 15296532,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                        },
                                        {
                                            "amount": "10000",
                                            "last_updated_at_state_version": 15294867,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qxpffm8l6tnzr9xnphhn4rywkrp5am0s28y0av8x0a0qzr5nel"
                                        },
                                        {
                                            "amount": "10000",
                                            "last_updated_at_state_version": 15287040,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qy6j9707ft5hc9cnzrajhmlj95rl4d6nldxktaqnkufsd8dmrt"
                                        },
                                        {
                                            "amount": "10000",
                                            "last_updated_at_state_version": 15141750,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qyrg9h2exsxy4ztej75x2f399fgyrvywt84c722w5rtsefrerl"
                                        },
                                        {
                                            "amount": "1",
                                            "last_updated_at_state_version": 14735282,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qyg4ruhlcp73hdpwzmv9r4pmuepchax2qjye6jg3qdasrtr3e0"
                                        },
                                        {
                                            "amount": "10000",
                                            "last_updated_at_state_version": 14723965,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1q8wy3klwfuqr3ku0jey2xkdjnjm3dhzye008tt0k07tqy7u5ep"
                                        },
                                        {
                                            "amount": "1",
                                            "last_updated_at_state_version": 12854709,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1q8k7wdd0p3820s4ree3flyhnsf3cuttnxru5dhuyxy3qv5e6nf"
                                        },
                                        {
                                            "amount": "1",
                                            "last_updated_at_state_version": 8862509,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qx0vhszucqfskjnrgft6z5tdvaddcdhqszrj4x2t3nqq6frvrr"
                                        },
                                        {
                                            "amount": "1",
                                            "last_updated_at_state_version": 8862190,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1q8nta5x2v7d5ykvc2mnvpcemzglhqahjqxudvu5sacdq2qu8tj"
                                        },
                                        {
                                            "amount": "1",
                                            "last_updated_at_state_version": 8861341,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qxuy5v8gtd0qy6x0efgc32durvuyz96al43gyr9kqemspugjyu"
                                        }
                                    ]
                                },
                                "non_fungible_resources": {
                                    "total_count": 1,
                                    "items": [
                                        {
                                            "amount": 1,
                                            "last_updated_at_state_version": 8858707,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1q2h56nwpt20aj6jrq7am3vmpunmed23k44x2f80kck2scv5ppv"
                                        }
                                    ]
                                },
                                "metadata": {
                                    "total_count": 5,
                                    "items": [
                                        {
                                            "key": "claimed_websites",
                                            "value": {
                                                "raw_hex": "5c220101202200",
                                                "raw_json": {
                                                    "type": "Enum",
                                                    "variant": "1",
                                                    "fields": [
                                                        {
                                                            "type": "Array",
                                                            "element_kind": "Enum",
                                                            "elements": []
                                                        }
                                                    ]
                                                },
                                                "as_string": "",
                                                "as_string_collection": []
                                            },
                                            "last_updated_at_state_version": 13375922
                                        },
                                        {
                                            "key": "claimed_entities",
                                            "value": {
                                                "raw_hex": "5c220101202200",
                                                "raw_json": {
                                                    "type": "Enum",
                                                    "variant": "1",
                                                    "fields": [
                                                        {
                                                            "type": "Array",
                                                            "element_kind": "Enum",
                                                            "elements": []
                                                        }
                                                    ]
                                                },
                                                "as_string": "",
                                                "as_string_collection": []
                                            },
                                            "last_updated_at_state_version": 13375922
                                        },
                                        {
                                            "key": "account_type",
                                            "value": {
                                                "raw_hex": "5c2200012200010c0f6461707020646566696e6974696f6e",
                                                "raw_json": {
                                                    "type": "Enum",
                                                    "variant": "0",
                                                    "fields": [
                                                        {
                                                            "type": "Enum",
                                                            "variant": "0",
                                                            "fields": [
                                                                {
                                                                    "type": "String",
                                                                    "value": "dapp definition"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "as_string": "dapp definition"
                                            },
                                            "last_updated_at_state_version": 13375922
                                        },
                                        {
                                            "key": "description",
                                            "value": {
                                                "raw_hex": "5c2200012200010c4c44455820666f722066756e6769626c6520746f6b656e732e204d6f72652066696e616e6369616c20696e737472756d656e74732077696c6c206265206164646564206772616475616c6c792e",
                                                "raw_json": {
                                                    "type": "Enum",
                                                    "variant": "0",
                                                    "fields": [
                                                        {
                                                            "type": "Enum",
                                                            "variant": "0",
                                                            "fields": [
                                                                {
                                                                    "type": "String",
                                                                    "value": "DEX for fungible tokens. More financial instruments will be added gradually."
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "as_string": "DEX for fungible tokens. More financial instruments will be added gradually."
                                            },
                                            "last_updated_at_state_version": 13375922
                                        },
                                        {
                                            "key": "name",
                                            "value": {
                                                "raw_hex": "5c2200012200010c0a4d6f6a69746f73776170",
                                                "raw_json": {
                                                    "type": "Enum",
                                                    "variant": "0",
                                                    "fields": [
                                                        {
                                                            "type": "Enum",
                                                            "variant": "0",
                                                            "fields": [
                                                                {
                                                                    "type": "String",
                                                                    "value": "Mojitoswap"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "as_string": "Mojitoswap"
                                            },
                                            "last_updated_at_state_version": 13375922
                                        }
                                    ]
                                },
                                "details": {
                                    "package_address": "package_tdx_c_1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzsjy9d0p",
                                    "blueprint_name": "Account",
                                    "access_rules_chain": {
                                        "method_auth": [
                                            {
                                                "method": {
                                                    "name": "deposit",
                                                    "module": "Self"
                                                },
                                                "access_rule_reference": {
                                                    "type": "Rule",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "deposit_batch",
                                                    "module": "Self"
                                                },
                                                "access_rule_reference": {
                                                    "type": "Rule",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "get",
                                                    "module": "Metadata"
                                                },
                                                "access_rule_reference": {
                                                    "type": "Rule",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            }
                                        ],
                                        "default_auth": {
                                            "type": "Protected",
                                            "access_rule": {
                                                "type": "ProofRule",
                                                "proof_rule": {
                                                    "type": "Require",
                                                    "resource": {
                                                        "type": "NonFungible",
                                                        "non_fungible_id": {
                                                            "id_type": "Bytes",
                                                            "sbor_hex": "5cc0021a644533ebbd629f900d997c830463ebf7299b793802310094b97f",
                                                            "simple_rep": "[644533ebbd629f900d997c830463ebf7299b793802310094b97f]"
                                                        },
                                                        "resource_address": "resource_tdx_c_1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqslqnefq"
                                                    }
                                                }
                                            }
                                        },
                                        "grouped_auth": [],
                                        "method_auth_mutability": [
                                            {
                                                "method": {
                                                    "name": "deposit",
                                                    "module": "Self"
                                                },
                                                "access_rule": {
                                                    "type": "DenyAll"
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "deposit_batch",
                                                    "module": "Self"
                                                },
                                                "access_rule": {
                                                    "type": "DenyAll"
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "get",
                                                    "module": "Metadata"
                                                },
                                                "access_rule": {
                                                    "type": "DenyAll"
                                                }
                                            }
                                        ],
                                        "default_auth_mutability": {
                                            "type": "Protected",
                                            "access_rule": {
                                                "type": "ProofRule",
                                                "proof_rule": {
                                                    "type": "Require",
                                                    "resource": {
                                                        "type": "NonFungible",
                                                        "non_fungible_id": {
                                                            "id_type": "Bytes",
                                                            "sbor_hex": "5cc0021a644533ebbd629f900d997c830463ebf7299b793802310094b97f",
                                                            "simple_rep": "[644533ebbd629f900d997c830463ebf7299b793802310094b97f]"
                                                        },
                                                        "resource_address": "resource_tdx_c_1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqslqnefq"
                                                    }
                                                }
                                            }
                                        },
                                        "grouped_auth_mutability": []
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
                ['account_tdx_c_1pycd4l080u9fc87a26c7n2ulz3rv2hj7ruuan53gkf7szqygsu',
                    {
                        "ledger_state": {
                            "network": "kisharnet",
                            "state_version": 15447899,
                            "proposer_round_timestamp": "2023-05-27T16:47:21.784Z",
                            "epoch": 8739,
                            "round": 1622
                        },
                        "items": [
                            {
                                "address": "account_tdx_c_1pycd4l080u9fc87a26c7n2ulz3rv2hj7ruuan53gkf7szqygsu",
                                "fungible_resources": {
                                    "total_count": 1,
                                    "items": [
                                        {
                                            "amount": "10",
                                            "last_updated_at_state_version": 15296532,
                                            "aggregation_level": "Global",
                                            "resource_address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                        }
                                    ]
                                },
                                "non_fungible_resources": {
                                    "total_count": 0,
                                    "items": []
                                },
                                "metadata": {
                                    "items": []
                                },
                                "details": {
                                    "package_address": "package_tdx_c_1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzsjy9d0p",
                                    "blueprint_name": "Account",
                                    "access_rules_chain": {
                                        "method_auth": [
                                            {
                                                "method": {
                                                    "name": "deposit",
                                                    "module": "Self"
                                                },
                                                "access_rule_reference": {
                                                    "type": "Rule",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "deposit_batch",
                                                    "module": "Self"
                                                },
                                                "access_rule_reference": {
                                                    "type": "Rule",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "get",
                                                    "module": "Metadata"
                                                },
                                                "access_rule_reference": {
                                                    "type": "Rule",
                                                    "access_rule": {
                                                        "type": "AllowAll"
                                                    }
                                                }
                                            }
                                        ],
                                        "default_auth": {
                                            "type": "Protected",
                                            "access_rule": {
                                                "type": "ProofRule",
                                                "proof_rule": {
                                                    "type": "Require",
                                                    "resource": {
                                                        "type": "NonFungible",
                                                        "non_fungible_id": {
                                                            "id_type": "Bytes",
                                                            "sbor_hex": "5cc0021a30dafde77f0a9c1fdd56b1e9ab9f1446c55e5e1f39d9d228b27d",
                                                            "simple_rep": "[30dafde77f0a9c1fdd56b1e9ab9f1446c55e5e1f39d9d228b27d]"
                                                        },
                                                        "resource_address": "resource_tdx_c_1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqslqnefq"
                                                    }
                                                }
                                            }
                                        },
                                        "grouped_auth": [],
                                        "method_auth_mutability": [
                                            {
                                                "method": {
                                                    "name": "deposit",
                                                    "module": "Self"
                                                },
                                                "access_rule": {
                                                    "type": "DenyAll"
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "deposit_batch",
                                                    "module": "Self"
                                                },
                                                "access_rule": {
                                                    "type": "DenyAll"
                                                }
                                            },
                                            {
                                                "method": {
                                                    "name": "get",
                                                    "module": "Metadata"
                                                },
                                                "access_rule": {
                                                    "type": "DenyAll"
                                                }
                                            }
                                        ],
                                        "default_auth_mutability": {
                                            "type": "Protected",
                                            "access_rule": {
                                                "type": "ProofRule",
                                                "proof_rule": {
                                                    "type": "Require",
                                                    "resource": {
                                                        "type": "NonFungible",
                                                        "non_fungible_id": {
                                                            "id_type": "Bytes",
                                                            "sbor_hex": "5cc0021a30dafde77f0a9c1fdd56b1e9ab9f1446c55e5e1f39d9d228b27d",
                                                            "simple_rep": "[30dafde77f0a9c1fdd56b1e9ab9f1446c55e5e1f39d9d228b27d]"
                                                        },
                                                        "resource_address": "resource_tdx_c_1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqslqnefq"
                                                    }
                                                }
                                            }
                                        },
                                        "grouped_auth_mutability": []
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

export const entityNonFungibleResourceVaultPageTestData = new Map<string, Map<string, StateEntityNonFungibleResourceVaultsPageResponse>>(
    [
        [
            'Account state admin', new Map(
                [
                ]
            )
        ]
    ]
)

export const entityNonFungibleIdsPageTestData = new Map<string, Map<string, StateNonFungibleIdsResponse>>(
    [
        [
            'Account state admin', new Map(
                [
                ]
            )
        ]
    ]
)

export const nonFungibleDataTestData = new Map<string, Map<string, StateNonFungibleDataResponse>>(
    [
        [
            'Account state admin', new Map(
                [
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
                                "network": "kisharnet",
                                "state_version": 15393650,
                                "proposer_round_timestamp": "2023-05-27T07:01:30.008Z",
                                "epoch": 8707,
                                "round": 1568
                            },
                            "next_cursor": "eyJ2IjoxNTMzMTQ4Nn0=",
                            "items": [
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15393650,
                                    "payload_hash_hex": "6e47994b0ea65262b40fb745d5f7ce94eaca1de6fb49711dee68e08646d91d4f",
                                    "intent_hash_hex": "7fcb29aacfe2b6adeff146d3e9f0e3cc07a73dc9dbb2fd543f6e9f1775efea1c",
                                    "fee_paid": {
                                        "value": "3.4224855",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-27T07:01:30.008Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15368330,
                                    "payload_hash_hex": "eb22ae08628961eabb544c3884a09a5c8bfb947f9505413d2f01f09289b6839a",
                                    "intent_hash_hex": "ba40514d7b2aaaf79ea8269edc4eff40c8d72aa8f10c8935eab77fde90a4b8c5",
                                    "fee_paid": {
                                        "value": "0.2214675",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-27T02:38:56.893Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15349879,
                                    "payload_hash_hex": "c971f27acc0ac11b1472cc7ed6e3f1668d5d9f8ed96f016554e1627b583b486a",
                                    "intent_hash_hex": "39156b7374ee16a92d6aa480b51c773c90650110ef4e87a519eeca194614245a",
                                    "fee_paid": {
                                        "value": "0.6697295",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T23:27:36.448Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15349751,
                                    "payload_hash_hex": "650f0a7d724969810caf0b138f7c08be2bda182c1171aa43b076b31ec7d64af5",
                                    "intent_hash_hex": "aec7cb16ef5f97fdf4506991a0bce192fc370e5622753bbc15c9ffb89d39f936",
                                    "fee_paid": {
                                        "value": "0.07001",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T23:26:20.303Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15349646,
                                    "payload_hash_hex": "0f645aabb33dfa53de0ca8629214bcae8de18d14d40d5bf925c2697bcc68be96",
                                    "intent_hash_hex": "1045dcf05945ae675f6e92f985a8bd008635cf0b423ccb17749ca8df5caeb8f8",
                                    "fee_paid": {
                                        "value": "0.07001",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T23:25:15.796Z")
                                }
                            ]
                        }
                    ],
                    [
                        'eyJ2IjoxNTMzMTQ4Nn0=',
                        {
                            "ledger_state": {
                                "network": "kisharnet",
                                "state_version": 15393650,
                                "proposer_round_timestamp": "2023-05-27T07:01:30.008Z",
                                "epoch": 8707,
                                "round": 1568
                            },
                            "next_cursor": "eyJ2IjoxNTMyOTE1OH0=",
                            "items": [
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15331486,
                                    "payload_hash_hex": "3e81f9ecf151b6f6aa9ae9b9f7c3088e94b11d1b526bcceb9da68e2c244cc5eb",
                                    "intent_hash_hex": "d1ba9ac4ee172124811c3febd3cbe13de7d17665e89e35a00b834d4606814244",
                                    "fee_paid": {
                                        "value": "1.1604985",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T20:11:49.719Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15329725,
                                    "payload_hash_hex": "b56c9dc4cdbb18209a5c0df81c309a594773fd1feb0f7b3230e54c0a43428a4b",
                                    "intent_hash_hex": "903df91a258fef4b934a13d9b96cb0e32275467ac068ec75c8b9df7ffd613371",
                                    "fee_paid": {
                                        "value": "1.4192505",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T19:53:35.23Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15329549,
                                    "payload_hash_hex": "5520f3ead15edf7ab38f1f44990ef1e39885696efbdb25143e511de773df0245",
                                    "intent_hash_hex": "12679772ae01c7be3f01124146be523588444cd81a0534025e2808ca98af4d08",
                                    "fee_paid": {
                                        "value": "0.1989105",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T19:51:39.567Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15329314,
                                    "payload_hash_hex": "a892eb99315c45f893d105cb9551778e7309f2aba1eed4461317e32e8ebb4c7a",
                                    "intent_hash_hex": "c60695cdd92f59c90a3698c4346c40c86d9061611cfd91fdce37f7e8cd5ccc13",
                                    "fee_paid": {
                                        "value": "0.274349",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T19:49:19.63Z")
                                },
                                {
                                    "transaction_status": "CommittedSuccess",
                                    "state_version": 15329225,
                                    "payload_hash_hex": "49aed1a16b4ee5a0a6acaef6eabbb9515db8ba115de42ebc528104a38cacf79c",
                                    "intent_hash_hex": "71f0016c0b8e2e66d64f4e4ce82e4bd185f98501278032e693d314729563e286",
                                    "fee_paid": {
                                        "value": "0.274349",
                                        "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
                                    },
                                    "confirmed_at": new Date("2023-05-26T19:48:25.53Z")
                                }
                            ]
                        }
                    ]
                ]
            )
        ]
    ]
)