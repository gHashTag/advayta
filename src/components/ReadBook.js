import React, { Component } from 'react'
import { WebView } from 'react-native'

class ReadBook extends Component {
  static navigationOptions = ({ navigation }) => {
    title: navigation.state.params.title
  }

  render() {
    const { params: book } = this.props.navigation.state
    return (
      <WebView 
        source={{ uri: book.urls.read }}
        onError = {(msg) => console.warn(msg)}
      ></WebView>
    )
  }
}

export default ReadBook
