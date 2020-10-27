import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import useCoursesStudent from '../utils/hooks/useCoursesStudent'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './screens/container/home';
import { log } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './videos/components/details'
// import Header from './src/sections/components/header'

const Stack = createStackNavigator();

const AppLayout = (props) => {
  const student_id = 101285
  const API = `https://api-test.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
  const { coursesList, loading } = useCoursesStudent(API)
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(coursesList)
      await AsyncStorage.setItem('coursesList', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  // console.log('JSON.stringify(coursesList)',coursesList);

    return (
      <Stack.Navigator
        initialRouteName="Home"
      //   screenOptions={{
      //     headerShown: false
      // }}
      >
        <Stack.Screen 
            name="Asignaturas" 
            component={Home}
            options={{
              headerShown: false,
            }}  />
        <Stack.Screen 
          name="Actividad" 
          component={Details}
        />
      </Stack.Navigator>
      
    )
}


export default AppLayout;