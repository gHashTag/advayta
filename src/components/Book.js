import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

import { GITBOOK_HOST, BOOK_THUMB_RATIO_SMALL } from '../constants'

const listItemHeight = 100
const listItemPadding = 5
const styles = StyleSheet.create({
  book: {
    padding: listItemPadding,
    flexDirection: 'row',
  },
  bookThumb: {
    width: (listItemHeight - 2 * listItemPadding) * BOOK_THUMB_RATIO_SMALL,
    height: listItemHeight - 2 * listItemPadding,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  bookInfo: {
    flex: 1,
    paddingLeft: listItemPadding * 2,
  },
  bookTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#666',
  },
  bookDescription: {
    fontSize: 12,
    color: '#AAA',
  },
})

const Book = ({ item, navigate }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigate('BookDetail', item)}>
      <View style={styles.book}>
        <Image style={styles.bookThumb} source={{ uri: GITBOOK_HOST + item.cover.small }} />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


export default Book
