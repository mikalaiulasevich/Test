import { useCallback } from "react"

import { UIListTemplate } from "@/features/templates/UIListTemplate"
import { CurrenciesStoreSelector } from "@/features/stores/currencies"
import { UICountryCurrencyRow } from "@/features/atoms/UICountryCurrencyRow"

import { type ICurrencyEntity } from "@/features/types"
import { type ListRenderItemInfo } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export const CurrencyList = () => {

    const { styles } = useStyles(stylesheet)

    const currencies = CurrenciesStoreSelector.useGetCurrencies()

    const handleRenderRow = useCallback(
        (row: ListRenderItemInfo<ICurrencyEntity>) => <UICountryCurrencyRow row={row.item} />,
        []
    )

    return (
        <UIListTemplate<ICurrencyEntity> style={styles.list}
                                         contentContainerStyle={styles.container}
                                         data={currencies}
                                         renderer={handleRenderRow} />
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