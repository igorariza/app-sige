import React, {Component} from 'react';
import {
  Text,
  FlatList
} from 'react-native' 
import Layout from '../components/asignatura-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/container/horizontal-separator'
import Asignatura from '../components/asignatura'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  // debugger
  return {
    list: state.coursesList
  }
}


class AsignaturaList extends Component {
  keyExtractor = (item) => item.codeAcademicCharge.toString()
  renderEmpty = () => <Empty text="No hay sugerencias"></Empty>
  itemSeparator = () => <Separator  />
  renderItem = ({item}) => {
    return (
    <Asignatura {...item} />
    )
  }
  render() {
    return(
      <Layout
      title="Asignaturas">
    <FlatList
      horizontal
      keyExtractor={this.keyExtractor}
      data={this.props.list}
      ListEmptyComponent={this.renderEmpty}
      ItemSeparatorComponent={this.itemSeparator}
      renderItem={this.renderItem}
    />
    </Layout>
    )
  }
}

export default connect(mapStateToProps)(AsignaturaList);