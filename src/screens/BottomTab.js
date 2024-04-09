import { Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Proflie from './Proflie';
import Notification from './Notification';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
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
          <Tab.Screen name='Proflie' component={Proflie} options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => <Image source={focused ? require('../images/profileS.png') : require('../images/profile.png')} />
          }} />
        </Tab.Navigator>
      )
}

export default BottomTab;
