import * as React from 'react';
import {
  Text,
  FlatList
} from 'react-native' 
import Layout from '../components/activity-list-layout'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Activity from '../components/activity'
import { useNavigation } from '@react-navigation/native';

const ActivityList = (props) => {
  const navigation = useNavigation(); 
  keyExtractor = (item) => item.codeAcademicCharge.toString()
  renderEmpty = () => <Empty text="No hay sugerencias"></Empty>
  itemSeparator = () => <Separator  />
  viewActivity = (item) => {
    navigation.navigate('Actividad', {item: item}) 
  }
  // viewMovie = (item) => {
  //   console.log('navigation.navigate');
  //   // props.dispatch({
  //   //   type: 'SET_SELECTED_MOVIE',
  //   //   payload: {
  //   //     movie: item,
  //   //   }

  //   // })
  // }
  renderItem = ({item}) => {
    return (
    <Activity 
      {...item} 
      onPress={()=> { this.viewActivity(item)}}
    />
    )
  }

    return(
      <Layout
      title="Actividades recientes">
    <FlatList
      keyExtractor={this.keyExtractor}
      data={props.course}
      ListEmptyComponent={this.renderEmpty}
      ItemSeparatorComponent={this.itemSeparator}
      renderItem={this.renderItem}
    />
    </Layout>
    )
  }

export default ActivityList;