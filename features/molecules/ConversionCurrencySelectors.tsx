import { View } from "react-native"

import { Icons } from "@/constants/assets"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useCallback } from "react"
import { useDictionary } from "@/hooks/useDictionary"
import { UITypography } from "@/components/ui/UITypography"
import { UIIcon } from "@/components/ui/UIIcon"
import { UICountrySelectButton } from "@/features/atoms/UICountrySelectButton"

export const ConversionCurrencySelectors = () => {
    const { styles } = useStyles(stylesheet)

    const dictionary = useDictionary()

    const handlePress = useCallback(() => console.log("code: "), [])

    return (
        <View style={styles.container}>
            <View style={styles.slot}>
                <UITypography>
                    {dictionary.conversion.labels.from}
                </UITypography>
                <UICountrySelectButton countryCode="USD" onPress={handlePress} />
            </View>
            <View style={styles.delimiter}>
                <UIIcon style={styles.exchange_icon} source={Icons.Exchange} />
            </View>
            <View style={styles.slot}>
                <UITypography>
                    {dictionary.conversion.labels.to}
                </UITypography>
                <UICountrySelectButton countryCode="PLN" onPress={handlePress} />
            </View>
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