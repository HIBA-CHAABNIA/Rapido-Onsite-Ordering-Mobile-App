import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SPLASH_SCREEN,QR_PIN,QR_SCANNER,MENU,CONTENU_MENU,PETIT_DEJEUNER,BRUNCH,D_D,DESSERT,BREUVAGE,ISP,SM_BP,PANIER,MESSAGE,PAIEMENT,SATISFACTION_CLIENT } from "../interfaces";

const Stack = createStackNavigator();

const Navigators = () => {

    return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SPLASH_SCREEN" screenOptions={{headerShown: false}}>
              <Stack.Screen name="SPLASH_SCREEN" component={SPLASH_SCREEN} />
              <Stack.Screen name="QR_PIN" component={QR_PIN} />
              <Stack.Screen name="MENU" component={MENU} />
              <Stack.Screen name="CONTENU_MENU" component={CONTENU_MENU} />
              <Stack.Screen name="PETIT_DEJEUNER" component={PETIT_DEJEUNER} />
              <Stack.Screen name="BRUNCH" component={BRUNCH} />
              <Stack.Screen name="D_D" component={D_D} />
              <Stack.Screen name="DESSERT" component={DESSERT} />
              <Stack.Screen name="BREUVAGE" component={BREUVAGE} />
              <Stack.Screen name="ISP" component={ISP} />
              <Stack.Screen name="SM_BP" component={SM_BP} />
              <Stack.Screen name="PANIER" component={PANIER} />
              <Stack.Screen name="MESSAGE" component={MESSAGE} />
              <Stack.Screen name="PAIEMENT" component={PAIEMENT} />
              <Stack.Screen name="SATISFACTION_CLIENT" component={SATISFACTION_CLIENT} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigators;
  