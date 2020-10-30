import React, { Component, Fragment }from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import useCoursesStudent from '../../../utils/hooks/useCoursesStudent'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../sections/components/header'
import AsignaturaList from '../../videos/container/asignatura-list'
import ActivityList from '../../videos/container/activity-list'
import Close from '../../sections/components/close'
import { useNavigation } from '@react-navigation/native';
import { log } from 'react-native-reanimated';




const Home = (props) => {
  const navigation = useNavigation(); 
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
  handleClose = () => {
    // const token = 'ABCDEFGHIJK';
    // this.props.dispatch({
    //   type: 'SET_USER',
    //   payload: {
    //     token,
    //     username: ''
    //   }
    // })
    navigation.navigate('Login')
  }
    return (
      <Fragment>     
        <Header>
        <TouchableOpacity
            onPress={this.handleClose}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
          </TouchableOpacity>
          {/* <Close
            onPress={this.handleClose} /> */}
        </Header>
        <Text>Nombre Usuario - Grado </Text>
        <AsignaturaList course={coursesList}/>
        <ActivityList course={coursesList}/>
      </Fragment>
    )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    padding: 5,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Home;