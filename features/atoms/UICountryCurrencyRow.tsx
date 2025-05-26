import { View } from "react-native"

import { createStyleSheet, useStyles } from "react-native-unistyles"
import { UICountryFlag } from "@/features/atoms/UICountryFlag"
import { UITypography } from "@/components/ui/UITypography"
import { UIRadioCheck } from "@/components/ui/UIRadioCheck"

import { type ICurrencyEntity } from "@/features/types"

interface UICountryCurrencyRowProps {
    row: ICurrencyEntity
}

export const UICountryCurrencyRow: UIComponent<UICountryCurrencyRowProps> = ({ row }) => {

    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.row}>
            <View style={styles.left}>
                <UICountryFlag source={row.flagSrc} />
                <UITypography style={styles.label} numberOfLines={2}>
                    {`${row.code} - ${row.name}`}
                </UITypography>
            </View>
            <View style={styles.right}>
                <UIRadioCheck value={true} />
            </View>
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    row: {
        flex: 1,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16
    },
    label: {
        width: "auto"
    },
    left: {
        flex: 5,
        flexDirection: "row",
        gap: 8
    },
    right: {
        alignItems: "flex-end",
        flex: 1
    }
}))