import { CurrencyRatesStoreSelector } from "@/features/stores/rates"

import { type ICurrencyEntity } from "@/features/types"
import { getLocaleFromCurrency } from "@/utils/extractors"

export const useCalculatedConversionResult = (input: ICurrencyEntity, output: ICurrencyEntity, amount: number = 1) => {

    const configuration = CurrencyRatesStoreSelector.useGetRateBy(input.code)

    const rate = configuration && configuration.rates[output.code]

    if (!rate) return 0

    const result = rate * amount

    const factor = Math.pow(10, output.decimalDigits)
    let rounded = Math.round(result * factor) / factor

    if (output.rounding > 0) {
        rounded = Math.ceil(rounded / output.rounding) * output.rounding
    }

    return rounded.toLocaleString(getLocaleFromCurrency(output), {
        minimumFractionDigits: output.decimalDigits,
        maximumFractionDigits: output.decimalDigits
    })

}