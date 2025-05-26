import type * as React from "react"

import Animated, { type AnimatedProps } from "react-native-reanimated"
import { type FlatListProps, ListRenderItemInfo } from "react-native"


interface UIListTemplateProps<T> extends AnimatedProps<Omit<FlatListProps<T>, "renderItem">> {
    data: T[],
    renderer: (row: ListRenderItemInfo<T>) => React.ReactElement
}

export function UIListTemplate<T>({ data, renderer, style, contentContainerStyle }: UIListTemplateProps<T>) {
    return <Animated.FlatList renderItem={renderer} data={data} style={style}
                              contentContainerStyle={contentContainerStyle} />
}