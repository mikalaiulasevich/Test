import { create } from "zustand"

import { ICurrencyEntity } from "@/features/types"

import StoredCurrencies from "@/assets/currencies.json"

export interface CurrenciesStore {
    currencies: ICurrencyEntity[]
    input: Optional<ICurrencyEntity>
    output: Optional<ICurrencyEntity>
}

const defaultValues = {
    defaultInput: "USD",
    defaultOutput: "PLN"
}

const predicates = {
    defaultInput: (currency: ICurrencyEntity) => currency.code === defaultValues.defaultInput,
    defaultOutput: (currency: ICurrencyEntity) => currency.code === defaultValues.defaultOutput
}

const defaultProps: CurrenciesStore = {
    currencies: StoredCurrencies,
    input: StoredCurrencies.find(predicates.defaultInput) ?? StoredCurrencies.at(0),
    output: StoredCurrencies.find(predicates.defaultOutput) ?? StoredCurrencies.at(1)
}

export const useCurrenciesStore = create<CurrenciesStore>(() => ({
    input: defaultProps.input,
    output: defaultProps.output,
    currencies: defaultProps.currencies
}))

export const CurrenciesStoreAction = {
    setInput: (input: ICurrencyEntity) => useCurrenciesStore.setState({ input }),
    setOutput: (output: ICurrencyEntity) => useCurrenciesStore.setState({ output }),
    reset: () => useCurrenciesStore.setState({ ...defaultProps })
}

export const CurrenciesStoreSelector = {
    useGetInput: () => useCurrenciesStore((state) => state.input),
    useGetOutput: () => useCurrenciesStore((state) => state.output),
    useGetCurrencies: () => useCurrenciesStore((state) => state.currencies)
}