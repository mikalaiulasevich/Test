import { Pressable, View } from "react-native"

import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UICountryFlag } from "@/features/atoms/UICountryFlag"
import { UITypography } from "@/components/ui/UITypography"
import { UIRadioCheck } from "@/components/ui/UIRadioCheck"

import { useCallback } from "react"
import { useLocalSearchParams, useNavigation } from "expo-router"
import { CurrenciesStoreAction } from "@/features/stores/currencies"
import { useIsSelectedCurrency } from "@/hooks/useSelectedCurrency"
import { useAnimatedCallback } from "@/hooks/useAnimatedCallback"
import { useHapticsCallback } from "@/hooks/useHapticCallback"

import { CurrencySelectType } from "@/constants/enums"
import { type ICurrencyEntity } from "@/features/types"

interface UICountryCurrencyRowProps {
    row: ICurrencyEntity
}

export const UICountryCurrencyRow: UIComponent<UICountryCurrencyRowProps> = ({ row }) => {

    const navigation = useNavigation()
    const selected = useIsSelectedCurrency(row)

    const { styles } = useStyles(stylesheet, { selected })
    const { type } = useLocalSearchParams<{ type: CurrencySelectType }>()

    const handleGoBack = useCallback(() => navigation.goBack(), [navigation])
    const callback = useAnimatedCallback(handleGoBack)

    const handleRowPress = useHapticsCallback(() => {
            actions[type](row)
            callback()
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
                <UIRadioCheck value={selected} />
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
        alignItems: "center",
        gap: 16,
        borderRadius: theme.radiuses.default,
        variants: {
            selected: {
                true: {
                    backgroundColor: theme.colors.primary
                },
                false: {}
            }
        }
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