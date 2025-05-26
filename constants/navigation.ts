import { SelectedRuntimeTheme } from "@/constants/unistyles"

export const DefaultNonHeaderConfiguration = {
    headerShown: false
}

export const DefaultHeaderConfiguration = {
    headerShown: true,
    headerBackImageSource: require("../assets/icons/tabler_arrow_left.webp"),
    headerTintColor: SelectedRuntimeTheme().colors.typography,
    headerBackTitle: "⁠",
    headerShadowVisible: false
}

export const Screens = {
    ConversionView: "conversion" as const,
    CurrencyView: "currency" as const
}

export const Routes = {
    [Screens.CurrencyView]: "/currency" as const,
    [Screens.ConversionView]: "/conversions" as const
}