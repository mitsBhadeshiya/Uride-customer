import React, { ReactNode } from 'react';
import { Text, Pressable, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { compSty } from '~/common/styles';
import { RIPPLE_BTNr, _COL } from '~/utils';

interface Props {
  title: string;
  onP?: null | ((event: GestureResponderEvent) => void) | undefined;
  rounded?: boolean;
  vSty?: StyleProp<ViewStyle>;
  avSTy?: StyleProp<ViewStyle>;
  tSty?: StyleProp<TextStyle>;
  btnSty?: StyleProp<ViewStyle> | undefined;
  lColors?: (string | number)[];
  lIc?: ReactNode | JSX.Element;
}

const BTN = ({ title, onP, rounded, vSty, avSTy, tSty, btnSty, lColors, lIc }: Props) => {
  const s_V = useSharedValue(1);
  const aStyles = useAnimatedStyle(() => { return { transform: [{ scale: s_V.value }], width: "100%" }; });

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={lColors || [_COL.PRIMARY, _COL.SECONDARY]}
      style={[rounded ? compSty.lgBtnVr : compSty.lgBtnV, vSty]}
    >
      <Animated.View style={[aStyles, avSTy]}>
        <Pressable
          style={[compSty.lgBtn, { flexDirection: "row", justifyContent: "center", alignItems: "center" }, btnSty]}
          android_ripple={RIPPLE_BTNr}
          onPressIn={() => { s_V.value = withTiming(.98, { duration: 50, easing: Easing.ease }); }}
          onPressOut={() => { s_V.value = withTiming(1, { duration: 50, easing: Easing.ease }); }}
          onPress={onP}
        >
          {lIc}
          <Text style={[compSty.lgBtnTxt, tSty]}>
            {title}
          </Text>
        </Pressable>
      </Animated.View>
    </LinearGradient>
  )
};

export default BTN;