import React, { useState } from 'react';
import { StyleSheet,TextInput, Text, View, Dimensions ,TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
const {width} = Dimensions.get('window');

const [text, onChangetext] = React.useState(null);

const QR_PIN = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex:3,top:-250}}>
       <Svg width={width} height={width} viewBox="0 0 375 340">
             <Defs>
              <LinearGradient x1="90.743%" y1="87.641%" x2="10.14%" y2="3.465%" id="prefix__a">
                <Stop stopColor="#F7BF24" offset="0%" />
                <Stop stopColor="#F60109" offset="100%" />
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
            <Text style={styles.TEXT}> Bonjour                  pour acceder au menu
            </Text>
          </View>
      </View>
      <View style={{flex:5}}>
      </View>
      <View style={{flex:5}}>
       <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.accesstomenubuttom, { flexDirection: 'row', marginTop: 10 }]}
            onPress={()=>navigation.navigate('MENU')}>
            <Text style={styles.accesstomenubuttomText}>Scanner code QR </Text>
       </TouchableOpacity>
      </View>
      <View style={{flex:5}}>
       <Text style={styles.TEXT}>                                                Entrer code PIN
            </Text>
            <TextInput style={styles.TextInput}  onChangeText={onChangetext}
          value={text}
         placeholder="------"
          keyboardType="default">    </TextInput>
      </View>
      <View style={{flex:5}}>
      </View>
    </View>
  );
}
export default QR_PIN;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TextInput: {
    fontSize: 20,
    lineHeight: 30,borderWidth: 1,
    textAlign: 'center',
    height: 40,
  },
 TEXT: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 2,textAlign: 'center'
    ,fontWeight: 'bold',lineHeight: 60
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
    height: 60,
    margin: 20,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#F60109',
    backgroundColor: '#F60109',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F60109',
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 48,
  },
  accesstomenubuttomText: {
    fontSize: 22,
    color: 'white',
  },
});