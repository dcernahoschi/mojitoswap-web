import { ManifestBuilder, Address, Bucket, Expression } from "@radixdlt/radix-dapp-toolkit"
import { AppConfig } from "./config"

export const newPoolTransactionManifest: (accountAddr: string, res0Addr: string, res1Addr: string, fee: string, price: string) => string =
    (accountAddr, res0Addr, res1Addr, fee, sqrtPrice) => {
        return new ManifestBuilder()
            .callMethod(accountAddr, "create_proof", [Address(AppConfig.dexAdminBadgeAddr)])
            .callMethod(AppConfig.dexComponentAddr, "new_pool", [Address(res0Addr), Address(res1Addr), `Decimal("${fee}")`, `Decimal("${sqrtPrice}")`])
            .callMethod(accountAddr, "deposit_batch", [Expression("ENTIRE_WORKTOP")])
            .build()
            .toString()
    }

export const addPositionTransactionManifest: (accountAddr: string, poolAddr: string, res0Amount: string, res0Addr: string, res1Amount: string, res1Addr: string, lowTick: string, highTick: string) => string = (accountAddr, poolAddr, res0Amount, res0Addr, res1Amount, res1Addr, lowTick, highTick) => {
    return new ManifestBuilder()
        .callMethod(accountAddr, "withdraw", [Address(res0Addr), `Decimal("${res0Amount}")`])
        .callMethod(accountAddr, "withdraw", [Address(res1Addr), `Decimal("${res1Amount}")`])
        .takeFromWorktop(res0Addr, "res0_bucket")
        .takeFromWorktop(res1Addr, "res1_bucket")
        .callMethod(poolAddr, "add_position", [Bucket("res0_bucket"), Bucket("res1_bucket"), `Decimal("${res0Amount}")`, `Decimal("${res1Amount}")`, `Decimal("${lowTick}")`, `Decimal("${highTick}")`])
        .callMethod(accountAddr, "deposit_batch", [Expression("ENTIRE_WORKTOP")])
        .build()
        .toString()
} 