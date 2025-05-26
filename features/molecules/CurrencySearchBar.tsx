import { View } from "react-native"

import { Icons } from "@/constants/assets"
import { UITextInput } from "@/components/ui/UITextInput"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export const CurrencySearchBar: UIComponent = () => {

    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            <UITextInput icon={Icons.Search} />
        </View>
    )
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        marginTop: 20
    }
}))