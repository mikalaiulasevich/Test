import { SearchQueryStore, SearchQueryStoreAction, useCurrenciesStore } from "@/features/stores/query"

import { useCallback, useEffect } from "react"
import { debounce } from "@/utils/debounce"

const debouncedAction = debounce(
    (query: Optional<string>) => SearchQueryStoreAction.setDebouncedSearchQuery(query),
    150
)

export const useDebouncedQuery = () => {

    const effectHandler = useCallback(
        (state: SearchQueryStore) => debouncedAction(state.searchQuery),
        []
    )

    useEffect(() => {
        const effect = useCurrenciesStore.subscribe(effectHandler)
        return () => effect()
    }, [effectHandler])
}