import { HttpClient } from "@/utils/http"
import { CurrenciesStoreStaticSelector } from "@/features/stores/currencies"
import { CurrencyRatesStoreAction } from "@/features/stores/rates"

import { type ICurrencyRateResponse } from "@/features/types"

export const fetchRates = (action: AnyCallback, callback: AnyCallback) => {

    action()

    const base = CurrenciesStoreStaticSelector.getInput()

    if (base) {
        HttpClient.get<ICurrencyRateResponse>(`/latest?api_key=${process.env.EXPO_PUBLIC_RATES_API_KEY}&base=${base.code}&resolution=1d`)
            .then((response) => CurrencyRatesStoreAction.setRateBy(base.code, response.data))
            .then(callback)
            .catch(callback)
    }
}