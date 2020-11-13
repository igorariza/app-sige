import React, { useState, useEffect } from 'react'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {
  Modal,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
const tempImg = [
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
]

function Asignatura(props) { 
  moment.locale('en');
  const [colapse, setColapse] = useState(false)
  const [modal, setModal] = useState(false)
  const [titleModal, setTitleModal] = useState('')
  const toggleModal = () => setModal(!modal)
  const toggleColapse = () => setColapse(!colapse)
  return (
      <Card containerStyle={{borderRadius: 10}} >        
        <View style={styles.midlecard}>
          <Image
            style={styles.cover}
            source={{
              uri: tempImg[Math.floor(Math.random() * 20)]
            }}
          />
          <View style={styles.info}>
            <Text style={styles.title}>{props.nameSecction}</Text>
            <Text style={styles.title}>Asignación:{' '}
                  {moment(props.uploadOnSecction).format('MMMM DD')}</Text>
          </View>
        </View>
      </Card>
  )
}

const styles = StyleSheet.create({
  midlecard:{
    flexDirection: 'row',
  },
  info: {
    width: 0,
    flexGrow: 1,    
  },
  card: {
    borderRadius: 50,
  },
  title: {
    flex: 1, 
    flexWrap: 'wrap',
    fontSize: 18,
    paddingLeft: 10,
  },
  genreText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 11,
  },
  cover: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  }
})

export default Asignatura;