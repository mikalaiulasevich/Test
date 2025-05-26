import Animated, { type AnimatedProps } from "react-native-reanimated"
import { type ViewProps } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

interface UIRadioCheckProps extends AnimatedProps<ViewProps> {
    value: boolean,
}

export const UIRadioCheck: UIComponent<UIRadioCheckProps> = ({ style, ...rest }) => {
    const { styles } = useStyles(stylesheet)
    return (
        <Animated.View style={[styles.container, style]} {...rest} >
            <Animated.View style={styles.radio} />
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