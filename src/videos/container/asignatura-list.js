import React, { Fragment, useState, useEffect }from 'react';
import {
  FlatList
} from 'react-native' 
import Layout from '../components/asignatura-list-layout'
import Empty from '../components/empty'
import AsyncStorage from '@react-native-community/async-storage';
import Separator from '../../videos/components/vertical-separator'
import Asignatura from '../components/asignatura'
import { useNavigation } from '@react-navigation/native';

const AsignaturaList = (props) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null)
  const [subject, setSubject] = useState([])
  async function loginSuccess(){
    const dataUser =  await AsyncStorage.getItem('userLogin')
    getSubject(JSON.parse(dataUser).student.codeStudent)
  }
  const getSubject = (codeStudent) => {
    fetch(`https://api-gcp.sige-edu.com:8000/api/courses/academiccharge/bystudent/${codeStudent}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSubject(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {})
  }
 useEffect(() => {
    loginSuccess()
    }, [])  
  keyExtractor = (item) => item.codeAcademicCharge.toString()
  renderEmpty = () => <Empty text="No hay sugerencias"></Empty>
  itemSeparator = () => <Separator  />
  viewSubject = (item) => {
    navigation.navigate('Actividad', {item: item}) 
  }
  renderItem = ({item}) => {    
    return (      
        <Asignatura          
          {...item}
          onPress={() => {viewSubject(item)}}        
        />  
    )
  }
    return(
    <Layout>
    <FlatList
      keyExtractor={keyExtractor}
      data={subject}
      ListEmptyComponent={renderEmpty}
      ItemSeparatorComponent={itemSeparator}
      renderItem={renderItem}
    />
    </Layout>
    )
  }

export default AsignaturaList;