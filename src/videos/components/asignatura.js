import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const tempColor = [
  '#1c2743',
  '#213862',
  '#B46382',
  '#fd9564',
  '#e3463f',
]
function Asignatura(props) { 
  return (
    <View style={styles.cardactivity} >
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View
        style={{
          backgroundColor: tempColor[Math.floor(Math.random() * 5)], 
          height: 100,
          borderRadius: 10,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
         }}>
          <Text 
          style={styles.name_course}
          adjustsFontSizeToFit={true}
          numberOfLines={2}
          >{props.courseDictate.nameCourse}</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardactivity: {
    paddingBottom: 7
  },
  name_course: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0,
  }
})

export default Asignatura;