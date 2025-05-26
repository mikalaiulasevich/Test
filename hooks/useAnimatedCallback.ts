import { Easing, ReduceMotion, runOnJS, useSharedValue, withTiming } from "react-native-reanimated"
import { useCallback } from "react"
import { DefaultAnimationDuration } from "@/constants/ui"

export const useAnimatedCallback = (action: AnyCallback, duration: number = DefaultAnimationDuration) => {

    const shared = useSharedValue(0)

    return useCallback(
        () => {
            shared.value = withTiming(
                shared.value + 1,
                { duration: duration, easing: Easing.linear, reduceMotion: ReduceMotion.Never },
                (isFinished) => {
                    if (isFinished) runOnJS(action)()
                }
            )
        },
        [duration, action]
    )
}