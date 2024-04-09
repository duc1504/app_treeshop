import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppNavigation from './src/navigations/AppNavigation';
// import Provider và store, khởi tạo Provider để truy cập state
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './src/redux/Store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    // xử dụng Provider để truy cập state
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar />
        <SafeAreaView style={{flex: 1}}>
          <AppNavigation />
          {/* <Login/> */}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
// <NavigationContainer>
// <Stack.Navigator >
// <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
// <Stack.Screen name="BottomTab" component={BottomTab}  options={{ headerShown: false }}/>
// <Stack.Screen name="AllProduct" component={AllProduct}  options={{ headerShown: false }} />
// <Stack.Screen name="DetailProduct" component={DetailProduct}   options={{ headerShown: false }}/>
// <Stack.Screen name="Search" component={Search}   options={{ headerShown: false }}/>
// <Stack.Screen name="SignUp" component={SigUp}  options={{ headerShown: false }} />
// </Stack.Navigator>
// </NavigationContainer>
