import React from 'react';
import { Text,View,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native';
import {couleurs,polices,images,icons} from '../contants' ;

const SM_BP = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.food_name_view}>
        <View style={styles.food_name_under_view}>
          <Text style={styles.text}> Dejeuner </Text>
          <View style={styles.flèches_view}>
            <TouchableOpacity>
              <Image
            source={icons.arrow_back}/>
            </TouchableOpacity>
            <Text style={styles.text}> & </Text>
            <TouchableOpacity>
              <Image source={icons.arrow_forward}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}> Dîner </Text>
          <TouchableOpacity>
            <Image source={icons.menu}/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.element_container}>
          <TouchableOpacity>
            <Image style={styles.image}
            source={images.couscous}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.element_text}> Couscous au poulpe </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.element_container}>
          <TouchableOpacity>
            <Image style={styles.image}
            source={images.couscous}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.element_text}> Couscous au poulpe </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.element_container}>
          <TouchableOpacity>
            <Image style={styles.image}
            source={images.couscous}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.element_text}> Couscous au poulpe </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.element_container}>
          <TouchableOpacity>
            <Image style={styles.image}
            source={images.couscous}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.element_text}> Couscous au poulpe </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.element_container}>
          <TouchableOpacity>
            <Image style={styles.image}
            source={images.couscous}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.element_text}> Couscous au poulpe </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.element_container}>
          <TouchableOpacity>
            <Image style={styles.image}
            source={images.couscous}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.element_text}> Couscous au poulpe </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.element_container}>
          <TouchableOpacity>
            <Image style={styles.image}
            source={images.couscous}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.element_text}> Couscous au poulpe </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style= {{alignItems: 'center'}}>
        <TouchableOpacity style={styles.panier_button} onPress={() => navigation.navigate('PANIER')}>
          <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}> Voir panier </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1
 },
  food_name_view:{
    backgroundColor: "#F60109",
    height: 450,
    width: 400,
    borderRadius: 225,
    marginTop: -200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  food_name_under_view:{
    marginBottom: -170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flèches_view: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  element_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 42.5,
    borderColor: 'grey',
    borderWidth: 0.5
  },
  text_view:{
    height: 70,
    width: 220,
    borderRadius: 35,
    borderWidth: 0.5,
    borderColor: 'grey',
    marginTop: -40,
    alignItems: 'center'
  },
  element_text: {
    color: 'black',
    fontSize: 15,
    marginTop: 42
  },
  panier_button: {
    backgroundColor: "#F60109",
    height: 50,
    width: 300,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default SM_BP;