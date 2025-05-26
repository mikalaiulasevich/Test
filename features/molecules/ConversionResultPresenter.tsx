import { View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UITypography, UITypographyLevel } from "@/components/ui/UITypography"

export const ConversionResultPresenter: UIComponent = () => {
    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            <UITypography>
                1$ =
            </UITypography>
            <UITypography level={UITypographyLevel.Display}>
                3,98 zł
            </UITypography>
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        marginTop: 24,
        gap: 4
    }
}))