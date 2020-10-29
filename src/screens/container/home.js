import React, { Component, Fragment }from 'react';
import {
  Text,
} from 'react-native';
import useCoursesStudent from '../../../utils/hooks/useCoursesStudent'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../sections/components/header'
import AsignaturaList from '../../videos/container/asignatura-list'
import ActivityList from '../../videos/container/activity-list'
import { log } from 'react-native-reanimated';




const Home = (props) => {
  
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
      <Fragment>     
        <Header>
          <Text>Colcentral</Text>
        </Header>
        {/* <Text>buscador</Text> */}
        <AsignaturaList course={coursesList}/>
        <ActivityList course={coursesList}/>
      </Fragment>
    )
}

Home.navigationOptions = props => ({
  headerTitle: (props) => <Text>Start</Text>,
})
export default Home;