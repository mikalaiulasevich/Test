import { UnistylesRegistry } from "react-native-unistyles"
import { DarkTheme, LightTheme } from "@/constants/theme"

type AppThemes = {
    light: typeof LightTheme,
    dark: typeof DarkTheme
}

declare module "react-native-unistyles" {
    export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes(
    {
        light: LightTheme,
        dark: DarkTheme
    }
).addConfig({
    initialTheme: "light"
})