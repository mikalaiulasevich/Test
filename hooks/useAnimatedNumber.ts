import { Easing, runOnJS, useAnimatedReaction, useSharedValue, withTiming } from "react-native-reanimated"
import { useEffect, useState } from "react"
import { DefaultAnimationDuration } from "@/constants/ui"

export const useAnimatedNumber = (value: number) => {

    const sv = useSharedValue(0)

    const [number, setNumber] = useState(0)

    useEffect(() => {
        sv.value = withTiming(
            value,
            { duration: DefaultAnimationDuration, easing: Easing.linear }
        )
    }, [value])

    useAnimatedReaction(
        () => sv.value,
        (setter) => runOnJS(setNumber)(setter)
    )

    return number
}