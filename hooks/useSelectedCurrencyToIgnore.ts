import { useLocalSearchParams } from "expo-router"
import { CurrencySelectType } from "@/constants/enums"
import { CurrenciesStoreSelector } from "@/features/stores/currencies"

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
