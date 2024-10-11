import React from 'react';
import {View, Image, StyleSheet,ActivityIndicator,Text} from 'react-native';
import {images} from '../contants' ;


const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    backgroundColor:'white'
  },
  tinyLogo: {
    width: 400,
    height: 300,
  
  },title: {
    textAlign: 'center'
    ,fontWeight: 'bold',fontSize: 25,lineHeight: 700,
  },
});
const SPLASH_SCREEN = ({navigation}) => {
  setTimeout (() => {
    navigation.navigate('QR_PIN')
  }, 3000);
  return (
    <View style={styles.container }>
      <Image style={styles.tinyLogo} source={images.logo}/>
      <Text style={styles.title}/>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};
export default SPLASH_SCREEN;