import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import {data} from '../contants' ;
import {Header,Item} from '../components';


const D_D = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header Category={"Dejeuner\n&\nDiner"} 
       navigateback={() => navigation.navigate('BRUNCH')}
       navigateforward ={() => navigation.navigate('DESSERT')}
       gotopanier ={() => navigation.navigate('CONTENU_MENU')}
      />
      
      <FlatList
        data={data.Dejeuner_Diner}
        renderItem={({item}) => <Item id={item.id} name={item.name} image={item.image} price={item.price}/>}
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
    borderWidth: 1,
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
export default D_D;