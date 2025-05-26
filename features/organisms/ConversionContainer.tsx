import { Fragment } from "react"

import { ConversionCurrencySelectors } from "@/features/molecules/ConversionCurrencySelectors"
import { ConversionAmountSelector } from "@/features/molecules/ConversionAmountSelector"
import { ConversionResultPresenter } from "@/features/molecules/ConversionResultPresenter"

export const ConversionContainer: UIComponent = () => {
    return (
        <Fragment>
            <ConversionCurrencySelectors />
            <ConversionAmountSelector />
            <ConversionResultPresenter />
        </Fragment>
    )
}