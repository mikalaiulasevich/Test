export const formatNumber = (value: number) => {
    const formattedNumber = value.toLocaleString("en-US", {
        maximumFractionDigits: 2
    })
    return formattedNumber === "NaN" ? "" : formattedNumber
}

export const formatNumberWithConfig = (value: number, { suffix, precision }: { suffix: string, precision: number }) => {
    const formattedNumber = value.toLocaleString("en-US", {
        maximumFractionDigits: precision
    })
    return formattedNumber === "NaN" ? "" : formattedNumber + suffix
}

export const isFormattedPartially = (value: string) => {
    return value.endsWith(".") || value === "-"
}

export const getUnformattedValue = (value: string) => {
    return parseFloat(value.replace(/,/g, ""))
}