/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {
  AppRegistry,
} from 'react-native'
import App from './App'
import codePush from 'react-native-code-push'

class Advayta extends Component {
  componentDidMount() {
    codePush.sync({ 
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  render () {
    return <App />
  }
}

AppRegistry.registerComponent('advayta', () => Advayta)
