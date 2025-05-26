import Animated, { type AnimatedProps } from "react-native-reanimated"
import { type ViewProps } from "react-native"

import { UIIcon } from "@/components/ui/UIIcon"
import { createStyleSheet, useStyles } from "react-native-unistyles"

interface UICountryFlagProps extends AnimatedProps<ViewProps> {
    source: string
}

export const UICountryFlag: UIComponent<UICountryFlagProps> = ({ source }) => {
    const { styles } = useStyles(stylesheet)
    return (
        <Animated.View style={styles.container}>
            <UIIcon style={styles.flag} priority="high" source={source} cachePolicy="memory-disk" />
        </Animated.View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        borderColor: theme.colors.typography,
        borderWidth: theme.borders.default,
        borderRadius: theme.radiuses.small,
        overflow: "hidden",
        width: 30,
        height: 20
    },
    flag: {
        width: 30,
        height: 20
    }
}))