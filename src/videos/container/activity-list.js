import * as React from 'react';
import {
  Text,
  FlatList
} from 'react-native' 
import Layout from '../components/activity-list-layout'
import Store from '../../../store'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Activity from '../components/activity'
import { useNavigation } from '@react-navigation/native';

const ActivityList = (props) => {
  const navigation = useNavigation(); 
  const keyExtractor = (item) => item.codeAcademicCharge.toString()
  const renderEmpty = () => <Empty text="No hay sugerencias"></Empty>
  const itemSeparator = () => <Separator  />
  const viewActivity = (item) => {
    navigation.navigate('Actividad', {item: item}) 
  }

  renderItem = ({item}) => {
    return (
    <Activity 
      {...item} 
      onPress={()=> { viewActivity(item)}}
    />
    )
  }

    return(
      <Layout
      title="Actividades recientes">
    <FlatList
      keyExtractor={keyExtractor}
      data={props.course}
      ListEmptyComponent={renderEmpty}
      ItemSeparatorComponent={itemSeparator}
      renderItem={renderItem}
    />
    </Layout>
    )
  }

export default ActivityList;