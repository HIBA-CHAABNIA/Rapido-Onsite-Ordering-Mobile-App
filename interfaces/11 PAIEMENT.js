import React from 'react';
import { Text,View,Image, StyleSheet,TouchableOpacity } from 'react-native';
import { polices } from '../contants';

const PAIEMENT = ({navigation}) => {
  return (
    <View style={styles.contenaire}>
      <View style={styles.contenaire_inter}>
        <View style={styles.contenaire_texte}>
          <Text style={styles.texte}> {'Choisir votre mode de paiement'} </Text>    
        </View>
        
        <View style={styles.contenaire_bouton}>
          <TouchableOpacity style={styles.bouton} onPress={() => navigation.navigate('SATISFACTION_CLIENT')}> 
            <Text style={styles.bouton_texte}> En espèces </Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.contenaire_bouton}>
          <TouchableOpacity style={styles.bouton} onPress={() => navigation.navigate('SATISFACTION_CLIENT')}> 
            <Text style={styles.bouton_texte}> Carte bancaire </Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.contenaire_bouton}>
          <TouchableOpacity style={styles.bouton} onPress={() => navigation.navigate('SATISFACTION_CLIENT')}> 
            <Text style={styles.bouton_texte}> Chèque </Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.contenaire_bouton}>
          <TouchableOpacity style={styles.bouton} onPress={() => navigation.navigate('SATISFACTION_CLIENT')}> 
            <Text style={styles.bouton_texte}> Ticket restaurant </Text> 
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenaire: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contenaire_inter: {
    flex: 0.8,
    width: 500,
    borderRadius: 250,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  contenaire_texte: {
    flex: 0.4,
    width: 230,
    marginTop: 30,
    marginBottom: 40,
  },
  texte: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40 ,
    fontWeight: "bold",
  },
  contenaire_bouton: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
    width: 250,
    borderRadius: 60,
    marginBottom: 30,
  },
  bouton_texte: {
    fontSize: 20,
    fontWeight: "bold",
 },
});
export default PAIEMENT;