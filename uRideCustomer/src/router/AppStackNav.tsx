import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { navOptions } from '~/common';
import { App_State } from '~/context/store';
import {
    AboutUsScr, ContactUsSrc, FAQSrc, InviteScr, ManageBankDetailScr, MyTripsScr, PaymentScr,
    PrivacyPolicyScr, ProfileScr, PromoCodeScr, RideDetailScr, RideFareScr, SetLocationScr,
    SignInScr, SignUpScr, SupportScr, TermsScr
} from '~/screens';
import { AppStack } from '~/utils';
import DrawerNav from './DrawerNav';

const AppStackNav = () => {
    const { _User } = useSelector((state: App_State) => state.AppReducer);

    return (
        <AppStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}>
            {_User?._id ?
                <>
                    <AppStack.Screen name="Home" component={DrawerNav} />
                    <AppStack.Screen name="Profile" component={ProfileScr} options={navOptions("My Profile")} />
                    <AppStack.Screen name="MyTrips" component={MyTripsScr} options={navOptions("My Trips")} />
                    <AppStack.Screen name="BankDetail" component={ManageBankDetailScr} options={navOptions("Manage Bank Details")} />
                    <AppStack.Screen name="Payment" component={PaymentScr} options={navOptions("Payment")} />
                    <AppStack.Screen name="Support" component={SupportScr} options={navOptions("Support")} />
                    <AppStack.Screen name="AboutUS" component={AboutUsScr} options={navOptions("About US")} />
                    <AppStack.Screen name="FAQ" component={FAQSrc} options={navOptions("FAQ")} />
                    <AppStack.Screen name="PrivacyPolicy" component={PrivacyPolicyScr} options={navOptions("Privacy Policy")} />
                    <AppStack.Screen name="TermsCondition" component={TermsScr} options={navOptions("Terms & Conditions")} />
                    <AppStack.Screen name="ContactUs" component={ContactUsSrc} options={navOptions("Contact Us")} />
                    <AppStack.Screen name="RideDetail" component={RideDetailScr} options={navOptions("Ride Details")} />
                    <AppStack.Screen name="Invite" component={InviteScr} options={navOptions("Invite Friends")} />
                    <AppStack.Screen name="PromoCode" component={PromoCodeScr} options={navOptions("Promo Code")} />
                    <AppStack.Screen name="SetLocation" component={SetLocationScr} options={navOptions("Set Locations")} />
                    <AppStack.Screen name="RideFare" component={RideFareScr} />
                </>
                :
                <>
                    <AppStack.Screen name="SignIn" component={SignInScr} />
                    <AppStack.Screen name="SignUp" component={SignUpScr} options={navOptions("Sign Up")} />
                </>
            }
        </AppStack.Navigator>
    )
}

export default AppStackNav;