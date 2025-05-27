import { create } from "zustand"
import { DefaultAnimationDuration } from "@/constants/ui"

export interface AnimationStore {
    delayMap: Record<string, number>
}

export const useAnimationStore = create<AnimationStore>(() => ({
    delayMap: {}
}))

export const AnimationStoreAction = {
    setDelayByAnimation: (name: string, delay: number = DefaultAnimationDuration) => useAnimationStore.setState(state => {
        return {
            delayMap: {
                ...state.delayMap,
                [name]: delay
            }
        }
    }),
    deleteAnimationDelayBy: (name: string) => useAnimationStore.setState(state => ({
        delayMap: {
            ...state.delayMap,
            [name]: 0
        }
    }))
}

export const AnimationStoreSelector = {
    useGetDelayByAnimation: (name: string) => useAnimationStore((state) => state.delayMap[name] ?? 0)
}