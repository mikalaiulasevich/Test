import { Platform } from "react-native"

import { UILayout } from "@/components/ui/UILayout"
import { UITypography, UITypographyLevel } from "@/components/ui/UITypography"
import { useFocusEffect, useNavigation } from "expo-router"
import { useCallback, useEffect } from "react"
import { useDictionary } from "@/hooks/useDictionary"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { CurrencySelectContainer } from "@/features/organisms/CurrencySelectContainer"
import { SearchQueryStoreAction } from "@/features/stores/query"

export default function CurrencyView() {

    const navigation = useNavigation()
    const dictionary = useDictionary()

    const { styles } = useStyles(stylesheet)

    useFocusEffect(
        useCallback(
            () => {
                return () => SearchQueryStoreAction.reset()
            },
            []
        )
    )

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
            <CurrencySelectContainer />
        </UILayout>
    )
}

const stylesheet = createStyleSheet(() => ({
    container: {
        flex: 1
    },
    title: {
        left: Platform.select<number>({
            ios: -10,
            default: 0
        }),
        flex: 1
    }
}))