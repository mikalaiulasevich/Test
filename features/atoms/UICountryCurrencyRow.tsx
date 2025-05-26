import { View } from "react-native"

import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UICountryFlag } from "@/features/atoms/UICountryFlag"
import { UITypography } from "@/components/ui/UITypography"

import { type ICurrencyEntity } from "@/features/types"

interface UICountryCurrencyRowProps {
    row: ICurrencyEntity
}

export const UICountryCurrencyRow: UIComponent<UICountryCurrencyRowProps> = ({ row }) => {

    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.row}>
            <UICountryFlag source={row.flagSrc} />
            <UITypography numberOfLines={2}>
                {`${row.code} - ${row.name}`}
            </UITypography>
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    row: {
        flex: 1,
        padding: 16,
        flexDirection: "row",
        gap: 8
    }
}))