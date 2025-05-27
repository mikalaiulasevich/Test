import { HttpClient } from "@/utils/http"
import { CurrencyRatesStaticSelector, CurrencyRatesStoreAction } from "@/features/stores/rates"

import { ICurrencyEntity, type ICurrencyRateResponse } from "@/features/types"

export const fetchRates = (entity: ICurrencyEntity, action: AnyCallback, callback: AnyCallback) => {

    const dispatch = () => {
        action()
        callback()
    }

    if (CurrencyRatesStaticSelector.getRateBy(entity.code)) return dispatch()

    if (entity.code) {
        HttpClient.get<ICurrencyRateResponse>(`/latest?api_key=${process.env.EXPO_PUBLIC_RATES_API_KEY}&base=${entity.code}&resolution=1d`)
            .then((response) => CurrencyRatesStoreAction.setRateBy(entity.code, response.data))
            .then(dispatch)
            .catch(dispatch)
    }
}