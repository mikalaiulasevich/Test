import { StyleSheet } from "react-native"

import { UILayout } from "@/components/ui/UILayout"
import { ConversionContainer } from "@/features/organisms/ConversionContainer"

export default function ConversionView() {
    return (
        <UILayout style={styles.container}>
            <ConversionContainer />
        </UILayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})