import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const {height, width} = Dimensions.get('window');
function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}
function OrderScreen() {
  return (
    <View>
      <Text>Order Screen</Text>
    </View>
  );
}
function WalletScreen() {
  return (
    <View>
      <Text>Wallet Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function BottomScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 18,
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: 'red',
      }}
      tabBarOptions={{
        showLabel: false,
        tabBarLabelStyle: {
          position: 'absolute',
          width: width,
          height: (200 / 844) * height,
          opacity: 0.1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('/Users/apple/Desktop/Demo/components/Images/homelogo.png')}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('./Images/settingslogo.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('./Images/order.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('./Images/wallet.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  logo: {
    height: (45 / 844) * height,
    width: (54 / 390) * width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
