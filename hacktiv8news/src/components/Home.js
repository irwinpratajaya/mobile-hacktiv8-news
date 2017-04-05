import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

import Form from './Form'
import DataList from './DataList'
import MenuBar from './MenuBar'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hacktiv8 News
        </Text>

        <MenuBar navigator={this.props.navigator} />

        <Form handleChange={this.search.bind(this)}/>

        <DataList data={this.props.filterResult} handleKeyword={this.state.keyword}/>

      </View>


    );
  }

  search(event) {
    this.props.searchNews(event.nativeEvent.text)
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=redux', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      this.props.getNews(data.hits)
    })
  }

}

const mapStateToProps = (state) => {
  return {
    filterResult: state.news.filterResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (results) => dispatch({
      type: 'GET_NEWS',
      payloads: results
    }),
    searchNews: (results) => dispatch({
      type: 'SEARCH_NEWS',
      payloads: results
    })
  }
}

const styles = {

};

export default connect(mapStateToProps, mapDispatchToProps) (Home)
