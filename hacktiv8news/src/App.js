import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Form from './components/Form'
import DataList from './components/DataList'

export default class App extends Component {
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
          Welcome to React Native!
        </Text>

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
      console.log(this.state.data);
      console.log('test halo halo');
    })
  }
}

const styles = {

};
