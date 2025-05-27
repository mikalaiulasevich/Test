import { View } from "react-native"

import { Icons } from "@/constants/assets"
import { UITextInput } from "@/components/ui/UITextInput"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { SearchQueryStoreAction, SearchQueryStoreSelector } from "@/features/stores/query"
import { useDebouncedQuery } from "@/hooks/useDebouncedQuery"

export const CurrencySearchBar: UIComponent = () => {
    const { styles } = useStyles(stylesheet)

    const query = SearchQueryStoreSelector.useGetSearchQuery()

    useDebouncedQuery()

    return (
        <View style={styles.container}>
            <UITextInput textContentType="countryName" value={query}
                         onChangeText={SearchQueryStoreAction.setSearchQuery} icon={Icons.Search} />
        </View>
    )
}

const stylesheet = createStyleSheet(() => ({
    container: {
        marginTop: 20
    }
}))