import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { _COL } from '~/utils';

const IcSelectSwitch = ({ Data, onP, height = 50, sty = {}, val = 0 }) => {
    return (
        <SwitchSelector
            initial={val || 0}
            options={Data}
            height={height || 50}
            borderRadius={10}
            animationDuration={100}
            fontSize={15}
            onPress={onP}
            value={val}
            style={[{ width: '30%', marginStart: "5%" }, sty]}
            imageStyle={{ width: 25, height: 25, resizeMode: 'contain' }}
            selectedColor={_COL.WHITE}
            buttonColor={_COL.DARK_SEAFOAM_GREEN}
            borderColor={_COL.BORDER}
            textColor={_COL.GRAY66}
            backgroundColor={_COL.F9}
            textStyle={{ height: 0 }}
            selectedTextStyle={{ height: 0 }}
            textContainerStyle={{ justifyContent: "center", flexDirection: "column", height: '100%' }}
            selectedTextContainerStyle={{ justifyContent: "center", flexDirection: "column", height: '100%' }}
        />
    )
}

export default IcSelectSwitch;