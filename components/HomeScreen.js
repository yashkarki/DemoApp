import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {SliderData, squareCourseData} from './SliderData';
import SliderImage from './SliderImage';

const {height, width} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const renderSlider = ({item, index}) => {
    return <SliderImage data={item} />;
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', height: height}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.drawerButton}>
          <Image source={require('./Images/drawerIcon.png')} />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <View
        style={{
          marginTop: (32 / 844) * height,
          marginLeft: (16 / 390) * width,
        }}>
        <View style={styles.information}>
          <Text style={styles.firstHeading}>Intro to Stock Markets</Text>
          <Text style={styles.firstContent}>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
      <View>
        <Carousel
          data={SliderData}
          renderItem={renderSlider}
          sliderWidth={width}
          itemWidth={290}
          loop={true}
        />
        <View style={styles.information}>
          <Text style={styles.firstHeading}>Trading and Investing</Text>
          <Text style={styles.firstContent}>
            Lorem Ipsum is simply dummy text of the orinting and typesettting
            industry
          </Text>
        </View>
        <ScrollView horizontal>
          {squareCourseData.map((item, index) => (
            <View>
              <Image
                style={styles.squareImage}
                source={item.image}
                resizeMode="stretch"
              />
              <Text style={{flex: 1, textAlign: 'center'}}>Course 1</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.information}>
          <Text style={styles.firstHeading}>Equities, Futures and Options</Text>
          <Text style={styles.firstContent}>
            Lorem Ipsum is simply dummy text of the orinting and typesettting
            industry
          </Text>
        </View>
        <ScrollView horizontal>
          {squareCourseData.map((item, index) => (
            <View>
              <Image
                style={styles.squareImage}
                source={item.image}
                resizeMode="stretch"
              />
              <Text style={{flex: 1, textAlign: 'center'}}>Course 1</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  drawerButton: {
    height: (18 / 844) * height,
    width: (27 / 390) * width,
    marginTop: (33 / 844) * height,
    marginLeft: (20.5 / 390) * width,
  },
  searchBar: {
    height: (40 / 844) * height,
    width: (301 / 390) * width,
    marginTop: (22 / 844) * height,
    marginLeft: (21.5 / 390) * width,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 4,
    padding: (8 / 844) * height,
    fontSize: 16,
    letterSpacing: 0.15,
  },
  information: {
    height: (72 / 844) * height,
    width: (355 / 390) * width,
    padding: 1,
    backgroundColor: '#fff',
  },
  firstHeading: {
    fontSize: 22,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Rubik',
    lineHeight: 22,
    color: '#262626',
  },
  firstContent: {
    marginTop: (9 / 844) * height,
    color: '#262626',
    fontSize: 17,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
  },
  squareCourse: {},
  squareImage: {
    height: (255 / 844) * height,
    width: (255 / 390) * width,
    margin: (15 / 390) * width,
  },
});
