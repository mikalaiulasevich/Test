import { create } from "zustand"
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware"
import { RatesStorage } from "@/constants/storage"

import { type ICurrencyRateResponse } from "@/features/types"

const zustandPersistStorage: StateStorage = {
    getItem: (name) => RatesStorage.getString(name) ?? null,
    removeItem: (name) => RatesStorage.delete(name),
    setItem: (name, value) => RatesStorage.set(name, value)
}

export interface CurrencyRatesStore {
    map: Map<string, ICurrencyRateResponse>
}

export const useCurrencyRatesStore = create(
    persist<CurrencyRatesStore>(
        () => ({ map: new Map<string, ICurrencyRateResponse>() }),
        { name: "currency_rates_store", storage: createJSONStorage(() => zustandPersistStorage), version: 0 }
    )
)

export const CurrencyRatesStoreAction = {
    setRateBy: (base: string, response: ICurrencyRateResponse) => {
        useCurrencyRatesStore.setState((previous) => ({
            map: new Map<string, ICurrencyRateResponse>(previous.map).set(base, response)
        }))
    }
}

export const CurrencyRatesStoreSelector = {
    useGetRateBy: (base: string) => useCurrencyRatesStore((state) => state.map.get && state.map.get(base))
}