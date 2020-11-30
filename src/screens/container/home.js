import React, { Fragment}from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Store from '../../../store'
import Header from '../../sections/components/header'
import AsignaturaList from '../../videos/container/asignatura-list'
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {
  const navigation = useNavigation(); 
  const handleClose = () => {
    Store.remove({
      key: 'userLogin'
    });
    navigation.navigate('Login')
  }
    return (
      <Fragment>     
        <Header>
        <TouchableOpacity
            onPress={handleClose}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </Header>
        <AsignaturaList />
        {/* <ActivityList /> */}
      </Fragment>
    )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e350a8',
    borderRadius: 5,
  },
  txtusername: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
    color: 'white',
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonLabel: {
    color: 'white',
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Home;