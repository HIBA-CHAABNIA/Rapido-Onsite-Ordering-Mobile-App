import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image ,TouchableOpacity,SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import {couleurs,polices,images,icons} from '../contants' ;


const { height, width } = Dimensions.get('window');

export default function MESSAGE({navigation}) {
  const animation = useRef(null);
  useEffect(() => { }, []);

  return (
<SafeAreaView style={styles.container}>

    {/*Le panier*/}
<View style={styles.panier}>
  <TouchableOpacity>
    <Image source={icons.menu} style={{width:45,height:45}} ></Image>
  </TouchableOpacity>
</View>

    {/*Le checkmark*/}

<View style={styles.checkmark}>
 <LottieView
      autoPlay
      ref={animation}
      style={{width:(width*0.9),height:(width*0.9)}}
      source={images.lottie }
  />
</View>

    {/*le message*/}
<View style={styles.message}>
  <Text style={styles.messagetext}>VOTRE COMMANDE EST CONFIRMÉE</Text>
</View>

<View style={{flex: 2,justifyContent: 'center',alignItems: 'center'}}/>

{/* BOUTON PAYER */}
<View style={styles.bouton}>
 <TouchableOpacity style={{backgroundColor: '#F7BF24',width: '75%',height: '45%',borderRadius: 80,justifyContent: 'center',alignItems: 'center',}} onPress={() => navigation.navigate('PAIEMENT')}>
    <Text style={{color: 'white', fontSize: 25,fontFamily:polices.POPPINS_SEMI_BOLD }}>PAYER</Text>
 </TouchableOpacity>
</View>

</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
   
  },
  panier: {
    height:((height/10)*1.2),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkmark: {
    alignItems: 'center',
    justifyContent: 'center',
    height:((height/10)*6*0.95),

  },
  message: {
    height:(height/10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bouton: {
    height:((height/10)*1.7),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
   messagetext: {
    fontSize:18,
    fontFamily: polices.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    textAlign: 'right',
    color:couleurs.RED,
    marginVertical: 3

  },
});