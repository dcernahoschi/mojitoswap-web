import { AppConfig } from "./config"

export const newPoolTransactionManifest: (accountAddr: string, res0Addr: string, res1Addr: string, fee: string, sqrtPrice: string, sqrtMinPrice: string, sqrtMaxPrice: string, res0Amount: string, res1Amount: string) => string =
    (accountAddr, res0Addr, res1Addr, fee, sqrtPrice, sqrtMinPrice, sqrtMaxPrice, res0Amount, res1Amount) => {
        return `
        CALL_METHOD
            Address("${accountAddr}")
            "create_proof_of_amount"
            Address("${AppConfig.dexAdminBadgeAddr}")
            Decimal("1");
        CALL_METHOD
            Address("${accountAddr}")
            "withdraw"
            Address("${res0Addr}")
            Decimal("${res0Amount}");
        CALL_METHOD    
            Address("${accountAddr}")
            "withdraw"
            Address("${res1Addr}")
            Decimal("${res1Amount}");
        TAKE_FROM_WORKTOP
            Address("${res0Addr}")
            Decimal("${res0Amount}")
            Bucket("res0_bucket");
        TAKE_FROM_WORKTOP
            Address("${res1Addr}")
            Decimal("${res1Amount}")
            Bucket("res1_bucket");
        CALL_METHOD
            Address("${AppConfig.dexComponentAddr}")
            "new_pool"
            Address("${res0Addr}")
            Address("${res1Addr}")
            Decimal("${fee}")
            Decimal("${sqrtPrice}")
            Decimal("${sqrtMinPrice}")
            Decimal("${sqrtMaxPrice}")
            Bucket("res0_bucket")
            Bucket("res1_bucket");
        CALL_METHOD
            Address("${accountAddr}")
            "try_deposit_batch_or_refund"
            Expression("ENTIRE_WORKTOP")
            None;
        `
    }

export const addPositionTransactionManifest: (accountAddr: string, poolAddr: string, res0Amount: string, res0Addr: string, res1Amount: string, res1Addr: string, lowPrice: string, highPrice: string) => string = 
    (accountAddr, poolAddr, res0Amount, res0Addr, res1Amount, res1Addr, lowPrice, highPrice) => {
    return `
    CALL_METHOD
        Address("${accountAddr}")
        "withdraw"
        Address("${res0Addr}")
        Decimal("${res0Amount}");
    CALL_METHOD    
        Address("${accountAddr}")
        "withdraw"
        Address("${res1Addr}")
        Decimal("${res1Amount}");
    TAKE_FROM_WORKTOP
        Address("${res0Addr}")
        Decimal("${res0Amount}")
        Bucket("res0_bucket");
    TAKE_FROM_WORKTOP
        Address("${res1Addr}")
        Decimal("${res1Amount}")
        Bucket("res1_bucket");
    CALL_METHOD
        Address("${poolAddr}")
        "add_pos"
        Bucket("res0_bucket")
        Bucket("res1_bucket")
        Decimal("${lowPrice}")
        Decimal("${highPrice}");
    CALL_METHOD
        Address("${accountAddr}")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        None;
    `
}

export const removePositionTransactionManifest: (accountAddr: string, poolAddr:string, posNFTAddr: string, posId: string) => string = 
    (accountAddr, poolAddr, posNFTAddr, posId) => {
    return `
    CALL_METHOD
        Address("${accountAddr}")
        "create_proof_of_non_fungibles"
        Address("${posNFTAddr}")
        Array<NonFungibleLocalId>(
            NonFungibleLocalId("${posId}")
        );
    CREATE_PROOF_FROM_AUTH_ZONE_OF_AMOUNT
        Address("${posNFTAddr}")
        Decimal("1")
        Proof("proof");
    CALL_METHOD
        Address("${poolAddr}")
        "remove_pos"
        Proof("proof");
    CALL_METHOD
        Address("${accountAddr}")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        None;
    `
}