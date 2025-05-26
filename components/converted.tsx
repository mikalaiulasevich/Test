import { Pressable } from "react-native"
import { Image } from "expo-image"
import Animated from "react-native-reanimated"

export const AnimatedImage = Animated.createAnimatedComponent(Image)
export const AnimatedPressable = Animated.createAnimatedComponent(Pressable)