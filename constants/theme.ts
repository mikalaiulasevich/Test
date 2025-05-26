import { Fonts } from "@/constants/ui"
import { Colors } from "@/constants/colors"

const BaseTheme = {
    typography: {
        label: {
            fontSize: 16,
            font: Fonts.Regular,
            fontWeight: "400"
        },
        title: {
            fontSize: 20,
            font: Fonts.Bold,
            fontWeight: "700"
        },
        display: {
            fontSize: 42,
            font: Fonts.Bold,
            fontWeight: "400"
        }
    },
    icons: {
        default: 18
    },
    radiuses: {
        small: 4,
        default: 8
    },
    borders: {
        default: 1
    },
    margins: {
        sm: 2,
        md: 4,
        lg: 8,
        xl: 12,
        layout: 20
    }
}

export const LightTheme = {
    colors: {
        typography: Colors.light.text,
        background: Colors.light.background,
        primary: Colors.light.primary,
        accent: Colors.light.accent
    },
    ...BaseTheme
} as const

export const DarkTheme = {
    colors: {
        typography: Colors.dark.text,
        background: Colors.dark.background,
        primary: Colors.dark.primary,
        accent: Colors.dark.accent
    },
    ...BaseTheme
} as const