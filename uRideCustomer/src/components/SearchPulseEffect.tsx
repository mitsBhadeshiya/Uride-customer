import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    Extrapolate,
    withRepeat,
    withDelay,
    Easing,
    FadeIn,
    FadeOut,
} from 'react-native-reanimated';
import { HATCHBACK_IC } from '~/common/assets/images';
import { mSty } from '~/common/styles';
import { _COL, _WIDTH } from '~/utils';

interface Props {
    delay?: number;
    repeat?: boolean;
}

const Pulse = ({ delay = 0, repeat }: Props) => {
    const animation = useSharedValue(0);
    useLayoutEffect(() => {
        animation.value = withDelay(
            delay, withRepeat(
                withTiming(1, { duration: 3200, easing: Easing.linear, }),
                repeat ? -1 : 1, false
            )
        );
    }, []);

    const animatedStyles = useAnimatedStyle(() => {
        const opacity = interpolate(animation.value, [0, 1], [0.6, 0], Extrapolate.CLAMP);
        return { opacity: opacity, transform: [{ scale: animation.value }], };
    });

    return <Animated.View style={[styles.circle, animatedStyles]} />;
};


export default function SearchPulseEffect() {
    return (
        <View style={styles.container}>
            <Animated.View exiting={FadeOut.duration(550)} style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Animated.View entering={FadeIn.delay(700).duration(1500)} style={mSty.sLoading}>
                    <HATCHBACK_IC style={{ transform: [{ scale: 1.5 }], marginBottom: 15 }} />
                    <Text style={mSty.sLoadingTxt} adjustsFontSizeToFit numberOfLines={1} allowFontScaling={false}>Searching</Text>
                    <Text style={[mSty.sLoadingTxt, { height: 18, marginBottom: -15 }]} adjustsFontSizeToFit numberOfLines={1} allowFontScaling={false}>Taxi</Text>
                </Animated.View>
                <Pulse delay={0} repeat={true} />
                <Pulse delay={400} repeat={true} />
                <Pulse delay={800} repeat={true} />
                <Pulse delay={1200} repeat={true} />
                <Pulse delay={1600} repeat={true} />
                <Pulse delay={2000} repeat={true} />
                <Pulse delay={2400} repeat={true} />
                <Pulse delay={2800} repeat={true} />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 15,
        padding: 8,
        zIndex: 200,
        backgroundColor: _COL.BLACK05,
        ...StyleSheet.absoluteFillObject
    },
    circle: {
        width: _WIDTH,
        borderRadius: _WIDTH * 0.7,
        height: _WIDTH,
        position: 'absolute',
        borderColor: _COL.BORDER,
        borderWidth: 1,
        backgroundColor: _COL.WHITE,
    },
    innerCircle: {
        width: 80,
        borderRadius: 40,
        height: 80,
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'white',
    },
});
