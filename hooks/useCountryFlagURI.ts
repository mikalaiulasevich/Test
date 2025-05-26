export const useCountryFlagURI = (code: string) => {
    return `${process.env.EXPO_PUBLIC_FLAGS_API}/${code.toLowerCase()}.png?raw=true`
}