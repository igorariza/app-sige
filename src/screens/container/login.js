import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import axios from "axios";
import Store from '../../../store'
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState()
  const [password, setPassword] = useState()
  const navigation = useNavigation(); 
  
  handleLogin = () => {
    setLoading(true)
    console.log(email);
    if(email == null || email == '' || password == null || password == ''){
      setLoading(false)
      Alert.alert(
        'Debes escribir los datos de ingreso'
     )
    }else{
    const API = `https://api-test.sige-edu.com:8000/api/users/login/`
    const data = {
      documentIdUser: email,
      passwordUser: password
    };    
    const options = {
      headers: {
          'Content-Type': 'application/json',
      }
    };
    axios.post(API, data, options)
   .then((res) => {
     if(res.data.code == 200){
      Store.save({
        key: 'userLogin', // Note: Do not use underscore("_") in key!
        data: res.data.data.user_data.user,
        expires: 1000 * 3600
      });
      setLoading(false)
      navigation.navigate('App')
     }
   })
   .catch((err) => {
     console.log("ERROR: ====", err);
   })
  }
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
            onChangeText={text => setPassword(text)}
            defaultValue={password}
          />
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
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