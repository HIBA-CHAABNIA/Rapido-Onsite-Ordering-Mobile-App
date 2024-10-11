import React from 'react';
import { Text,View,Image, StyleSheet,TouchableOpacity } from 'react-native';
import {couleurs,polices,images} from '../contants' ;

const CONTENU_MENU = ({navigation}) => {
  return (
  <View style={styles.container}>
    <View style={styles.view}>
      <Image style={styles.image} source={images.petit_dejeuner} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PETIT_DEJEUNER')}> 
        <Text style={styles.texte}>       PETIT DEJEUNER </Text>      
      </TouchableOpacity>
    </View>
    
    <View style={styles.view}>
      <Image style={styles.image} source={images.brunch}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BRUNCH')}> 
        <Text style={styles.texte}>     BRUNCH </Text> 
      </TouchableOpacity>
    </View>

    <View style={styles.view}>
      <Image style={styles.image} source={images.dejeunerdiner}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('D_D')}> 
        <Text style={styles.texte}>        DEJEUNER/DINNER </Text> 
      </TouchableOpacity>
    </View>

    <View style={styles.view}>
      <Image style={styles.image} source={images.dessert}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DESSERT')}> 
        <Text style={styles.texte}>      DESSERT </Text> 
      </TouchableOpacity>
    </View>

    <View style={styles.view}>
      <Image style={styles.image} source={images.breuvage}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BREUVAGE')}> 
        <Text style={styles.texte}>       BREUVAGE </Text> 
      </TouchableOpacity>
    </View>
</View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
  },
  view:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 200,
    borderRadius: 60,
    borderColor: couleurs.RED,
    borderWidth: 1,
    marginLeft: -40
  },
  image:{
    height: 80,
    width: 80,
    borderRadius: 60,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    elevation: 1
  },
  texte:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  }
});
export default CONTENU_MENU; 