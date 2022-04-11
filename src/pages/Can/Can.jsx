import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { useSelector, useDispatch, TouchableHighlight } from 'react-redux'
import { addItem, deleteItem } from './../../redux/actions'

export const Can = () => {
  const { items } = useSelector((state) => state.itemReducer)
  return (
    <View style={gStyles.CanContainer}>
      {items.map((item, idx) => (
        <View key={idx} style={gStyles.CanItem}>
          <Text style={gStyles.CanItemText}>{item.name}</Text>
          <Image
            source={{
              uri: item.image,
            }}
            style={{
              width: 51,
              height: 45,
            }}
          />
          <View>
            <Image
              
              source={{
                uri: 'https://www.pngplay.com/wp-content/uploads/7/Delete-Transparent-Background.png',
              }}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
        </View>
      ))}
    </View>
  )
}
