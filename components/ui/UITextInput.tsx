import { TextInput, TextInputProps } from "react-native"

interface UITextInputProps extends TextInputProps {}

export const UITextInput: UIComponent<UITextInputProps> = ({ ...rest }) => {
    return <TextInput  {...rest} />
}