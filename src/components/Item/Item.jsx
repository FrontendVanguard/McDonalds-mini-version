import React from 'react'

import { View, Text, Image } from 'react-native'
import { gStyles } from '../../pages/styles'

export const Item = ({ item }) => {
  const { price, name, image } = item
  return (
    <View style={gStyles.Item}>
      <Image source={{ uri: image }} style={gStyles.ItemImage} />
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  )
}
