import Animated, { type AnimatedProps } from "react-native-reanimated"
import { type TextProps } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export enum UITypographyLevel {
    Label = "label",
    Title = "title",
    Display = "display"
}

interface UITypographyProps extends AnimatedProps<TextProps> {
    level?: Optional<UITypographyLevel>
}

export const UITypography: UIComponent<UITypographyProps> = ({
                                                                 children,
                                                                 style,
                                                                 level = UITypographyLevel.Label,
                                                                 ...rest
                                                             }) => {
    const { styles } = useStyles(stylesheet, { level })

    return (
        <Animated.Text style={[styles.typography, style]} {...rest}>
            {children}
        </Animated.Text>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    typography: {
        color: theme.colors.typography,
        variants: {
            level: {
                [UITypographyLevel.Label]: { ...theme.typography.label },
                [UITypographyLevel.Title]: { ...theme.typography.title },
                [UITypographyLevel.Display]: { ...theme.typography.display }
            }
        }
    }
}))