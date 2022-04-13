import React from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native'
const {height, width} = Dimensions.get('window');

export default function SliderImage({data}) {
    return (
      <View >
            <Image
                style={styles.slider}
                resizeMode='stretch'
                source={data.image} />
            
    </View>
  )
}
const styles = StyleSheet.create({
    slider: {
    borderRadius: 24,
    backgroundColor: '#A8A8A8',
    height: (340 / 844) * height,
    width: (273 / 390) * width, 
    borderWidth:1,  
   } 
})
