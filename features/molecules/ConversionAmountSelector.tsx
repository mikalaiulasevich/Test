import { View } from "react-native"

import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useDictionary } from "@/hooks/useDictionary"
import { UITypography } from "@/components/ui/UITypography"
import { UITextInput } from "@/components/ui/UITextInput"

export const ConversionAmountSelector: UIComponent = () => {
    const { styles } = useStyles(stylesheet)

    const dictionary = useDictionary()

    return (
        <View style={styles.container}>
            <UITypography>
                {dictionary.conversion.labels.amount}
            </UITypography>
            <UITextInput />
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        gap: 8,
        marginTop: 16
    }
}))