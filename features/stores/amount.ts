import { create } from "zustand"

export interface AmountStore {
    amount: number
}

const defaultProps: AmountStore = {
    amount: 0
}

export const useAmountStore = create<AmountStore>(() => ({
    amount: defaultProps.amount
}))

export const AmountStoreAction = {
    setAmount: (value: number) => useAmountStore.setState({ amount: value })
}

export const AmountStoreSelector = {
    useGetAmount: () => useAmountStore((state) => state.amount)
}