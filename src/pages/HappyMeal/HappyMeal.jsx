import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { HappyMealData } from './../../constants/foods/HappyMealData'
import { Item } from './../../components/Item'

export const HappyMeal = () => {
  return (
    <View style={gStyles.FoodsPageContainer}>
      {HappyMealData.map((item, idx) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
  )
}
