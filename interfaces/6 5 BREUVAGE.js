import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import {couleurs,polices,images,icons,data} from '../contants' ;
import {Header,Item} from '../components';


const BREUVAGE = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header Category={"Breuvage"} 
       navigateback={() => navigation.navigate('DESSERT')}
       navigateforward ={() => navigation.navigate('PETIT_DEJEUNER')}
       gotopanier ={() => navigation.navigate('CONTENU_MENU')}  />

   
       <FlatList
        data={data.Breuvage}
        renderItem={({item}) => <Item id={item.id} name={item.name} image={item.image} price={item.price} />}
        keyExtractor={item => item.id}
        />


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
  itemview: {
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
  item:{
    height: 70,
    width: 220,
    borderRadius: 35,
    borderWidth: 0.5,
    borderColor: 'grey',
    marginTop: -40,
    alignItems: 'center'
  },
  name: {
    color: 'black',
    fontSize: 15,
    marginTop: 42
  },

});
export default BREUVAGE;