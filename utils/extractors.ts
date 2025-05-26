import { ICurrencyEntity } from "@/features/types"

export const getLocaleFromCurrency = (currency: ICurrencyEntity) => {
    const countryCode = currency.countryCodeISO2
    return `${countryCode.toLowerCase()}-${countryCode}`
}
