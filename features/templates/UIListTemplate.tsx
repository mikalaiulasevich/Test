import type * as React from "react"
import { useCallback } from "react"

import Animated, { type AnimatedProps, LinearTransition } from "react-native-reanimated"
import { type  ListRenderItemInfo, type ViewStyle } from "react-native"

interface UIListTemplateProps<T> extends AnimatedProps<Omit<typeof Animated.FlatList<T>, "renderItem">> {
    data: T[],
    renderer: (row: ListRenderItemInfo<T>) => React.ReactElement,
    style: ViewStyle,
    contentContainerStyle: ViewStyle,
}

export function UIListTemplate<T extends UniqEntity>({
                                                         data,
                                                         renderer,
                                                         style,
                                                         contentContainerStyle
                                                     }: UIListTemplateProps<T>) {

    const keyExtractor = useCallback((item: T) => item.code, [])

    return <Animated.FlatList renderItem={renderer}
                              keyExtractor={keyExtractor}
                              data={data}
                              style={style}
                              itemLayoutAnimation={LinearTransition}
                              keyboardShouldPersistTaps="always"
                              contentContainerStyle={contentContainerStyle}
    />
}