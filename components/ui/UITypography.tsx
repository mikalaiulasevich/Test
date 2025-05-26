import { Animated } from "react-native-reanimated"
import { type TextProps } from "react-native"


interface UITypography extends TextProps {

}

export const UITypography = () => {
    return (
        <Animated.Text>
            {children}
        </Animated.Text>
    )
}