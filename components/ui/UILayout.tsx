import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"
import { createStyleSheet, useStyles } from "react-native-unistyles"

interface UILayoutProps extends SafeAreaViewProps {}

export const UILayout: UIComponent<UILayoutProps> = ({ children, style, edges = ["top", "bottom"], ...rest }) => {
    const { styles } = useStyles(stylesheet)
    return (
        <SafeAreaView style={[styles.layout, style]} edges={edges} {...rest}>
            {children}
        </SafeAreaView>
    )
}

const stylesheet = createStyleSheet(theme => ({
    layout: {
        padding: theme.margins.layout,
        flex: 1,
        backgroundColor: theme.colors.background
    }
}))