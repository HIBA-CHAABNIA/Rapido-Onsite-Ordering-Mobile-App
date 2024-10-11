import React from 'react';
import {StyleSheet,Text,View, Image,TouchableOpacity,VirtualizedList} from 'react-native';
import {couleurs,polices,images,icons} from '../contants';


const DATA = [];
const price= 9;

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: `Item ${index+1}`
});

const getItemCount = (data) => 50;

const Item = ({ name,prix }) => (
  <View style={styles.item}>
    <View style={{flex:0.3}}>
      <Image style={styles.image} source={images.couscous}/>
    </View>
    <View style={{flex:0.6 ,justifyContent: 'center',alignContent: 'center'}}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.name}>{price}dt</Text>
    </View>
    <View style={{flex:0.1,justifyContent: 'center',alignContent: 'center'}}>
     <TouchableOpacity>
              <Image style={styles.imagedelete} source={icons.bdelete} />
     </TouchableOpacity>
    </View>
  </View>
);


const PANIER = ({navigation}) => (
<View style={styles.container}>
  <View style={{flex:3,justifyContent: 'center',alignItems: 'center',flexDirection: 'row',alignItems: 'center',}}>
    <Text style={styles.monpanier}>Mon panier</Text>
  </View>

      {/*LES ARTICLES*/}

  <View style={{flex: 16,justifyContent: 'center',alignItems: 'center',}}>

    {/*LA FONCTION DE L'AJOUT DES ARTICLES*/}

       <VirtualizedList
        data={DATA}
        initialNumToRender={3}
        renderItem={({ item }) => <Item name={item.name} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
        style={styles.scrollView}
      />

    
  </View>

      {/*BOUTON AJOUTER AU PANIER*/}

  <View style={{flex: 3,alignItems: 'center',justifyContent: 'center',}}>
     <TouchableOpacity style={{backgroundColor:couleurs.RED,width: '70%',height: '50%',borderRadius: 20,justifyContent: 'center',alignItems: 'center',}} onPress={() => navigation.navigate('SM_BP')}>
        <Text style={{color: 'white', fontSize: 25, fontWeight:'bold'}}>AJOUTER AU PANIER</Text>
      </TouchableOpacity>
  </View>

      {/*TOTAL*/}

  <View style={{flex: 2, flexDirection: "row",justifyContent: 'center',alignItems: 'center',borderColor: 'gris',borderWidth: 1,}} >
      <View style={{ flex: 0.4 }}>
         <Text style={styles.total}>    Total</Text>
      </View>
       
      <View style={{flex: 0.2 }} />

      <View style={{ flex: 0.4 }}>
       <Text style={styles.prix}>{price*50}</Text>
      </View>
  </View>

      

      {/* BOUTON COMMANDER */}
  <View style={{flex: 3,alignItems: 'center',justifyContent: 'center',}}>
    <TouchableOpacity 
     style={{backgroundColor: '#F7BF24',width: '70%',height: '55%',borderRadius: 80,justifyContent: 'center',alignItems: 'center',}}
     onPress={() => navigation.navigate('MESSAGE')}
     >
      <Text style={{color: 'white', fontSize: 25,fontStyle:'italic' }}>COMMANDER</Text>
    </TouchableOpacity>
  </View>

</View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
   
  },
  monpanier: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
    color: couleurs.RED,
    fontFamily:polices.PACIFICO_REGULAR

  },
  total: {
    fontSize: 20,
    fontFamily:polices.PACIFICO_REGULAR,
    lineHeight: 20 * 1.4,
    textAlign: 'left',
    color:'#000000',
    marginVertical: 3

  },
  prix: {
    fontSize: 20,
    fontFamily:'ariel black',
    lineHeight: 20 * 1.4,
    textAlign: 'right',
    color:'#000000',
    marginVertical: 3

  },
  scrollView: {
    marginHorizontal: 20,
    width: '90%',
    height: '40%',
  },
  item: {
    backgroundColor: couleurs.WHITE,
    height: 100,
    borderRadius: 40,
    borderColor: 'grey' ,
    borderWidth :1,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    flexDirection:"row"
  },
  text: {
    fontSize: 20,
    fontFamily:'ariel black',
    lineHeight: 20 * 1.4,
    textAlign: 'right',
    color:'#000000',
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: 'grey',
    borderWidth: 0.5
  },
  imagedelete: {
    height: 30,
    width: 30,
  },

});

export default PANIER;