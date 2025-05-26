import { View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UITypography, UITypographyLevel } from "@/components/ui/UITypography"
import { CurrenciesStoreSelector } from "@/features/stores/currencies"
import { useCalculatedConversionResult } from "@/hooks/useCalculatedConversionResult"

export const ConversionResultPresenter: UIComponent = () => {
    const { styles } = useStyles(stylesheet)

    const input = CurrenciesStoreSelector.useGetInput()
    const output = CurrenciesStoreSelector.useGetOutput()

    const result = useCalculatedConversionResult(input, output)

    return (
        <View style={styles.container}>
            {
                input && (
                    <UITypography>
                        {`1${input.symbol} =`}
                    </UITypography>
                )
            }
            {
                output && (
                    <UITypography level={UITypographyLevel.Display}>
                        {`${result} ${output.symbol}`}
                    </UITypography>
                )
            }
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        marginTop: 24,
        gap: 4
    }
}))