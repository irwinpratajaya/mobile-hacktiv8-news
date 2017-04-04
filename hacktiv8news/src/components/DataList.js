import React from 'react'
import { Text, ScrollView, TextInput, ListView } from 'react-native'

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
          <Text key={index}>
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
    height: '90%',
    width: '100%',
    padding: 10,
  }
}

export default DataList
