import { View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UITypography, UITypographyLevel } from "@/components/ui/UITypography"
import { CurrenciesStoreSelector } from "@/features/stores/currencies"
import { useCalculatedConversionResult } from "@/hooks/useCalculatedConversionResult"
import { AmountStoreSelector } from "@/features/stores/amount"
import { formatNumberWithConfig } from "@/utils/math"
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber"
import { AnimationStoreAction, AnimationStoreSelector } from "@/features/stores/animation"
import { Transitions } from "@/constants/transitions"
import { useCallback } from "react"

export const ConversionResultPresenter: UIComponent = () => {
    const { styles } = useStyles(stylesheet)

    const input = CurrenciesStoreSelector.useGetInput()
    const output = CurrenciesStoreSelector.useGetOutput()
    const amount = AmountStoreSelector.useGetAmount(0)

    const result = useCalculatedConversionResult(input, output, amount)

    const delay = AnimationStoreSelector.useGetDelayByAnimation(Transitions.CurrencyNumberTransition)

    const clear = useCallback(
        () => AnimationStoreAction.deleteAnimationDelayBy(Transitions.CurrencyNumberTransition),
        []
    )

    const animatedAmount = useAnimatedNumber(amount, delay, clear)
    const animatedResult = useAnimatedNumber(result, delay, clear)

    const formattedInput = formatNumberWithConfig(animatedAmount, {
        suffix: input.symbol,
        precision: input.rounding
    })

    const formattedOutput = formatNumberWithConfig(animatedResult, {
        suffix: " " + output.symbol,
        precision: output.rounding
    })

    return (
        <View style={styles.container}>
            <UITypography>
                {`${formattedInput} =`}
            </UITypography>
            <UITypography level={UITypographyLevel.Display}>
                {formattedOutput}
            </UITypography>
        </View>
    )
}

const stylesheet = createStyleSheet(() => ({
    container: {
        marginTop: 24,
        gap: 4
    }
}))