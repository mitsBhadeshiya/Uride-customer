import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CAL_IC, CLOCK_IC, FROM_IC, HATCHBACK_IC, LOCATION_IC_GREEN, PATH_IC } from '~/common/assets/images';
import { mSty, sty } from '~/common/styles';
import { SelectSwitch, SfView } from '~/components';
import { FONT, RIPPLE_IC, _COL } from '~/utils';

const MyTripsController = ({ navigation }: any) => {
  const [tripType, setTripType] = useState("past");

  const onCard = () => {
    navigation?.navigate("RideDetail");
  }

  return (
    <SfView ctr bgCol={_COL.WHITE} cSty={{ paddingTop: 5 }}>
      <SelectSwitch
        Data={[{ label: "Past", value: "past" }, { label: "Upcoming", value: "upcoming" }]}
        onP={(e: any) => setTripType(e)}
        sty={{ width: "98%", marginBottom: 30 }}
      />
      {tripType === "past" ?
        <>
          <View style={mSty.tripCard}>
            <Pressable style={mSty.tripCardBtn} android_ripple={RIPPLE_IC} onPress={onCard}>
              <View style={[sty.jSbRow100, { marginBottom: 15 }]}>
                <View style={mSty.carTypeTag}>
                  <HATCHBACK_IC />
                  <Text style={[mSty.greenTagTxt, { fontFamily: FONT.SEMI_BOLD, height: "100%" }]}>Hatchback</Text>
                </View>
                <View style={mSty.redTag}>
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.redTagTxt}>Cancelled</Text>
                </View>
              </View>

              <View style={sty.Row100Jsb}>
                <View style={sty.rowAc}>
                  <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
                    <CAL_IC />
                    <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.dateT}>Mon, 19 sept</Text>
                  </View>
                  <View style={sty.rowAc}>
                    <CLOCK_IC />
                    <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.dateT}>09:00 AM</Text>
                  </View>
                </View>
                <View style={mSty.totalV}>
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.priceT}>$ 20</Text>
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.totalT}>Total Fare</Text>
                </View>
              </View>
              <View style={mSty.halfLine} />
              <View style={[sty.rowAc, { paddingHorizontal: 15, marginTop: 15 }]}>
                <FROM_IC />
                <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>St. Peter’s Park, downtown, New York</Text>
              </View>
              <PATH_IC style={{ paddingHorizontal: 30 }} />
              <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
                <LOCATION_IC_GREEN />
                <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>Marry Church, New York</Text>
              </View>
            </Pressable>
          </View>

          <View style={mSty.tripCard}>
            <Pressable style={mSty.tripCardBtn} android_ripple={RIPPLE_IC} onPress={onCard}>
              <View style={[sty.jSbRow100, { marginBottom: 15 }]}>
                <View style={mSty.carTypeTag}>
                  <HATCHBACK_IC />
                  <Text style={[mSty.greenTagTxt, { fontFamily: FONT.SEMI_BOLD, height: "100%" }]}>Hatchback</Text>
                </View>
                <View style={mSty.greenTag}>
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.greenTagTxt}>Successfull</Text>
                </View>
              </View>

              <View style={sty.Row100Jsb}>
                <View style={sty.rowAc}>
                  <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
                    <CAL_IC />
                    <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.dateT}>Mon, 19 sept</Text>
                  </View>
                  <View style={sty.rowAc}>
                    <CLOCK_IC />
                    <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.dateT}>09:00 AM</Text>
                  </View>
                </View>
                <View style={mSty.totalV}>
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.priceT}>$ 20</Text>
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.totalT}>Total Fare</Text>
                </View>
              </View>
              <View style={mSty.halfLine} />
              <View style={[sty.rowAc, { paddingHorizontal: 15, marginTop: 15 }]}>
                <FROM_IC />
                <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>St. Peter’s Park, downtown, New York</Text>
              </View>
              <PATH_IC style={{ paddingHorizontal: 30 }} />
              <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
                <LOCATION_IC_GREEN />
                <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>Marry Church, New York</Text>
              </View>
            </Pressable>
          </View>
        </>
        :
        <View style={mSty.tripCard}>
          <Pressable style={mSty.tripCardBtn} android_ripple={RIPPLE_IC} onPress={onCard}>

            <View style={[sty.jSbRow100, { marginBottom: 15 }]}>
              <View style={mSty.carTypeTag}>
                <HATCHBACK_IC />
                <Text style={[mSty.greenTagTxt, { fontFamily: FONT.SEMI_BOLD, height: "100%" }]}>Hatchback</Text>
              </View>
              <View style={mSty.priTag}>
                <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.priTagTxt}>Requested</Text>
              </View>
            </View>

            <View style={sty.Row100Jsb}>
              <View style={sty.rowAc}>
                <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
                  <CAL_IC />
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.dateT}>Mon, 19 sept</Text>
                </View>
                <View style={sty.rowAc}>
                  <CLOCK_IC />
                  <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.dateT}>09:00 AM</Text>
                </View>
              </View>
              <View style={mSty.totalV}>
                <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.priceT}>$ 40</Text>
                <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.totalT}>Total Fare</Text>
              </View>
            </View>
            <View style={mSty.halfLine} />
            <View style={[sty.rowAc, { paddingHorizontal: 15, marginTop: 15 }]}>
              <FROM_IC />
              <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>St. Peter’s Park, downtown, New York</Text>
            </View>
            <PATH_IC style={{ paddingHorizontal: 30 }} />
            <View style={[sty.rowAc, { paddingHorizontal: 15 }]}>
              <LOCATION_IC_GREEN />
              <Text style={mSty.address} numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>Marry Church, New York</Text>
            </View>
          </Pressable>
        </View>
      }
    </SfView>
  )
}

export default MyTripsController;