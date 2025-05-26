import Animated, {
    type AnimatedProps,
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from "react-native-reanimated"
import { type ViewProps } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useEffect } from "react"

interface UIRadioCheckProps extends AnimatedProps<ViewProps> {
    value: boolean,
}

export const UIRadioCheck: UIComponent<UIRadioCheckProps> = ({ style, value, ...rest }) => {
    const { styles } = useStyles(stylesheet)

    const opacity = useSharedValue(0)

    useEffect(() => {
        opacity.value = withTiming(value ? 1 : 0, { duration: 350, easing: Easing.linear })
    }, [value])

    const animatedOpacityStyles = useAnimatedStyle(() => ({
        opacity: opacity.value
    }))

    return (
        <Animated.View style={[styles.container, style]} {...rest} >
            <Animated.View style={[styles.radio, animatedOpacityStyles]} />
        </Animated.View>
    )
}

const stylesheet = createStyleSheet(theme => ({
    container: {
        width: theme.icons.radio,
        height: theme.icons.radio,
        backgroundColor: theme.colors.accent,
        borderRadius: theme.icons.radio,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: theme.borders.default,
        borderColor: theme.colors.typography
    },
    radio: {
        width: theme.icons.radio / 2,
        height: theme.icons.radio / 2,
        borderRadius: theme.icons.radio / 2,
        backgroundColor: theme.colors.typography
    }
}))