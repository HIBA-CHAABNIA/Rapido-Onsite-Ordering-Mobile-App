import React, { useState } from 'react';
import { Text,View,Image, StyleSheet,TouchableOpacity } from 'react-native';
import {couleurs,polices,images,icons} from '../contants' ;

const ISP = ({route,navigation}) => {
  const [compteur , setplus] = useState(1)
  
  const {
    id,
    name,
    image,
    price
  } = route.params;
  
  return (
  <View style={styles.contenaire}>
    <View style={styles.image_repas_view}>
      <Image style={styles.image_repas} 
      source={image}
      />
    </View>
    <View style={styles.nom_view}>
      <Text style={styles.nom}> {name} </Text>
    </View>
    <View style={styles.caratéristiques_view}>
      <View style={styles.left_section}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}> {compteur * price } DT</Text>
      </View>
      <View style={styles.right_section}>
        <TouchableOpacity onPress = {()=> {if (compteur > 1) {setplus (compteur - 1)}}}>
          <Image style={{height: 30, width: 30}}
          source={icons.moins}
          />
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}> {compteur} </Text>
        <TouchableOpacity onPress = {()=> {setplus (compteur + 1)}}>
          <Image style={{height: 30, width: 30}}
          source={icons.plus}
          />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.description_view}> 
      <Text style={{color: 'black', fontSize: 20}}> {'Description :\n\n\n\n Commentaire: '} <Text style={{fontSize: 16}}>{'(allergies, ajout ou suppression de ingrédients...) \n'} </Text> </Text>
    </View>
    <View style={styles.panier_button}>
      <TouchableOpacity style={styles.panier_bouton} onPress={() => navigation.navigate('PANIER')}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> Ajouter au panier </Text> 
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  contenaire: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  image_repas_view: {
    flex: 0.4,
    width: 360,
  },
  image_repas: {
    width: 360,
    height: 270,
    borderRadius: 40,
  },
  nom_view: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  nom: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold'
  },
  caratéristiques_view: {
    flex: 0.1,
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  left_section: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right_section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  description_view: {
    flex: 0.3,
    width: 300,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10
  },
  panier_button: {
    flex: 0.1,
  },
  panier_bouton: {
    backgroundColor: 'red',
    width: 200,
    height: 40,
    borderRadius: 60,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default ISP;