import Animated, { type AnimatedProps } from "react-native-reanimated"
import { type ViewProps } from "react-native"

import { UIIcon } from "@/components/ui/UIIcon"
import { useCountryFlagURI } from "@/hooks/useCountryFlagURI"
import { createStyleSheet, useStyles } from "react-native-unistyles"

interface UICountryFlagProps extends AnimatedProps<ViewProps> {
    code: string
}

export const UICountryFlag: UIComponent<UICountryFlagProps> = ({ code }) => {
    const { styles } = useStyles(stylesheet)

    const flagURI = useCountryFlagURI(code)

    return (
        <Animated.View style={styles.container}>
            <UIIcon style={styles.flag} priority="high" source={flagURI} cachePolicy="memory-disk" />
        </Animated.View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        borderColor: theme.colors.typography,
        borderWidth: theme.borders.default,
        borderRadius: theme.radiuses.small,
        overflow: "hidden"
    },
    flag: {
        width: 30,
        height: 20
    }
}))