import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { SnacksSlidesData } from './../../constants/foods/SnacksSlidesData'
import { Item } from './../../components/Item'

export const SnacksSlides = () => {
  return (
    <View style={gStyles.FoodsPageContainer}>
      {SnacksSlidesData.map((item, idx) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
  )
}
