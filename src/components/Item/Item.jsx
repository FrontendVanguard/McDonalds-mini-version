import React from 'react'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from 'react-native'
import { gStyles } from '../../pages/styles'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem } from './../../redux/actions'

export const Item = ({ item }) => {
  const dispatch = useDispatch()
  const { price, name, image } = item

  const addItemToStore = (item) => {
    dispatch(addItem(item))
  }

  const createTwoButtonAlert = (item) =>
    Alert.alert(item.name, `wanna add ${item.name} to cart?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      { text: 'OK', onPress: () => addItemToStore(item)},
    ])
  return (
    <TouchableOpacity style={gStyles.Item}>
      <TouchableHighlight onPress={() => {createTwoButtonAlert(item)}}>
        <Image source={{ uri: image }} style={gStyles.ItemImage} />
      </TouchableHighlight>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  )
}
