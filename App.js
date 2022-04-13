import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import OtpScreen from './components/OtpScreen';
import DrawerScreen from './components/DrawerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
