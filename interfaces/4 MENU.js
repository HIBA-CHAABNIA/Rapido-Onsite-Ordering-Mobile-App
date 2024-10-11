import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image ,TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { LinearGradient as Gradient } from 'react-native-linear-gradient';
import { polices } from '../contants';


const { height, width } = Dimensions.get('window');

const MENU = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={{flex:3,top:-18}}>
       <Svg width={width} height={width} viewBox="0 0 375 340">
             <Defs>
              <LinearGradient x1="90.743%" y1="87.641%" x2="10.14%" y2="3.465%" id="prefix__a">
                <Stop stopColor="#f7bf24" offset="0%" />
                <Stop stopColor="#f60109" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path
              d="M.11-2H376c-.005 204.081-.005 306.134 0 306.158-95.114 82-135.593-8.28-188-16.789C98.06 266.778 51.482 346.402.11 262.41-.037 251.212-.037 163.075.11-2z"
              fill="url(#prefix__a)"
              fillRule="evenodd"
              
            />
       </Svg>
      </View>
      <View style={styles.menuview}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.MENUTEXT}>Menu</Text>
          </View>
      </View>
      <View style={{flex:2}}></View>


      <View style={{flex:1}}>
       <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.accesstomenubuttom, { flexDirection: 'row', marginTop: 10 }]}
            onPress={() => navigation.navigate('CONTENU_MENU')}>
            <Text style={styles.accesstomenubuttomText}>Que voulez vous manger</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

export default MENU;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MENUTEXT: {
    fontSize: 64,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 2,
    fontFamily: polices.PACIFICO_REGULAR,

  },
  menuview: {
    alignItems:'center',
    position: 'absolute',
    top: (width/3)-30,
    right:(width/6),
    width: (width / 100) * 65,
    height: (width / 100) * 30,
  },
  accesstomenubuttom: {
    width: (width / 100) * 90,
    height: 56,
    margin: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F60109',
    backgroundColor: '#F60109',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F60109',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  accesstomenubuttomText: {
    fontSize: 22,
    color: 'white',
  },
});