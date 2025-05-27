import { useCallback, useEffect, useRef, useState } from "react"

export function useCurrencyValue<valueType, formattedType = valueType>({
                                                                           value,
                                                                           onChange,
                                                                           getFormattedValue = (value) => value as unknown as formattedType,
                                                                           getUnformattedValue = (value) => value as unknown as valueType,
                                                                           isValid = () => true,
                                                                           isFormattedPartially = () => false
                                                                       }: {
    value: valueType;
    onChange?: (value: valueType) => void;
    getFormattedValue?: (value: valueType) => formattedType;
    getUnformattedValue?: (value: formattedType) => valueType;
    isValid?: (value: valueType) => boolean;
    isFormattedPartially?: (value: formattedType) => boolean;
}) {
    const localValueRef = useRef(value)

    const [formattedValue, setFormattedValue] = useState(() => {
        if (value !== undefined) {
            return getFormattedValue(value)
        }
    })

    const onChangeValue = useCallback(
        (newValue: formattedType) => {
            if (isFormattedPartially(newValue)) {
                setFormattedValue(newValue)
                return
            }

            const _newUnformattedValue = getUnformattedValue(newValue)
            if (!isValid(_newUnformattedValue)) {
                return
            }

            const _formattedValue = getFormattedValue(_newUnformattedValue)
            localValueRef.current = _newUnformattedValue

            if (onChange) {
                onChange(_newUnformattedValue)
            }
            setFormattedValue(_formattedValue)
        },
        [onChange]
    )

    useEffect(() => {
        if (value !== localValueRef.current) {
            setFormattedValue(getFormattedValue(value as valueType))
            localValueRef.current = value
        }
    }, [value])

    return { formattedValue, onChangeValue }
}