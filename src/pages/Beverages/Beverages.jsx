import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { BeveragesData } from './../../constants/foods/BeveragesData'
import { Item } from './../../components/Item'

export const Beverages = () => {
  return (
    <View style={gStyles.FoodsPageContainer}>
      {BeveragesData.map((item, idx) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
  )
}
