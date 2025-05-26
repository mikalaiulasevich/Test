import { Fonts } from "@/constants/ui"
import { Colors } from "@/constants/colors"

const BaseTheme = {
    typography: {
        label: {
            fontSize: 16,
            font: Fonts.Regular
        },
        title: {
            fontSize: 20,
            font: Fonts.Bold
        },
        display: {
            fontSize: 42,
            font: Fonts.Bold
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
        primary: Colors.light.primary
    },
    ...BaseTheme
} as const

export const DarkTheme = {
    colors: {
        typography: Colors.dark.text,
        background: Colors.dark.background,
        primary: Colors.dark.primary
    },
    ...BaseTheme
} as const