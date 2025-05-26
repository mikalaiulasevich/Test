import { Platform, Text } from "react-native"

import { UILayout } from "@/components/ui/UILayout"
import { UITypography, UITypographyLevel } from "@/components/ui/UITypography"
import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { useDictionary } from "@/hooks/useDictionary"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function CurrencyView() {

    const navigation = useNavigation()
    const dictionary = useDictionary()

    const { styles } = useStyles(stylesheet)

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <UITypography style={styles.title}
                              level={UITypographyLevel.Title}
                >
                    {dictionary.currency.title}
                </UITypography>
            )
        })
    }, [])

    return (
        <UILayout style={styles.container}>
            <Text>Details</Text>
        </UILayout>
    )
}

const stylesheet = createStyleSheet(() => ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        left: Platform.select<number>({
            ios: -10,
            default: 0
        }),
        flex: 1
    }
}))