import { defaultLocale, dictionary } from "@/constants/i18n"

export const useDictionary = () => {
    return dictionary[defaultLocale]
}