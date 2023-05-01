import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { PATH_LONG_IC, FROM_IC2, LOCATION_IC_GREEN, HOME_IC, WORK_IC, HISTORY_IC } from '~/common/assets/images';
import { mSty, sty } from '~/common/styles';
import { BorderBTN, BTN, SearchPulseEffect, SfView } from '~/components';
import { set_Ride_Mode } from '~/context/actions';
import { _COL, _HEIGHT, _WIDTH } from '~/utils';

const SetLocationController = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState('St. Peter’s Park, downtown, Newyork');
  const [to, setTo] = useState('');

  const fRef = useRef<TextInput>(null);
  //useEffect(() => { setTimeout(() => fRef.current?.focus(), 100); }, []);

  return (
    <SfView ctr bgCol={_COL.WHITE} cSty={{ paddingTop: '5%', paddingHorizontal: "3%" }}
      footerComp={<BTN rounded title="Search" onP={() => {
        dispatch(set_Ride_Mode(true))
        setTimeout(() => { navigation?.goBack(); }, 250);
      }} />}>
      <View style={sty.Row100Jsb}>
        <View style={sty.ctr}>
          <FROM_IC2 style={{ marginTop: 10 }} />
          <PATH_LONG_IC style={{ marginBottom: 5, marginTop: 10 }} />
          <LOCATION_IC_GREEN />
        </View>
        <View>
          <TextInput
            ref={fRef}
            style={mSty.fromIn}
            placeholder="From"
            placeholderTextColor={_COL.CE}
            onChangeText={setFrom}
            value={from}
          //selectTextOnFocus
          />
          <View style={{ height: 13 }} />
          <TextInput
            style={mSty.fromIn}
            placeholder="To this"
            placeholderTextColor={_COL.CE}
            onChangeText={setTo}
            value={to}
          />
        </View>
      </View>
      <View style={mSty.deviderV}>
        <View style={mSty.devLine} />
        <Text style={mSty.devTxt}>Favourite Location</Text>
        <View style={mSty.devLine} />
      </View>
      <BTN rounded
        title="Add Home Location"
        tSty={{ color: _COL.WHITE, fontSize: 15, paddingVertical: 5 }}
        vSty={{ width: "95%", marginBottom: 12, }}
        btnSty={{ justifyContent: "flex-start", paddingStart: 25 }}
        lIc={<HOME_IC style={{ marginRight: 15, transform: [{ scale: 1.3 }] }} />}
        lColors={[_COL.TRANSPARENT, _COL.TRANSPARENT]}
        avSTy={{ backgroundColor: _COL.DARK_SEAFOAM_GREEN, borderRadius: 10 }}
      />
      <BTN rounded
        title="Add Work Location"
        tSty={{ color: _COL.WHITE, fontSize: 15, paddingVertical: 5 }}
        vSty={{ width: "95%", marginBottom: 12, }}
        btnSty={{ justifyContent: "flex-start", paddingStart: 25 }}
        lIc={<WORK_IC style={{ marginRight: 15, transform: [{ scale: 1.3 }] }} />}
        lColors={[_COL.TRANSPARENT, _COL.TRANSPARENT]}
        avSTy={{ backgroundColor: _COL.DARK_SEAFOAM_GREEN, borderRadius: 10 }}
      />
      <BorderBTN title="Add New Location"
        vSty={{
          paddingHorizontal: _WIDTH * .05,
          borderColor: _COL.DARK_SEAFOAM_GREEN,
          borderWidth: 2,
          borderRadius: 10,
          width: "95%",
        }}
        tSty={{ textAlign: "center", paddingVertical: 1 }}
      />
      <View style={mSty.deviderV}>
        <View style={mSty.devLine} />
        <Text style={mSty.devTxt}>Recent Location</Text>
        <View style={mSty.devLine} />
      </View>
      <BTN rounded
        title="New Church, downtown, Newyork"
        tSty={{ color: _COL.PRIMARY_BLACK, fontSize: 15, paddingVertical: 5 }}
        vSty={{ width: "95%", marginBottom: 12, }}
        btnSty={{ justifyContent: "flex-start", paddingStart: 25 }}
        lIc={<HISTORY_IC style={{ marginRight: 15, transform: [{ scale: 1.3 }] }} />}
        lColors={[_COL.TRANSPARENT, _COL.TRANSPARENT]}
        avSTy={{ backgroundColor: "#effaf5", borderRadius: 10 }}
      />

    </SfView>
  )
}

export default SetLocationController;