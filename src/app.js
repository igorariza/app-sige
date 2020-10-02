import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { store } from '../store';
import useCoursesStudent from '../utils/hooks/useCoursesStudent'
import Home from './screens/container/home';
import Header from './sections/components/header'
import AsignaturaList from './videos/container/asignatura-list'
import ActivityList from './videos/container/activity-list'

const AppLayout = () => {
  const student_id = 101285
  const API = `https://api-test.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
  const { coursesList, loading } = useCoursesStudent(API)
  store.dispatch({
    type: 'SET_SUBJECT_LIST',
    payload:{
     coursesList
    }
  })
    return (
      <Home>     
        <Header>
          <Text>Colcentral</Text>
        </Header>
        <Text>buscador</Text>
        <AsignaturaList/>
        <ActivityList/>
      </Home>
    )
}

export default connect(null)(AppLayout);