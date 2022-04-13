import { NavigationContainer } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, TextInput, Text, StyleSheet, Dimensions, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { NavigationContainer } from '@react-navigation/native';

const {height, width}=Dimensions.get("window")
export default function LoginScreen({navigation}) {
  
const [phone, setPhone] = React.useState('');
  return (
    
  <View
    style={styles.all}>
      
    <Image 
    style={styles.logo}
    source={require('./Images/Stocklogo.png')}/>
    <Image 
    style={styles.centerImage}
    source={require('./Images/mainloginimage.jpeg')}
    resizeMode="stretch" />
    
    <Text
    style={styles.loginText}>Login</Text>
    <Text
    style={styles.phoneText}>Phone no.</Text>

    <TextInput 
    placeholder="Enter 10 digit mobile no."
    keyboardType="number-pad"
    maxLength={10}
    style={styles.inputNumber}
    onChangeText={text => setPhone(text)}
    />
   
    <TouchableOpacity
    disabled={phone.length === 10 ? false : true}
    style={phone.length === 10 ? styles.enableButton : styles.loginButton}
    onPress={() => navigation.push('Otp', phone)}
   >
    <Text>Login</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    style={styles.loginButtons}>
        <Image 
        style={styles.googleLogo}
        source={require('./Images/googlelogo.png')}
        />
        <Text>Login with Google</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.loginButtons}>
        <Image
        style={styles.appleLogo}
        source={require('./Images/applelogo.png')}
        resizeMode="stretch"
        />
        <Text>Login with Apple ID</Text>
    </TouchableOpacity>
    <View style={{flex: 1, flexDirection:'row'}}>
    <Text style={styles.text}>New on Kuants?</Text>
    <TouchableOpacity>
        <Text style={styles.Signup}>Signup</Text>
    </TouchableOpacity>
    </View>
    </View>
  
  )
}
const styles=StyleSheet.create({
all:{
  height: height, 
  width: width,
  backgroundColor: 'white'
},
logo: {
  marginTop: (61 / 844) * height,
  height: (44 / 844) * height,
  width: (88 / 390) * width,
  marginLeft: (151 / 390) * width,
},
centerImage: {
  height: (194 / 844) * height,
    width: (303 / 390) * width,
    marginTop: (40 / 844) * height,
    marginLeft: (41 / 390) * width,
},


loginText: {
  marginTop: (77 / 844) * height,
  marginLeft: (26 / 390) * width,
  fontSize: 24,
  lineHeight: 28,
  color: '#333333',
  fontFamily: 'Rubik',
  fontWeight: '500',
  fontStyle: 'normal',
  opacity: 0.8,
},
phoneText: {
  marginTop: (35 / 844) * height,
  marginLeft: (26 / 390) * width,
  fontSize: 14,
  lineHeight: 18,
  fontFamily: 'Rubik',
  fontWeight: '400',
  fontStyle: 'normal',
  color: '#333333',
  opacity: 0.8,
  
},
inputNumber:{
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    paddingBottom: -30,
    opacity: 0.5,
    width: (342 / 390) * width,
    marginLeft: (24 / 390) * width,
    marginBottom: (32 / 844) * height,
  
  },
loginButton: {
    height: (48 / 844) * height,
    width: (342 / 390) * width,
    backgroundColor: '#D6D6D6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: (24 / 390) * width,
    marginBottom: (16 / 844) * height,

    borderRadius: 8,
  },
  enableButton: {
    height: (48 / 844) * height,
    width: (342 / 390) * width,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: (24 / 390) * width,
    marginBottom: (16 / 844) * height,
    borderRadius: 8,
  },
loginButtons:{
    position: 'relative',
    height: (48 / 844) * height,
    width: (342 / 390) * width,
    marginBottom: (16 / 844) * height,
    marginLeft: (24 / 390) * width,
    backgroundColor: '#fff',
    borderColor: '#666666',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
},  
appleLogo: {
    position: 'absolute',
    height: (30 / 844) * height,
    width: (21 / 309) * width,
    left: 10,
  },
  googleLogo: {
    position: 'absolute',
    height: (30 / 844) * height,
    width: (21 / 309) * width,
    left: 10,
  },
  text: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
    opacity: 0.8,
    lineHeight: 18,
    marginTop: (24 / 844) * height,
    marginLeft: (100 / 390) * width,
  },
 Signup: {
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
    opacity: 0.8,
    lineHeight: 18,
    marginTop: (24 / 844) * height,
    marginLeft: (2 / 390) * width,
    color: '#2775EB',
 }
})
