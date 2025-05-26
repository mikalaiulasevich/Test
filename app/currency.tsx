import { StyleSheet, Text } from "react-native"

import { UILayout } from "@/components/ui/UILayout"

export default function CurrencyView() {
    return (
        <UILayout style={styles.container}>
            <Text>Details</Text>
        </UILayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})