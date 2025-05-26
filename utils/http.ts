import axios from "axios"

export const HttpClient = axios.create({
    timeout: 1000,
    baseURL: process.env.EXPO_PUBLIC_RATES_API_URL
})