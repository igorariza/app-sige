import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from './src/sections/components/loading';
import Applayout from './src/app'
import Profile from './src/screens/components/profile-user'
import Chat from './src/screens/components/chat-group'


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Applayout}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Chat" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;