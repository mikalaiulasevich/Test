import { ICurrencyEntity } from "@/features/types"

export const useListCurrencies = (currencies: ICurrencyEntity[], selected: Optional<ICurrencyEntity>) => {
    return currencies.filter(entity => entity.code !== selected?.code)
}