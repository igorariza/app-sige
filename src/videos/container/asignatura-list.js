import React, {Component} from 'react';
import {
  Text,
  FlatList
} from 'react-native' 
import Layout from '../components/asignatura-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/container/horizontal-separator'
import Asignatura from '../components/asignatura'



const AsignaturaList = (props) => {
  // console.log('key', props.course);
  keyExtractor = (item) => item.codeAcademicCharge.toString()
  renderEmpty = () => <Empty text="No hay sugerencias"></Empty>
  itemSeparator = () => <Separator  />
  viewSubject = (item) => {
    console.log('key', props);
  }
  renderItem = ({item}) => {
    
    return (      
        <Asignatura 
          {...item}
          onPress={() => {this.viewSubject(item)}}        
        />   
    )
  }
    return(
      <Layout
      title="Asignaturas">
    <FlatList
      horizontal
      keyExtractor={this.keyExtractor}
      data={props.course}
      ListEmptyComponent={this.renderEmpty}
      ItemSeparatorComponent={this.itemSeparator}
      renderItem={this.renderItem}
    />
    </Layout>
    )
  }
export default AsignaturaList;