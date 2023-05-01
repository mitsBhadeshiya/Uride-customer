import React, { memo } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { MAIL_IC, COUPON_IC, HELP_CIRCLE_IC, LOGOUT_IC, LOGO_M_IC, PAYMENT_IC, REFRESH_IC, USER_IC_W } from '~/common/assets/images';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerActions } from '@react-navigation/native';
import { reset_State } from '~/context/actions';
import { mSty, sty } from '~/common/styles';
import { useDispatch } from 'react-redux';
import { FONT, _COL } from '~/utils';
import { HomeScr } from '~/screens';



const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());

    const onLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Yes', onPress: () => dispatch(reset_State()) },
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
        ], { cancelable: false },
        );
    }

    function DrawerContent(props: DrawerContentComponentProps) {
        return (
            <LinearGradient colors={[_COL.DARK_SEAFOAM_GREEN2, _COL.DARK_SEAFOAM_GREEN3]} style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <Pressable style={[sty.ctr, { padding: 10 }]}>
                        <LOGO_M_IC style={{ marginVertical: 15 }} />
                        <Text style={mSty.dTitle}>U-RIDE</Text>
                        <Text style={mSty.dSubTitle}></Text>
                        {/* <View>
                        <Text style={mSty.dSubTitle}>Customer</Text>
                        </View> */}
                    </Pressable>
                    {/* <DrawerItemList {...props} /> */}
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"My Profile"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('Profile') }}
                        icon={({ size }) => <USER_IC_W height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"My Trips"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('MyTrips') }}
                        icon={({ size }) => <REFRESH_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Payment"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('Payment') }}
                        icon={({ size }) => <PAYMENT_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Invite Friends"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('Invite') }}
                        icon={({ size }) => <MAIL_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Promo Code"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('PromoCode') }}
                        icon={({ size }) => <COUPON_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Support"}
                        labelStyle={mSty.dlable}
                        onPress={() => { navigation?.navigate('Support') }}
                        icon={({ size }) => <HELP_CIRCLE_IC height={size} width={size} />}
                    />
                    <View style={mSty.dLine} />
                    <DrawerItem
                        pressColor={_COL.WHITE01} label={"Logout"}
                        labelStyle={mSty.dlable}
                        onPress={() => { closeDrawer(), onLogout() }}
                        icon={({ size }) => <LOGOUT_IC height={size} width={size} />}
                    />
                </DrawerContentScrollView>
                <Text style={mSty.vTxt}>V  1.0</Text>
            </LinearGradient>
        );
    }



    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, overlayColor: _COL.CLOUDY_BLUE04, drawerStatusBarAnimation: "fade",
                drawerLabelStyle: { color: _COL.DARK_NAVY_BLUE, fontFamily: FONT.SEMI_BOLD },
                drawerActiveTintColor: _COL.PRIMARY01, drawerActiveBackgroundColor: _COL.PRIMARY01, drawerType: "front",
            }} useLegacyImplementation={false}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="MapMenu" options={{ drawerLabel: "Map" }} component={HomeScr} />
        </Drawer.Navigator>
    )
}

export default memo(DrawerNav);