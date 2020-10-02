import React, {Component} from 'react';
import {
  Text,
  FlatList
} from 'react-native' 
import Layout from '../components/activity-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Activity from '../components/activity'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  // debugger
  return {
    list: state.coursesList
  }
}

class ActivityList extends Component {
  keyExtractor = (item) => item.codeAcademicCharge.toString()
  renderEmpty = () => <Empty text="No hay sugerencias"></Empty>
  itemSeparator = () => <Separator  />
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }

    })
  }
  renderItem = ({item}) => {
    return (
    <Activity 
      {...item} 
      onPress={() => { this.viewMovie(item) }}
    />
    )
  }
  render() {
    return(
      <Layout
      title="Actividades recientes">
    <FlatList
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

export default connect(mapStateToProps)(ActivityList);