import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { View, StatusBar, Text, TextInput, TouchableWithoutFeedback, Alert, Platform } from 'react-native';
import { BACK_IC, CASH_IC, CLOCK_ICON, DRAWER_IC, LOCATION_DISTANCE, LOCATION_IC, PIN_IC, SEND_IC, TAXI_IC, USER_IC_W, WHEEL_CHAIR } from '~/common/assets/images';
import { BTN, CarSelectSwitch, IcSelectSwitch, Rating, SearchPulseEffect } from '~/components';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { RIPPLE_IcBTN, _COL, _HEIGHT, _WIDTH, RIPPLE_ICf3 } from '~/utils';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CarSelArr, PayTypeArr } from '~/utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { set_Ride_Mode } from '~/context/actions';
import { App_State } from '~/context/store';
import { mSty, sty } from '~/common/styles';
import { Pressable } from 'react-native';


const HomeController = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const safeAreaInsets = useSafeAreaInsets();
  const { rideMode } = useSelector((state: App_State) => state.AppReducer);

  const mapRef = useRef<MapView>(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [heading, setHeading] = useState(0);
  const [carType, setCarType] = useState(0);
  const [searching, setSearching] = useState(false);
  const [started, setStarted] = useState(false);
  const mapReadyRef = useRef(false);
  const [mapReady, setMapReady] = useState(false);
  const [rideProcess, setRideProcess] = useState(true);

  useEffect(() => {
    setLatitude(13.0317); setLongitude(80.21259);
  }, []);

  useEffect(() => {
    if (mapReady) {
      setTimeout(() => { mapRef.current?.animateCamera({ center: { "latitude": 13.033525 + 0.002, "longitude": 80.212425 }, zoom: 14.8 }, { duration: 700 }); }, 150);
    }
  }, [mapReady]);

  const onRide = () => {
    if (rideMode && !searching && !started) { setSearching(false); setStarted(true); }
    else { dispatch(set_Ride_Mode(false)); navigation.navigate('RideFare'); setStarted(false); setSearching(false); setRideProcess(true); }
  };

  const onReset = () => {
    Alert.alert('Exit?', 'Are you sure you want to exit?', [{
      text: 'Yes', onPress: () => {
        setStarted(false); setSearching(false);
        dispatch(set_Ride_Mode(false)); setRideProcess(true);
      }
    }, { text: 'No', onPress: () => { } }]);
  };

  useEffect(() => {
    if (rideMode && !searching && !started) {
      setTimeout(() => { setSearching(true); }, 600);
      setTimeout(() => { setSearching(false); setRideProcess(false) }, 10000);
    }
  }, [rideMode]);

  return (
    <View style={sty.ctrf1w100}>
      <StatusBar barStyle="dark-content" translucent backgroundColor={_COL.TRANSPARENT} />
      <MapView
        ref={mapRef}
        provider={Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 13.253186756119863,
          longitude: 80.44189615035938,
          latitudeDelta: 5,
          longitudeDelta: 0.5,
        }}
        mapPadding={{ ...safeAreaInsets, top: safeAreaInsets.top + 50 }}
        followsUserLocation
        scrollEnabled
        onMapReady={() => setMapReady(true)}
        userLocationCalloutEnabled
        showsBuildings
        showsMyLocationButton={false}
        showsIndoorLevelPicker
        showsIndoors
        showsPointsOfInterest
        loadingIndicatorColor='#666666'
        tintColor='#666666'
        showsScale
        showsCompass
        loadingEnabled
        userLocationAnnotationTitle='My Location'
        userLocationPriority="high"
        zoomEnabled
        pitchEnabled
        zoomTapEnabled
        scrollDuringRotateOrZoomEnabled
        paddingAdjustmentBehavior='automatic'
        rotateEnabled
        style={[sty.w100CtrBg, { height: "100%" }]}
      >
        <Marker key="1" tracksViewChanges={false} coordinate={{ latitude, longitude }} hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }} >
          <View style={[mSty.dCarIc, { transform: [{ rotate: `${heading}deg` }] }]}>
            <PIN_IC />
          </View>
        </Marker>
        <Marker key="2" tracksViewChanges={false}
          coordinate={{ latitude: 13.0435150, longitude: 80.212220 }}
          title="Driver #G3R" description="Ready for your ride!"
          flat >
          <TAXI_IC />
        </Marker>
      </MapView>

      {!rideMode &&
        (<>
          <View style={[sty.Row100Jsb, { position: "absolute", top: safeAreaInsets.top + 12 }]}>
            <Pressable style={mSty.drawerIc} android_ripple={RIPPLE_ICf3} onPress={() => { navigation?.openDrawer() }}>
              <DRAWER_IC />
            </Pressable>
            <View style={mSty.searchBar}>
              <View style={mSty.dot} />
              <TouchableWithoutFeedback onPress={() => navigation?.navigate('SetLocation')}>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Where to go?"
                    placeholderTextColor={_COL.CE}
                    style={mSty.searchIn}
                    editable={false}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <Pressable android_ripple={RIPPLE_IcBTN} style={[mSty.ownLoc, { bottom: safeAreaInsets.bottom + 90 }]} onPress={() => { Platform.OS === "ios" && navigation?.navigate('SetLocation') }}>
            <WHEEL_CHAIR width={_WIDTH * .07} height={_WIDTH * .07} />
          </Pressable>
          <Pressable android_ripple={RIPPLE_IcBTN} style={[mSty.ownLoc, { bottom: safeAreaInsets.bottom + 20 }]} onPress={() => {
            mapRef.current?.animateCamera({ center: { "latitude": latitude + 0.001, longitude }, zoom: 16.7 }, { duration: 700 })
          }}>
            <LOCATION_IC width={_WIDTH * .07} height={_WIDTH * .07} />
          </Pressable>
        </>)}

      {/* Overlays Componts */}
      {rideMode && !searching ?
        <>
          <View style={[sty.Row100Jsb, { position: "absolute", top: safeAreaInsets.top + 12 }]}>
            <Pressable style={mSty.drawerIc} onPress={onReset} android_ripple={RIPPLE_ICf3}>
              <BACK_IC />
            </Pressable>
          </View>

          {started ?
            <Animated.View key={1} entering={FadeInDown} style={mSty.ovMain}>
              <View style={sty.Row100Jsb}>
                <View style={sty.rowAc}>
                  <View style={mSty.userImg3}><USER_IC_W /></View>
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={mSty.onTxt}>Lisa Smith</Text>
                    <View style={sty.rowAc}>
                      <Rating star={4} height={20} starSize={17} />
                      <Text style={mSty.ratingCount}>(20)</Text>
                    </View>
                  </View>
                </View>
                <View style={mSty.totalV2}>
                  <View style={sty.rowAc}>
                    <View>
                      <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.priceT}>7 min</Text>
                      <Text numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false} style={mSty.totalT}>Arriving in</Text>
                    </View>
                    <CLOCK_ICON style={{ marginStart: 10 }} />
                  </View>
                </View>
              </View>
              <View style={[sty.Row100Jsb, { marginTop: 15 }]}>
                <BTN title="Call" vSty={{ width: '33.33%' }} onP={onRide} lColors={[_COL.PRIMARY, "#a2d89c"]} />
                <BTN title="Cancel" vSty={{ width: '33.33%' }} onP={onRide} lColors={["#a2d89c", "#89c8a5"]} />
                <BTN title="Share" vSty={{ width: '33.33%' }} onP={onRide} lColors={["#89c8a5", _COL.SECONDARY]} />
              </View>

              <View style={[mSty.smallLine, { bottom: safeAreaInsets.bottom + 16, right: _WIDTH * .33 - .75 }]} />
              <View style={[mSty.smallLine, { bottom: safeAreaInsets.bottom + 16, right: _WIDTH * .66 - .75 }]} />
            </Animated.View>
            :
            rideProcess ? <></> :
              <Animated.View key={1} entering={FadeInDown} style={mSty.ovMain}>
                <CarSelectSwitch
                  Data={CarSelArr}
                  val={carType}
                  onP={(e: SetStateAction<number>) => { setCarType(e); console.log(e) }}
                  height={90} />

                <View style={[sty.ctrRow100, { backgroundColor: _COL.F8 }]}>
                  <View style={[sty.rowAc, { width: "30%", marginStart: "5%" }]}>
                    <CASH_IC style={{ marginRight: 10 }} />
                    <View>
                      <Text style={mSty.ratingCount}>$ 21</Text>
                      <Text style={mSty.titleTxt}>Estimate Fare</Text>
                    </View>
                  </View>
                  <View style={mSty.lineC} />
                  <View style={[sty.rowAc, { width: "30%", marginStart: "0%" }]}>
                    <CLOCK_ICON style={{ marginRight: 10 }} />
                    <View>
                      <Text style={mSty.ratingCount}>7 min</Text>
                      <Text style={mSty.titleTxt}>Estimate Time</Text>
                    </View>
                  </View>
                  <View style={mSty.lineC} />
                  <View style={[sty.rowAc, { width: "30%", paddingStart: '0%' }]}>
                    <LOCATION_DISTANCE style={{ marginRight: 10 }} />
                    <View>
                      <Text style={mSty.ratingCount}>3 Km</Text>
                      <Text style={mSty.titleTxt}>Distance</Text>
                    </View>
                  </View>
                </View>

                <View style={[sty.Row100Jsb, { marginTop: 15 }]}>
                  <IcSelectSwitch Data={PayTypeArr} onP={undefined} height={50} />
                  <View style={mSty.promoInV}>
                    <TextInput
                      placeholder="Apply Promo Code"
                      placeholderTextColor={_COL.CE}
                      style={mSty.promoIn}
                    />
                    <Pressable android_ripple={RIPPLE_IcBTN}>
                      <SEND_IC style={{ margin: 13 }} />
                    </Pressable>
                  </View>
                </View>

                <View style={[sty.Row100Jsb, { marginTop: 15 }]}>
                  <BTN title="Schedule Ride" vSty={{ width: '50%' }} onP={onRide} lColors={[_COL.PRIMARY, "#95d0a0"]} />
                  <BTN title="Ride Now" vSty={{ width: '50%' }} onP={onRide} lColors={["#95d0a0", _COL.SECONDARY]} />
                </View>

                <View style={[mSty.smallLine, { bottom: safeAreaInsets.bottom + 16 }]} />
              </Animated.View>
          }
        </>
        : <></>
      }
      {searching && rideMode ? <SearchPulseEffect /> : <></>}
    </View>
  )
}

export default HomeController;