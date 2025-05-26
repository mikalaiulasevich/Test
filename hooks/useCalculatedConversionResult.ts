import { CurrencyRatesStoreSelector } from "@/features/stores/rates"

import { type ICurrencyEntity } from "@/features/types"

export const useCalculatedConversionResult = (input: ICurrencyEntity, output: ICurrencyEntity, amount: number = 1) => {

    const configuration = CurrencyRatesStoreSelector.useGetRateBy(input.code)

    const rate = configuration && configuration.rates[output.code]

    if (!rate) return 0

    return rate * amount
}