import React from 'react';
import { View, Text } from 'react-native';
import { mSty } from '~/common/styles';
import { SfView } from '~/components';
import { _COL } from '~/utils';

const PromoCodeController = () => {
    return (
        <SfView ctr bgCol={_COL.WHITE}>
            <View style={mSty.promoCard}>
                <Text style={mSty.promoTxt}>QWERT122</Text>
                <Text style={mSty.promoSubTxt}>Get 5% Cashback on your next ride</Text>
                <Text style={mSty.promoDate}>Valid till : 12 Dec, 2019 </Text>
            </View>
            <View style={mSty.promoCard}>
                <Text style={mSty.promoTxt}>FIRSTRIDE</Text>
                <Text style={mSty.promoSubTxt}>50% of on 1st Ride</Text>
                <Text style={mSty.promoDate}>Valid till : 12 Dec, 2019 </Text>
            </View>
        </SfView>
    )
}

export default PromoCodeController;