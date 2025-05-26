import { create } from "zustand"
import { createJSONStorage, persist, StateStorage } from "zustand/middleware"
import { RatesStorage } from "@/constants/storage"
import { ICurrencyRateResponse } from "@/features/types"

const zustandPersistStorage: StateStorage = {
    getItem: (name) => RatesStorage.getString(name) ?? null,
    removeItem: (name) => RatesStorage.delete(name),
    setItem: (name, value) => RatesStorage.set(name, value)
}

export interface CurrencyRatesStore {
    rates: Map<string, ICurrencyRateResponse>
}

export const useCurrencyRatesStore = create(
    persist<CurrencyRatesStore>(
        () => ({ rates: new Map<string, ICurrencyRateResponse>() }),
        { name: "currency_rates_store", storage: createJSONStorage(() => zustandPersistStorage) }
    )
)

export const CurrencyRatesStoreAction = {
    setRateBy: (base: string, response: ICurrencyRateResponse) => {
        useCurrencyRatesStore.setState((previous) => ({
            rates: new Map<string, ICurrencyRateResponse>(previous.rates).set(base, response)
        }))
    }
}

export const CurrencyRatesStoreSelector = {
    useGetRateBy: (base: string) => useCurrencyRatesStore((state) => state.rates.get(base))
}