import React, { useMemo } from 'react';

import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';

import Animated, {
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";

import { theme } from '../../global/styles/theme';

type BackgroundProps = BottomSheetBackgroundProps & {

}

export function CustomBackground({
    style,
    animatedIndex,
}: BackgroundProps) {

    const containerAnimatedStyle = useAnimatedStyle(() => ({
        // @ts-ignore
        backgroundColor: interpolateColor(
            animatedIndex.value,
            [0, 1],
            [theme.colors.secondary80, theme.colors.secondary100]
        ),
    }));
    const containerStyle = useMemo(
        () => [style, containerAnimatedStyle],
        [style, containerAnimatedStyle]
    );
    return (
        <Animated.View pointerEvents="none" style={containerStyle} />
    )
}