import React from 'react';
import { Text,View,Image,StyleSheet,TouchableOpacity,} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

const Item = ({id,name,image,price}) => (
  <View style={styles.itemview}>
    <TouchableOpacity>
      <Image style={styles.image} source={image}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate("ISP",{id:id,name:name,image:image,price:price})}>
      <View style={styles.item}>
        <Text style={styles.name}> {name} </Text>
      </View>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
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
  export default Item;