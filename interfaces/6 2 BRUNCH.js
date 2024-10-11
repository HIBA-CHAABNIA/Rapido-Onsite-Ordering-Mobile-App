import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import {data} from '../contants' ;
import {Header,Item} from '../components';


const BRUNCH = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header Category={"Brunch"} 
       navigateback={() => navigation.navigate('PETIT_DEJEUNER')}
       navigateforward ={() => navigation.navigate('D_D')}
       gotopanier ={() => navigation.navigate('CONTENU_MENU')}  />

       <FlatList
        data={data.Brunch}
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
export default BRUNCH;