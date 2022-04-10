import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { ComboMealData } from './../../constants/foods/ComboMealData'
import { Item } from './../../components/Item'

export const Combo = () => {
  return (
    <View style={gStyles.FoodsPageContainer}>
      {ComboMealData.map((item, idx) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
  )
}
