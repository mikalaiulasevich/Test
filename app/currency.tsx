import { View, Text, StyleSheet } from "react-native"

export default function CurrencyView() {
    return (
        <View style={styles.container}>
            <Text>Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});