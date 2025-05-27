import {
    type NativeSyntheticEvent,
    Platform,
    TextInput,
    type TextInputChangeEventData,
    type TextInputProps,
    View
} from "react-native"

import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UIIcon } from "@/components/ui/UIIcon"
import { useCallback } from "react"
import { useCurrencyValue } from "@/hooks/useCurrencyValue"
import { formatNumber, getUnformattedValue, isFormattedPartially } from "@/utils/math"

interface UITextInputProps extends TextInputProps {
    icon?: Optional<string>
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

interface UICurrencyInputProps extends Omit<UITextInputProps, "value" | "onChange"> {
    value: number;
    minValue?: number;
    maxValue?: number;
    onChange?: (amount: number) => void;
}

export const UICurrencyTextInput: UIComponent<UICurrencyInputProps> = ({
                                                                           value,
                                                                           minValue = -999999999999999,
                                                                           maxValue = 999999999999999,
                                                                           onChange,
                                                                           style,
                                                                           icon,
                                                                           ...rest
                                                                       }) => {

    const isValid = useCallback(
        (newValue: number) => {
            return !((minValue !== undefined && newValue < minValue) ||
                (maxValue !== undefined && newValue > maxValue))

        },
        [minValue, maxValue]
    )
    const { formattedValue, onChangeValue } = useCurrencyValue<number, string>({
        onChange,
        value,
        getFormattedValue: formatNumber,
        isFormattedPartially,
        isValid,
        getUnformattedValue
    })

    const _onChange = useCallback(
        (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            onChangeValue(e.nativeEvent.text)
        },
        [onChangeValue]
    )

    return (
        <UITextInput
            hitSlop={20}
            onChange={_onChange}
            value={formattedValue}
            keyboardType="decimal-pad"
            {...rest}
        />
    )
}

export const stylesheet = createStyleSheet((theme) => ({
    container: {
        height: 42,
        paddingHorizontal: 16,
        paddingVertical: Platform.select({
            ios: 12,
            default: 0
        }),
        backgroundColor: theme.colors.accent,
        borderRadius: theme.radiuses.default,
        borderColor: theme.colors.typography,
        borderWidth: theme.borders.default,
        flexDirection: "row",
        gap: 8
    },
    input: {
        ...theme.typography.label,
        width: "100%",
        flex: 1
    }
}))