import React, { useState } from 'react'
import { Image, Linking, TouchableHighlight, View, Text } from 'react-native'

import { gStyles } from './../../pages/styles'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem } from './../../redux/actions'
import { useNavigation } from '@react-navigation/native'

export const Header = () => {
  const navigation = useNavigation()

  const loadScene = (screenName) => {
    navigation.navigate(screenName)
  }
  const { items } = useSelector((state) => state.itemReducer)

  return (
    <View
      style={gStyles.Header}
    >
      <View>
        <TouchableHighlight
          onPress={() => {
            Linking.openURL('https://mcdonalds.pl/')
          }}
        >
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png',
            }}
            style={{
              width: 51,
              height: 45,
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight onPress={() => loadScene('Can')}>
          <Image
            source={{
              uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
            }}
            style={{
              width: 45,
              height: 45,
            }}
          />
        </TouchableHighlight>
        <Text style={gStyles.canNumper}>{items.length}</Text>
      </View>
    </View>
  )
}
