import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSwitchNavigator } from "@react-navigation/compat";
import Loading from './src/sections/components/loading';
import Login from './src/screens/container/login'
import Applayout from './src/app'


function App(props) {
  
  return (
    <NavigationContainer>      
      <SwitchNavigator />
    </NavigationContainer>
  );
}
const SwitchNavigator = createSwitchNavigator({
  "Loading": { screen: Loading, },
  "App": Applayout,
  "Login": Login,
},
{
  initialRouteName: "Login",
});
export default App;