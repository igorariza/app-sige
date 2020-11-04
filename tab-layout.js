import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/sections/components/header'
import Applayout from './src/app'
import Profile from './src/screens/components/profile-user'
import Chat from './src/screens/components/chat-group'

const Tab = createBottomTabNavigator();

const TabLayout = () =>{



  return(
    <Tab.Navigator
        initialRouteName="Asignaturas"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {
            fontSize: 23,
          },
          style: {
            backgroundColor: '#eaeaea',
          },          
        }}
      >
        <Tab.Screen 
          name="Asignaturas" 
          component={Applayout}
          options={{ 
            tabBarBadge: 3
          }}
        />
        {/* <Tab.Screen 
          name="Chat"
          component={Chat} />
        <Tab.Screen name="Perfil" component={Profile} />         */}
      </Tab.Navigator> 
  )
}
export default TabLayout;