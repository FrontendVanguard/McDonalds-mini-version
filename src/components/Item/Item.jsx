import React from 'react'

import { View, Text, Image, TouchableOpacity,  TouchableHighlight } from 'react-native'
import { gStyles } from '../../pages/styles'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem } from './../../redux/actions'

export const Item = ({ item }) => {

  const dispatch = useDispatch()
  const { price, name, image } = item

  const addItemToStore = (item) => {
	  dispatch(addItem(item))
  }
  return (
    <TouchableOpacity style={gStyles.Item}>
      <TouchableHighlight onPress={() => {
        addItemToStore(item)
			}}>
        <Image source={{ uri: image }} style={gStyles.ItemImage} />
        </TouchableHighlight>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  )
}
