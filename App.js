import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Platform } from 'react-native'

import Books from './src/components/Books'
//import Donate from './src/components/Donate'
import BookDetail from './src/components/BookDetail'
import ReadBook from './src/components/ReadBook'

export default StackNavigator({
  Home: {
    screen: TabNavigator({
      //Donate: { 
        //screen: Donate,
        //navigationOptions: {
          //title: 'Донейшн',
          //tabBarLabel: 'Донейшн',
          //tabBarIcon: ({ tintColor, focused }) => (
            //<Ionicons
              //name={focused ? 'ios-heart' : 'ios-heart-outline'}
              //size={26}
              //style={{ color: tintColor }}
            ///>
          //),
          //headerStyle: {
            //backgroundColor: '#fff'
          //},
          //headerTitleStyle: {
            //fontFamily: 'AppleSDGothicNeo-Light',
            //fontSize: 16,
            //fontWeight: '100',
            //color: '#000'
          //},
          //headerTintColor: '#000',
        //},
      //},
      Books: { 
        screen: Books,
        navigationOptions: {
          title: '#Адвайта',
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? 'ios-bookmarks' : 'ios-bookmarks-outline'}
              size={26}
              style={{ color: tintColor }}
            />
          ),
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerTitleStyle: {
            fontFamily: 'AppleSDGothicNeo-Light',
            fontSize: 16,
            fontWeight: '300',
            color: '#000'
          },
          headerTintColor: '#000',
        },
      },
    }, 
    { 
      lazy: true,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#BF813E' : '#fff',
        labelStyle: {
          fontSize: 12,
          fontFamily: 'AppleSDGothicNeo-Light',
          color: '#000'
        },
        style: {
          backgroundColor: '#fff',
        },
      },
    }),
  },
  BookDetail: { 
    screen: BookDetail, 
    navigationOptions: { 
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontFamily: 'AppleSDGothicNeo-Light',
        fontSize: 16,
        fontWeight: '200',
        color: '#000'
      },
      headerBackTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#DBD7D2',
    }
  },
  ReadBook: {
    screen: ReadBook,
    navigationOptions: { 
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontFamily: 'AppleSDGothicNeo-Light',
        fontSize: 16,
        fontWeight: '200',
        color: '#000'
      },
      headerBackTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#DBD7D2', 
    }
  }
})
