import React from 'react';
import { Text,View,Image,StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import {couleurs,polices,icons,data} from '../contants' ;

const {width} = Dimensions.get('window');

const Header = ({Category,navigateback,navigateforward,gotopanier})  => {
  return (
    
      <View style={styles.Header}>
        <View style={{flexDirection:'row',height: (width+70)/2 ,top:(width/4)-10}}>

         <View style={{flex:0.2}}>
            <View style={{flex:0.3}}></View>
            <View style={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
             <TouchableOpacity onPress={() => navigateback()}>
              <Image source={icons.arrow_back} />
             </TouchableOpacity>
            </View>
            <View style={{flex:0.4}}></View>
         </View>


         <View style={{flex:0.6}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.8,alignItems:'center',justifyContent:'center'}}>
              <Text style={styles.text}>{Category}</Text>
            </View>
            <View style={{flex:0.15,alignItems:'center',justifyContent:'center'}}>
             <TouchableOpacity onPress={() => gotopanier()}>
              <Image source={icons.menu} />
             </TouchableOpacity>
            </View>
         </View>

        
         <View style={{flex:0.2}}>
            <View style={{flex:0.3}}></View>
            <View style={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
             <TouchableOpacity onPress={() => navigateforward()}>
              <Image source={icons.arrow_forward} />
             </TouchableOpacity>
            </View>
            <View style={{flex:0.4}}></View>
         </View>

        </View>
      </View>
    
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1
 },
  Header:{
    backgroundColor: "#F60109",
    height: (width+70),
    width: (width),
    borderRadius: (width/2),
    marginTop: -(width/2),
    justifyContent: 'center',
    alignItems: 'center',
  },  
  text:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily:polices.BELLANIA,
    textAlign:'center'
  },

});
export default Header;