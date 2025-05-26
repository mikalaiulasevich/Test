import { View } from "react-native"

import { Icons } from "@/constants/assets"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useCallback } from "react"
import { useRouter } from "expo-router"
import { useDictionary } from "@/hooks/useDictionary"
import { UITypography } from "@/components/ui/UITypography"
import { UIIcon } from "@/components/ui/UIIcon"
import { UICountrySelectButton } from "@/features/atoms/UICountrySelectButton"
import { CurrenciesStoreSelector } from "@/features/stores/currencies"
import { Routes, Screens } from "@/constants/navigation"
import { CurrencySelectType } from "@/constants/enums"

export const ConversionCurrencySelectors = () => {
    const { styles } = useStyles(stylesheet)

    const dictionary = useDictionary()
    const navigation = useRouter()

    const input = CurrenciesStoreSelector.useGetInput()
    const output = CurrenciesStoreSelector.useGetOutput()

    const handleInputPress = useCallback(() => navigation.push({
        pathname: Routes[Screens.CurrencyView],
        params: { type: CurrencySelectType.Input }
    }), [navigation])

    const handleOutputPress = useCallback(() => navigation.push({
        pathname: Routes[Screens.CurrencyView],
        params: { type: CurrencySelectType.Output }
    }), [navigation])

    return (
        <View style={styles.container}>
            {
                input && (
                    <View style={styles.slot}>
                        <UITypography>
                            {dictionary.conversion.labels.from}
                        </UITypography>
                        <UICountrySelectButton currency={input} onPress={handleInputPress} />
                    </View>
                )
            }
            <View style={styles.delimiter}>
                <UIIcon style={styles.exchange_icon} source={Icons.Exchange} />
            </View>
            {
                output && (
                    <View style={styles.slot}>
                        <UITypography>
                            {dictionary.conversion.labels.to}
                        </UITypography>
                        <UICountrySelectButton currency={output} onPress={handleOutputPress} />
                    </View>
                )
            }
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    exchange_icon: { tintColor: theme.colors.typography },
    delimiter: {
        padding: 12,
        alignItems: "center",
        justifyContent: "flex-end",
        marginHorizontal: 16
    },
    slot: {
        gap: 8,
        flex: 1
    }
}))