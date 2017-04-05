import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const MenuBar = props => {
  return (
    <View>
      <TouchableHighlight onPress={() => props.navigator.push({title:'home'})}>
        <Text>
          Home
        </Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => props.navigator.push({title:'people'})}>
        <Text>
          People
        </Text>
      </TouchableHighlight>
    </View>

  )
}

export default MenuBar
