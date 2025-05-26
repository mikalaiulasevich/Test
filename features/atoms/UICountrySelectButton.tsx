import { type AnimatedProps } from "react-native-reanimated"
import { Pressable, View, type ViewProps } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

import { UITypography } from "@/components/ui/UITypography"
import { UICountryFlag } from "@/features/atoms/UICountryFlag"
import { UIIcon } from "@/components/ui/UIIcon"
import { Icons } from "@/constants/assets"

import { ICurrencyEntity } from "@/features/types"

interface UISelectButton extends AnimatedProps<ViewProps> {
    onPress: AnyCallback,
    currency: ICurrencyEntity,
}

export const UICountrySelectButton: UIComponent<UISelectButton> = ({ currency, onPress }) => {
    const { styles } = useStyles(stylesheet)

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.left}>
                <UICountryFlag source={currency.flagSrc} />
                <UITypography>{currency.code}</UITypography>
            </View>
            <UIIcon source={Icons.ChevronDown} />
        </Pressable>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: theme.radiuses.default,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: theme.colors.primary
    },
    left: {
        flexDirection: "row",
        gap: 8
    }
}))