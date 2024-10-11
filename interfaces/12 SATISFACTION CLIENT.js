import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import {couleurs,polices,images,icons} from '../contants';


const SATISFACTION_CLIENT = ({navigation}) => {
  
  const [defaultRating, setDefaultRating] = useState(0);
  
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };


  const [text, onChangetext] = React.useState(null);


  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:2,justifyContent: 'center',alignItems: 'center',flexDirection: 'row',alignItems: 'center'}}>
         <Text style={styles.text1}>Notez votre expérience</Text>
      </View>

      {/*LES ETOILES*/}

      <View style={styles.starsview}>
        <CustomRatingBar />
        <Text style={styles.textStyle}> </Text>
      </View>

  {/*ZONE DE COMMENTAIRES*/}
  <View style={[{flex :3,flexDirection: "row",justifyContent: 'center',alignItems: 'center',}]}>
    <View style={{borderColor:couleurs.YELLOW,borderWidth: 1.2,borderRadius: 40,height: '80%',width: '80%',justifyContent: 'center',alignItems: 'center'}}>
      <TextInput
        onChangeText={onChangetext}
        value={text}
        placeholder="laissez un commentaire"
        keyboardType="default"
      />
    </View>
  </View>

  {/* ZONE BOUTONS SORTIE MENU  */}
  <View style={{flex: 2,flexDirection: "row",justifyContent: 'center', alignItems: 'center',}}>
    <TouchableOpacity onPress={() => navigation.navigate('CONTENU_MENU')}>
      <View style={{ flex: 0.2}}>
         <Image source={icons.MENU} style={styles.tinyLogo}></Image>
      </View>
    </TouchableOpacity>
       
    <View style={{ backgroundColor: "red", flex: 0.9 }} />

    <TouchableOpacity>
      <View style={{ flex: 0.2 }}>
        <Image source={icons.exit} style={styles.tinyLogo}></Image>
      </View>
    </TouchableOpacity>
      
    
  </View>
</SafeAreaView>
  );
};

export default SATISFACTION_CLIENT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text1: {
    fontSize: 34,
    fontFamily:polices.PACIFICO_REGULAR,
    fontWeight:'italic',
    textAlign: 'center',
    marginVertical: 8,
    color:couleurs.RED,
  },
  starsview: {
    flex: 5,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});