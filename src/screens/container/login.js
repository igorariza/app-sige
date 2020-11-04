import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

const Login = () => {  
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState()
  const [password, setPassword] = useState()
  const navigation = useNavigation();     
  const handleLogin = () => {
      setLoading(true)
      if(email == null || email == '' || password == null || password == ''){
          setLoading(false)
          Alert.alert(
            'Debes escribir los datos de ingreso'
          )
      }else{
        login( email, password );
      }
  }
  function login(documentIdUser, passwordUser) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        documentIdUser: documentIdUser,
        passwordUser: passwordUser,
      }),
    }  
    return fetch(`https://api-test.sige-edu.com:8000/api/users/login/`, options)
      .then(handleResponse)
      .then( response => {        
        switch(response.code) {          
          case 204://Datos equivocados
          Alert.alert(response.message)
            break;          
          case 200://Login exitoso
          loginSuccess(response.data.user_data)
            break;
          default:
            Alert.alert("Algo Sucedió... escríbenos al whatsapp");        
          } 
      })
  }
  async function loginSuccess(dataUser){
    await AsyncStorage.setItem('userLogin', JSON.stringify(dataUser))
    navigation.navigate("Asignaturas");
  }

  function handleResponse(response) {    
    return response.json().then((data) => {
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          // logout()
          //eslint-disable-next-line
          //location.reload(true) recarga la direccion, mejor cambiar por un push
        }  
        const error = data.message || response.statusText || 'Error mostro'
        return Promise.reject(error)
      }  
      if (response.ok) {
        if (data.code !== 200) {          
          // logout()
          // const error = data.message || response.statusText || 'Error mostro'
          // return Promise.reject(error)
        }
      }  
      return data
    })
  }  
    return (
      <ImageBackground 
          source={require('../../../assets/backgronund.png')} 
          style={styles.image}>
      <SafeAreaView style={styles.container}>
              <Image
                source={require('../../../assets/SIGEBird.png')}
                style={styles.logo}
              />
              <Image
                source={require('../../../assets/logo.png')}
                style={styles.logoliteral}
              />
        <View> 
          <TextInput
            style={styles.input}
            placeholder="Documento Identidad"
            placeholderTextColor="white"
            onChangeText={text => setEmail(text)}
            defaultValue={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={ text => setPassword(text) }
            defaultValue={ password }
          />
          <TouchableOpacity
            onPress={ handleLogin }
            style={ styles.button }
          >
            {loading 
            ? <Spinner
            visible={true}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
            />
            : <Text style={styles.buttonLabel}>Iniciar Sesión</Text>}
            
          </TouchableOpacity>                  
        </View>
        <Text style={styles.textByGroupar}>By Groupar</Text>
      </SafeAreaView>
      </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textByGroupar:{
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50,
    fontSize: 18,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',    
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  logoliteral:{
    width: 250,
    height: 50,
    marginBottom: 20,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  input: {
    marginBottom: 10,
    marginTop: 5,
    width: 350,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: '#838383',
    color: 'white',
  },
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
export default Login