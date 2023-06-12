import Decimal from "decimal.js"
import { AppConfig } from "./config"

export const setsEq: <T>(xs: Set<T>, ys: Set<T>) => boolean =
	(xs, ys) =>
		xs.size === ys.size &&
		[...xs].every((x) => ys.has(x))

export const isNumber: (n: string) => boolean =
	n => /^-?\d+\.?\d*$/.test(n)

export const isPriceInvalid: (price: string) => boolean = price => {
	if (!isNumber(price)) {
		return true
	}
	const priceNumber = parseFloat(price)
	if (priceNumber < AppConfig.minPrice || priceNumber > AppConfig.maxPrice) {
		return true
	}
	return false
}

export const to18DecPlaces: (d: Decimal) => Decimal =
	d => {
		const ds = d.toFixed()
		const dotIndex = ds.indexOf(".")
		if (dotIndex === -1 || ds.length - dotIndex + 1 <= 18) {
			return d
		}
		return new Decimal(ds.substring(0, dotIndex + 19))
	}