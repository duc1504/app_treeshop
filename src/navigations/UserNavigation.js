import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const UserNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='SignUp' component={SignUp} />
   </Stack.Navigator>
  )
}

export default UserNavigation



