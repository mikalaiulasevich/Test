import { Image, ImageProps } from "expo-image"
import Animated from "react-native-reanimated"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AnimatedExpoImage = Animated.createAnimatedComponent(Image)

interface UIIconProps extends ImageProps {}

export const UIIcon: UIComponent<UIIconProps> = ({ style, tintColor, ...rest }) => {
    const { styles } = useStyles(stylesheet)
    return (
        <AnimatedExpoImage style={[styles.icon, style]} {...rest} />
    )
}

const stylesheet = createStyleSheet(theme => ({
    icon: {
        width: theme.icons.default,
        height: theme.icons.default
    }
}))