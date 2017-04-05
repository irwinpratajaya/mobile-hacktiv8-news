import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MenuBar from './MenuBar'

class Peoples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <View>
        <Text>
          Peoples
        </Text>

        <MenuBar navigator={this.props.navigator} />

        {this.state.data.map((item, index) => {
          return (
            <Text key={index}>
              {item.name}
            </Text>
          )
        })
        }
      </View>
    )
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      this.setState({data: data.results})
    })
  }
}

export default Peoples
