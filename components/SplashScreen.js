import React from 'react'
import {Image, View, StyleSheet, ImageBackground, Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import Stocklogo from './Images/Stocklogo.png'
const {height, width}=Dimensions.get("window");
export default function SplashScreen({navigation}) {
  
  setTimeout(()=>{
   navigation.replace('Login');
  },3000)
  return (
    <View>
      <ImageBackground
      style={styles.background}
      source={require('./Images/SplashScreenBackground.jpeg')}>
        <Image 
        style={styles.logo}
        source={require('./Images/Stocklogo.png')}
        resizeMode="stretch"
        />
        </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
logo:{
height: 58/844*height,
width: 117/390*width,
marginLeft: 136/390*width,
marginTop: 393/844*height,
},
background: {
height: '100%',
width: '100%',
}
})