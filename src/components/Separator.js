import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  main: {
    height: 1,
    width: '96%',
    backgroundColor: '#CED0CE',
    marginLeft: '2%',
  }
})

class Separator extends Component {
  render() {
    return (
      <View style={style.main}></View>
    )
  }
}

export default Separator
