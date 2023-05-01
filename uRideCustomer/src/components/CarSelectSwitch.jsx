import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { FONT, _COL } from '~/utils';

const CarSelectSwitch = ({ Data, onP, height = 50, sty = {}, val = 0 }) => {
    return (
        <SwitchSelector
            initial={0}
            options={Data}
            height={height || 50}
            borderRadius={10}
            animationDuration={100}
            fontSize={10}
            onPress={onP}
            style={[{ width: '94%', marginBottom: 15, marginStart: "3%", zIndex: 10 }, sty]}
            imageStyle={{ width: 50, height: 50, resizeMode: 'contain', }}
            buttonColor={_COL.WHITE}
            borderColor={_COL.F8}
            textColor={_COL.WARM_GRAY}
            selectedColor={_COL.DARK_SEAFOAM_GREEN}
            backgroundColor={_COL.TRANSPARENT}
            textStyle={{ fontFamily: FONT.SEMI_BOLD, fontSize: 10 }}
            selectedTextStyle={{ fontFamily: FONT.SEMI_BOLD, fontSize: 10 }}
            textContainerStyle={{
                height: '100%',
                aspectRatio: 1,
                borderWidth: 1,
                borderRadius: 100,
                borderColor: _COL.F8,
                marginHorizontal: "1%",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: _COL.TRANSPARENT
            }}
            selectedTextContainerStyle={{
                height: '100%',
                aspectRatio: 1,
                borderWidth: 1,
                borderRadius: 100,
                marginHorizontal: "1%",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: _COL.F8,
                borderColor: _COL.TRANSPARENT
            }}
        />
    )
}

export default CarSelectSwitch;