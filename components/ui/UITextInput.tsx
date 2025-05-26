import { TextInput, TextInputProps } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

interface UITextInputProps extends TextInputProps {}

export const UITextInput: UIComponent<UITextInputProps> = ({ style, ...rest }) => {
    const { styles } = useStyles(stylesheet)
    return <TextInput style={[styles.input, style]}  {...rest} />
}

const stylesheet = createStyleSheet((theme) => ({
    input: {
        height: 42,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: theme.colors.accent,
        borderRadius: theme.radiuses.default,
        borderColor: theme.colors.typography,
        borderWidth: theme.borders.default
    }
}))