import { useLocalSearchParams } from "expo-router"
import { shallow } from "zustand/vanilla/shallow"
import { CurrenciesStoreSelector } from "@/features/stores/currencies"

import { CurrencySelectType } from "@/constants/enums"
import { ICurrencyEntity } from "@/features/types"

export const useSelectedCurrencyToIgnore = () => {

    const { type } = useLocalSearchParams<{ type: CurrencySelectType }>()

    const input = CurrenciesStoreSelector.useGetInput()
    const output = CurrenciesStoreSelector.useGetOutput()

    const variants = {
        // Reverse for exclude non uniq pick
        [CurrencySelectType.Input]: output,
        [CurrencySelectType.Output]: input
    }

    return variants[type]
}


export const useIsSelectedCurrency = (row: ICurrencyEntity) => {

    const { type } = useLocalSearchParams<{ type: CurrencySelectType }>()

    const input = CurrenciesStoreSelector.useGetInput()
    const output = CurrenciesStoreSelector.useGetOutput()

    const variants = {
        [CurrencySelectType.Input]: input,
        [CurrencySelectType.Output]: output
    }

    return shallow(variants[type], row)
}