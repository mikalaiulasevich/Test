import { View } from "react-native"

import { useCallback } from "react"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useDictionary } from "@/hooks/useDictionary"
import { UITypography } from "@/components/ui/UITypography"
import { UICurrencyTextInput } from "@/components/ui/UITextInput"
import { AmountStoreAction, AmountStoreSelector } from "@/features/stores/amount"

export const ConversionAmountSelector: UIComponent = () => {
    const { styles } = useStyles(stylesheet)

    const dictionary = useDictionary()
    const amount = AmountStoreSelector.useGetAmount(0)

    const handleChangeValue = useCallback(
        (value: number) => AmountStoreAction.setAmount(value),
        []
    )

    return (
        <View style={styles.container}>
            <UITypography>
                {dictionary.conversion.labels.amount}
            </UITypography>
            <UICurrencyTextInput
                autoCorrect={false}
                value={amount}
                onChange={handleChangeValue}
                numberOfLines={1}
            />
        </View>
    )
}

const stylesheet = createStyleSheet(() => ({
    container: {
        gap: 8,
        marginTop: 16
    }
}))