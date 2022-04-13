import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const CustomDrawer = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.profile}>Profile</Text>
        <View style={styles.circle}></View>
        <Text style={styles.Name}>Full Name</Text>
      </View>
      <View style={styles.options}>
        <Text style={styles.optionText}>Option 1</Text>
        <Text style={styles.optionText}>Option 2</Text>
        <Text style={styles.optionText}>Option 3</Text>
        <Text style={styles.optionText}>Option 4</Text>
        <Text style={styles.optionText}>Option 5</Text>
        <Text style={styles.optionText}>Option 6</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {},
  profile: {
    width: (62 / 390) * width,
    height: (18 / 844) * height,
    marginTop: (58 / 844) * height,
    marginLeft: (112 / 390) * width,
    fontFamily: 'rubik',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 18,
    color: '#262626',
  },
  circle: {
    width: (80 / 844) * height,
    height: (80 / 844) * height,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: (103 / 390) * width,
    marginTop: (16 / 844) * height,
  },
  camera: {},
  Name: {
    width: (73 / 390) * width,
    height: (18 / 844) * height,
    marginTop: (19 / 844) * height,
    marginLeft: (107 / 390) * width,
    fontFamily: 'rubik',
    fontSize: 16,
    lineHeight: 18,
    color: '#262626',
  },
  options: {
    height: (288 / 844) * height,
    width: (238 / 390) * width,
    marginTop: (32 / 844) * height,
    marginLeft: (34 / 390) * width,
  },
  optionText: {
    fontSize: 16,
    lineHeight: 48,
    fontFamily: 'rubik',
    fontWeight: '600',
    color: '#262626',
  },
});
export default CustomDrawer;
