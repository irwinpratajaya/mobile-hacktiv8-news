import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

import MenuBar from './MenuBar'

class Peoples extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>
          Peoples
        </Text>

        <MenuBar navigator={this.props.navigator} />

        {this.props.people.map((item, index) => {
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
      this.props.getPeople(data.results)
    })
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: (results) => dispatch({
      type: 'GET_PEOPLE',
      payloads: results
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
