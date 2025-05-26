import * as SplashScreen from "expo-splash-screen"

import { DefaultHeaderConfiguration, DefaultNonHeaderConfiguration } from "@/constants/navigation"
import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter"
import { Stack } from "expo-router"
import { useEffect } from "react"

export default function RootLayout() {
    const [loaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <Stack screenOptions={DefaultNonHeaderConfiguration}>
            <Stack.Screen name="conversion" />
            <Stack.Screen name="currency" options={DefaultHeaderConfiguration} />
        </Stack>
    )
}
