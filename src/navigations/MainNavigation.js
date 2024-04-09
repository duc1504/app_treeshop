import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import Search from '../screens/Search';
import DetailProduct from '../screens/DetailProduct';
import Cart from '../screens/Cart';
import UpdateProfile from '../screens/UpdateProfile';
import CartHistory from '../screens/CartHistory';
import AllProduct from '../screens/AllProduct';
import EditProfile from '../screens/EditProfile';
import Payment from '../screens/Payment';
import HistoryOrder from '../screens/HistoryOrder';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={-30}>
            <Tab.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                }
            }}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => <Image source={focused ? require('../images/homeS.png') : require('../images/home.png')} />
                }} />
                <Tab.Screen name='Search' component={Search} options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => <Image source={focused ? require('../images/findS.png') : require('../images/find.png')} />
                }} />
                <Tab.Screen name='Notification' component={Notification} options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => <Image source={focused ? require('../images/notifyS.png') : require('../images/notify.png')} />
                }} />
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => <Image source={focused ? require('../images/profileS.png') : require('../images/profile.png')} />
                }} />
                {/* <Tab.Screen name='AllProduct' component={AllProduct} options={{ tabBarVisible: false }} /> */}
            </Tab.Navigator>
        </KeyboardAvoidingView>
    )
}

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
            <Stack.Screen name="CartHistory" component={CartHistory} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="AllProduct" component={AllProduct} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="HistoryOrder" component={HistoryOrder} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export default MainNavigation
