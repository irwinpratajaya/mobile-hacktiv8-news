import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Form from './Form'
import DataList from './DataList'
import MenuBar from './MenuBar'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
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

        <DataList data={this.state.data} handleKeyword={this.state.keyword}/>

      </View>


    );
  }

  search(event) {
    this.setState({
      keyword: event.nativeEvent.text
    })
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=redux', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      this.setState({data: data.hits})
    })
  }

}

const styles = {

};
