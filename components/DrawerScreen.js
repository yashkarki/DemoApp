import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomScreen from './BottomScreen';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Bottom"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: (286 / 390) * Dimensions.get('window').width,
          height: (768 / 844) * Dimensions.get('window').height,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Bottom" component={BottomScreen} />
    </Drawer.Navigator>
  );
}
