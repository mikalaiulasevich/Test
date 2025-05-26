import { supportedCurrencies } from "@/constants/supported"

export interface ICurrencyEntity extends UniqEntity {
    name: string,
    symbol: string,
    symbolNative: string,
    decimalDigits: number,
    rounding: number,
    namePlural: string,
    countryCodeISO2: string,
    flagSrc: string
}

export interface ICurrencyRateResponse {
    "date": string,
    "base": string,
    "rates": Record<keyof typeof supportedCurrencies, string>
}