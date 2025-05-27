import {
    Easing,
    ReduceMotion,
    runOnJS,
    useAnimatedReaction,
    useSharedValue,
    withDelay,
    withTiming
} from "react-native-reanimated"
import { useEffect, useState } from "react"
import { DefaultAnimationDuration } from "@/constants/ui"

export const useAnimatedNumber = (value: number, delay: number = 0, callback?: Optional<AnyCallback>) => {

    const sv = useSharedValue(0)

    const [number, setNumber] = useState(0)

    useEffect(() => {
        sv.value = withDelay(
            delay,
            withTiming(
                value,
                { duration: DefaultAnimationDuration, easing: Easing.linear, reduceMotion: ReduceMotion.Never },
                (finished) => {
                    if (finished && callback) runOnJS(callback)()
                }
            )
        )
    }, [value])

    useAnimatedReaction(
        () => sv.value,
        (setter) => runOnJS(setNumber)(setter)
    )

    return number
}