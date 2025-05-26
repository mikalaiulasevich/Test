import { DependencyList, useCallback } from "react"

import { impactAsync, ImpactFeedbackStyle } from "expo-haptics"

export const useHapticsCallback = (
    callback: AnyCallback,
    dependencies: DependencyList,
    style: ImpactFeedbackStyle = ImpactFeedbackStyle.Light
) => {
    return useCallback(
        (...args: unknown[]) => impactAsync(style).then(() => callback(...args)),
        [style, ...dependencies]
    )
}
