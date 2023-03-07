import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/SignInScreen/sign-in';
import BottomTab from './bottomTab';
var NavigationApp
const Stack = createStackNavigator();

export default NavigationApp = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LOGIN' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="HOME_TAB" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};