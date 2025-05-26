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