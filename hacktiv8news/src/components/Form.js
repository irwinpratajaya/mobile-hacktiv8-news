import React from 'react'
import { Text, View, TextInput } from 'react-native'

const Form = (props) => (
  <View>
    <TextInput type="text" name="search" placeholder="search" onChange={props.handleChange} />
  </View>
)

const style={
  search:{
    height: '10%',
    width: '100%',
    padding: 10,
  }
}

export default Form
