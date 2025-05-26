import { Pressable, View } from "react-native"

import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UICountryFlag } from "@/features/atoms/UICountryFlag"
import { UITypography } from "@/components/ui/UITypography"
import { UIRadioCheck } from "@/components/ui/UIRadioCheck"

import { useCallback } from "react"
import { useLocalSearchParams, useNavigation } from "expo-router"
import { CurrenciesStoreAction } from "@/features/stores/currencies"

import { CurrencySelectType } from "@/constants/enums"
import { type ICurrencyEntity } from "@/features/types"

interface UICountryCurrencyRowProps {
    row: ICurrencyEntity
    index: number,
}

export const UICountryCurrencyRow: UIComponent<UICountryCurrencyRowProps> = ({ row, index }) => {

    const { styles } = useStyles(stylesheet)
    const { type } = useLocalSearchParams<{ type: CurrencySelectType }>()

    const navigation = useNavigation()

    const handleRowPress = useCallback(() => {
            actions[type](row)
            navigation.goBack()
        },
        [type, row]
    )

    return (
        <Pressable onPress={handleRowPress}
                   style={styles.row}>
            <View style={styles.left}>
                <UICountryFlag source={row.flagSrc} />
                <UITypography style={styles.label} numberOfLines={2}>
                    {`${row.code} - ${row.name}`}
                </UITypography>
            </View>
            <View style={styles.right}>
                <UIRadioCheck value={true} />
            </View>
        </Pressable>
    )
}

const actions = {
    [CurrencySelectType.Input]: (currency: ICurrencyEntity) => CurrenciesStoreAction.setInput(currency),
    [CurrencySelectType.Output]: (currency: ICurrencyEntity) => CurrenciesStoreAction.setOutput(currency)
}

const stylesheet = createStyleSheet((theme) => ({
    row: {
        flex: 1,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16
    },
    label: {
        width: "auto"
    },
    left: {
        flex: 5,
        flexDirection: "row",
        gap: 8
    },
    right: {
        alignItems: "flex-end",
        flex: 1
    }
}))