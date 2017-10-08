import React from 'react'
import { View, ScrollView, Text, Image, Button } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { GITBOOK_HOST } from '../constants'

const styles = {
  main: {
    flex: 1,
    padding: 20,
  },
  cover: {
    width: '80%',
    height: 300,
    marginLeft: '10%',
  },
  bookTitle: {
    fontFamily: 'AppleSDGothicNeo-Light',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 40,
    marginTop: 10,
    color: '#666',
  },
  bookAuthor: {
    fontFamily: 'AppleSDGothicNeo-Light',
    textAlign: 'center',
    fontSize: 14,
    color: '#AAA',
  },
  description: {
    color: '#666',
    textAlign: 'center',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '100',
    fontSize: 16,
    marginTop: 10,
  },
  readButton: {
    marginBottom: 350
  }
}

const BookDetail = (props) => {
  const { params: item } = props.navigation.state
  const { navigate } = props.navigation
  const { main, cover, bookTitle, description, readButton } = styles

  return (
    <ScrollView style={main}>
      <Image
        style={cover}
        resizeMode={'contain'}
        source={{ uri: GITBOOK_HOST + item.cover.large }}
      />
      <Text style={bookTitle}>{item.title}</Text>
      <Text style={description}>{item.description}</Text>
      <Button
        style={readButton}
        title="Читать"
        onPress={() => navigate('ReadBook', item)}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons 
          name='copyright'
          size={26}
          style={{ padding: 100, color: 'gray', transform:[{rotate: '180 deg'}] }}
        />
      </View>
    </ScrollView>
  )
}

export default BookDetail
