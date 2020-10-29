import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

class Login extends Component {
  handleLogin = () => {
    // const token = 'ABCDEFGHIJK';
    // this.props.dispatch({
    //   type: 'SET_USER',
    //   payload: {
    //     token,
    //     username: 'LeonidasEsteban'
    //   }
    // })
    // this.props.navigation.navigate('Loading');
  }
  render() {
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
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>        
      </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',    
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
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