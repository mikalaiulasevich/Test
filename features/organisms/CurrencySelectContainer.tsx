import { Fragment } from "react"

import { CurrencySearchBar } from "@/features/molecules/CurrencySearchBar"
import { CurrencyList } from "@/features/molecules/CurrencyList"

export const CurrencySelectContainer: UIComponent = () => {
    return (
        <Fragment>
            <CurrencySearchBar />
            <CurrencyList />
        </Fragment>
    )
}