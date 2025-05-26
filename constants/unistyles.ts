import { UnistylesRegistry, UnistylesRuntime } from "react-native-unistyles"
import { DarkTheme, LightTheme } from "@/constants/theme"

type AppThemes = {
    light: typeof LightTheme,
    dark: typeof DarkTheme
}

declare module "react-native-unistyles" {
    export interface UnistylesThemes extends AppThemes {}
}

export const SelectedRuntimeTheme = () => UnistylesRuntime.getTheme() as typeof LightTheme

UnistylesRegistry.addThemes(
    {
        light: LightTheme,
        dark: DarkTheme
    }
).addConfig({
    initialTheme: "light"
})