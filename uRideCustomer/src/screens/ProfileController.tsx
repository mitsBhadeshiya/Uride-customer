import React, { useRef, useState } from 'react';
import { View, Text, Pressable, TextInput, Keyboard } from 'react-native';
import { CALL_IC, CAM_IC, EMAIL_IC, HOME_IC, USER_IC, WORK_IC } from '~/common/assets/images';
import { compSty } from '~/common/styles';
import { SfView, BTN, TxtInP, SelectSwitch, BorderBTN } from '~/components';
import { _COL, RIPPLE_IC, _WIDTH } from '~/utils';

const ProfileController = () => {
  const [name, setName] = useState('Lisa Roy');
  const [email, setEmail] = useState('lroy@xyz.com');
  const [phone, setPhone] = useState('000 000 0000');
  const [gender, setGender] = useState(1)

  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  return (
    <SfView ctr bgCol={_COL.WHITE}>
      <Pressable
        onPress={null} android_ripple={RIPPLE_IC} style={compSty.pPicV}>
        <CAM_IC />
      </Pressable>
      <TxtInP
        val={name}
        onChangeT={setName}
        pHolder="Fullname"
        vSty={{ marginTop: 30, width: '85%' }}
        rIc={<USER_IC />}
        tProps={{ autoComplete: "name" }}
        onSubE={() => emailRef?.current?.focus()}
      />
      <TxtInP
        reff={emailRef}
        val={email}
        onChangeT={setEmail}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<EMAIL_IC />}
        pHolder="Email"
        tProps={{ keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false, autoComplete: "email" }}
        onSubE={() => phoneRef?.current?.focus()}
      />
      <TxtInP
        reff={phoneRef}
        val={phone}
        onChangeT={setPhone}
        vSty={{ marginTop: 15, width: "85%" }}
        rIc={<CALL_IC />}
        pHolder="Phone Number"
        onSubE={() => Keyboard?.dismiss()}
        rKeyT="done"
      />
      <SelectSwitch
        val={gender}
        Data={[{ label: "Male", value: 0 }, { label: "Female", value: 1 }]}
        onP={(e: any) => setGender(e)}
      />
      <BTN rounded vSty={{ width: "85%", marginVertical: 20 }} title="SAVE" />
      <BTN rounded
        title="Add Home Location"
        tSty={{ color: _COL.WHITE, fontSize: 15 }}
        vSty={{ width: "85%", marginBottom: 12 }}
        lIc={<HOME_IC style={{ marginRight: 15, transform: [{ scale: 1.3 }] }} />}
        lColors={[_COL.TRANSPARENT, _COL.TRANSPARENT]}
        avSTy={{ backgroundColor: _COL.DARK_SEAFOAM_GREEN, borderRadius: 4 }}
      />
      <BTN rounded
        title="Add Work Location"
        tSty={{ color: _COL.WHITE, fontSize: 15 }}
        vSty={{ width: "85%", marginBottom: 12 }}
        lIc={<WORK_IC style={{ marginRight: 15, transform: [{ scale: 1.3 }] }} />}
        lColors={[_COL.TRANSPARENT, _COL.TRANSPARENT]}
        avSTy={{ backgroundColor: _COL.DARK_SEAFOAM_GREEN, borderRadius: 4 }}
      />
      <BTN rounded
        title="Change Password"
        tSty={{ color: _COL.WHITE, fontSize: 16 }}
        vSty={{ width: "85%", marginBottom: 12 }}
        lColors={[_COL.TRANSPARENT, _COL.TRANSPARENT]}
        avSTy={{ backgroundColor: _COL.DARK_SEAFOAM_GREEN, borderRadius: 4 }}
      />
    </SfView>
  )
}

export default ProfileController;