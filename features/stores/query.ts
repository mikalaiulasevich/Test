import { create } from "zustand"

export interface SearchQueryStore {
    _debouncedSearchQuery: Optional<string>,
    searchQuery: Optional<string>
}

const defaultProps: SearchQueryStore = {
    _debouncedSearchQuery: undefined,
    searchQuery: undefined
}

export const useCurrenciesStore = create<SearchQueryStore>(() => ({
    searchQuery: defaultProps.searchQuery,
    _debouncedSearchQuery: defaultProps._debouncedSearchQuery
}))

export const SearchQueryStoreAction = {
    setSearchQuery: (query: Optional<string>) => useCurrenciesStore.setState({ searchQuery: query }),
    setDebouncedSearchQuery: (query: Optional<string>) => useCurrenciesStore.setState({ _debouncedSearchQuery: query }),
    reset: () => useCurrenciesStore.setState({ ...defaultProps })
}

export const SearchQueryStoreSelector = {
    useGetSearchQuery: () => useCurrenciesStore((state) => state.searchQuery),
    useGetDebouncedSearchQuery: () => useCurrenciesStore((state) => state._debouncedSearchQuery)
}