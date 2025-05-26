import { MMKV } from "react-native-mmkv"

export const RatesStorage = new MMKV({ id: process.env.EXPO_PUBLIC_RATES_STORAGE_KEY as string })