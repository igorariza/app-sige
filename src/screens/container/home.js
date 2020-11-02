import React, { Fragment, useState, useEffect }from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import useCoursesStudent from '../../../utils/hooks/useCoursesStudent'
import Store from '../../../store'
import Header from '../../sections/components/header'
import AsignaturaList from '../../videos/container/asignatura-list'
import ActivityList from '../../videos/container/activity-list'
import Close from '../../sections/components/close'
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {
  const [user, setUser] = useState()
  const navigation = useNavigation(); 
  const student_id = 101285
  const API = `https://api-test.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
  const { coursesList, loading } = useCoursesStudent(API)
  handleClose = () => {
    navigation.navigate('Login')
  }
  // load
  Store.load({
  key: 'userLogin',
  autoSync: true,
  syncInBackground: true,
  syncParams: {
    extraFetchOptions: {
      // blahblah
    },
    someFlag: true
  }
})
.then(ret => {
  setUser(ret)
})
.catch(err => {
  // any exception including data not found
  // goes to catch()
  console.warn(err.message);
  switch (err.name) {
    case 'NotFoundError':
      // TODO;
      break;
    case 'ExpiredError':
      // TODO
      break;
  }
});
console.log('user', user);
    return (
      <Fragment>     
        <Header>
        <TouchableOpacity
            onPress={handleClose}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
          </TouchableOpacity>
          {/* <Close
            onPress={this.handleClose} /> */}
        </Header>
        <Text>{user.firstNameUser} - Grado </Text>
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