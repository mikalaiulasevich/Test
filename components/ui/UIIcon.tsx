import { ImageProps } from "expo-image"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { AnimatedImage } from "@/components/converted"

interface UIIconProps extends ImageProps {}

export const UIIcon: UIComponent<UIIconProps> = ({ style, tintColor, ...rest }) => {
    const { styles } = useStyles(stylesheet)
    return (
        <AnimatedImage style={[styles.icon, style]} {...rest} />
    )
}

const stylesheet = createStyleSheet(theme => ({
    icon: {
        width: theme.icons.default,
        height: theme.icons.default
    }
}))