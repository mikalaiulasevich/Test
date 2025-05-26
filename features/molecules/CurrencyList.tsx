import { useCallback } from "react"

import { UIListTemplate } from "@/features/templates/UIListTemplate"
import { CurrenciesStoreSelector } from "@/features/stores/currencies"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useSelectedCurrencyToIgnore } from "@/hooks/useSelectedCurrencyToIgnore"
import { useListCurrencies } from "@/hooks/useListCurrrencies"
import { UICountryCurrencyRow } from "@/features/atoms/UICountryCurrencyRow"

import { type ICurrencyEntity } from "@/features/types"
import { type ListRenderItemInfo } from "react-native"

export const CurrencyList = () => {

    const { styles } = useStyles(stylesheet)

    const currencies = CurrenciesStoreSelector.useGetCurrencies()
    const selected = useSelectedCurrencyToIgnore()
    const data = useListCurrencies(currencies, selected)

    const handleRenderRow = useCallback(
        (row: ListRenderItemInfo<ICurrencyEntity>) => <UICountryCurrencyRow index={row.index} row={row.item} />,
        []
    )

    return (
        <UIListTemplate<ICurrencyEntity> style={styles.list}
                                         contentContainerStyle={styles.container}
                                         data={data}
                                         renderer={handleRenderRow}
        />
    )
}

const stylesheet = createStyleSheet((theme) => ({
    list: {
        paddingTop: 16,
        marginHorizontal: -theme.margins.layout
    },
    container: {
        paddingHorizontal: theme.margins.layout
    }
}))