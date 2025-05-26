import { ICurrencyEntity } from "@/features/types"

export const useListCurrencies = (currencies: ICurrencyEntity[], query: Optional<string> = "", selected: Optional<ICurrencyEntity>) => {
    return currencies
        .filter((entity) => predicates.code(entity, selected))
        .filter((entity) => predicates.query(entity, query))
}

const predicates = {
    code: (entity: ICurrencyEntity, selected: Optional<ICurrencyEntity>) =>
        selected && entity.code !== selected.code,

    query: (entity: ICurrencyEntity, query: string) =>
        entity.code.toLowerCase().includes(query.toLowerCase()) ||
        entity.name.toLowerCase().includes(query.toLowerCase())
}