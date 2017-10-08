import React, { Component } from 'react'
import { Image, TouchableOpacity, Picker, View, Text } from 'react-native'
global.PaymentRequest = require('react-native-payments').PaymentRequest

class Donate extends Component {
  constructor() {
    super()
    this.state = {
      cost: '100.00',
      text: null
    }
  }

  handlePress() {
    const METHOD_DATA = [{
      supportedMethods: ['apple-pay'],
      data: {
        merchantIdentifier: 'merchant.xyz.ghashtag.advayta',
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        countryCode: 'RU',
        currencyCode: 'RUB'
      }
    }]

    const DETAILS = {
      id: 'basic-example',
      displayItems: [
        {
          label: 'Донейшн',
          amount: { currency: 'RUB', value: this.state.cost }
        }
      ],
      total: {
        label: 'Всего:',
        amount: { currency: 'RUB', value: this.state.cost }
      }
    }

    const pr = new PaymentRequest(METHOD_DATA, DETAILS)

    pr
      .show()
      .then(paymentResponse => {
        this.setState({
          text: paymentResponse.details.paymentToken
        })

        paymentResponse.complete('success')
      })
      .catch(e => {
        pr.abort()

        this.setState({
          text: e.message
        })
      })
  }

  render() {
    const { container, mission, content } = styles
    return (
      <View style={container}>
        <Text style={mission}>  Миссия приложения - это проведение света дхармы в мир адхармы и Ваша поддержка позволит уделять нашему общему любимому делу больше времени.</Text>
        <Picker
          selectedValue={this.state.cost}
          onValueChange={(itemValue) => this.setState({cost: itemValue})}>
          <Picker.Item label="100₽" value="100.00" />
          <Picker.Item label="300₽" value="200.00" />
          <Picker.Item label="500₽" value="500.00" />
          <Picker.Item label="1000₽" value="1000.00" />
          <Picker.Item label="3000₽" value="3000.00" />
          <Picker.Item label="5000₽" value="5000.00" />
        </Picker>
        <View style={content}>
          <TouchableOpacity onPress={this.handlePress.bind(this)}>
            <Image
              source={require('../asset/ApplePay.png')}
            />
          </TouchableOpacity>
          <Text>
            {this.state.text}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  mission: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '100',
    fontSize: 16,
    paddingTop: 20,
    textAlign: 'center'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Donate 
