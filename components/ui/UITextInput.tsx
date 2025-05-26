import { TextInput, TextInputProps, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UIIcon } from "@/components/ui/UIIcon"

interface UITextInputProps extends TextInputProps {
    icon: Optional<string>
}

export const UITextInput: UIComponent<UITextInputProps> = ({ style, icon, ...rest }) => {
    const { styles } = useStyles(stylesheet)
    return (
        <View style={styles.container}>
            {icon && (<UIIcon source={icon} />)}
            <TextInput style={[styles.input, style]}  {...rest} />
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        height: 42,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: theme.colors.accent,
        borderRadius: theme.radiuses.default,
        borderColor: theme.colors.typography,
        borderWidth: theme.borders.default,
        flexDirection: "row",
        gap: 8
    },
    input: {
        width: "100%",
        flex: 1
    }
}))