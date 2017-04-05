import React from 'react'
import { Text, ScrollView, TextInput, ListView } from 'react-native'

import Home from './Home'

const DataList = (props) => {
  return (
    <ScrollView style={styles.ListView}>
      {props.data.length === 0 ?
        <Text>
          Loading..
        </Text> :
        props.data.filter((item, index)=> {
        let filterPattern = new RegExp(props.handleKeyword,'gi')
        return filterPattern.test(item.title)
      })
        .map((item, index) => {
        return (
          <Text key={index} style={styles.TextColumn}>
            {item.title}
          </Text>
        )
        })
      }

    </ScrollView>
  )
}

const styles={
  ListView:{
    height: '91%',
    width: '100%',
    padding: 5,
    backgroundColor: 'lightblue',

  },
  TextColumn:{
    width: '100%',
    padding: 10,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
  }
}

export default DataList
