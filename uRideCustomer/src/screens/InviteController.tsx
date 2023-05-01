import React from 'react';
import { View, Text } from 'react-native';
import { PRESENT_IC } from '~/common/assets/images';
import { gSty, mSty } from '~/common/styles';
import { BTN, SfView } from '~/components';
import { FONT, _COL } from '~/utils';

const InviteController = () => {
  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <PRESENT_IC style={{ transform: [{ scale: 1.5 }], marginTop: "5%" }} />
      <Text style={mSty.shareNote}>Share your invite code</Text>
      <Text style={mSty.codeTxt} selectable>QWERT122</Text>
      <Text style={mSty.shareNote2}>Touch to copy code</Text>
      <Text style={[gSty.txt, { fontFamily: FONT.SEMI_BOLD, marginTop: "12%" }]}>Invite your friends by sharing above code and earn the referral amount.</Text>
      <BTN title='INVITE FRIENDS' rounded vSty={{ marginTop: "15%", width: "70%" }} />
    </SfView>
  )
}

export default InviteController;