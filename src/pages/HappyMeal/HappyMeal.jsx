import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { HappyMealData } from './../../constants/foods/HappyMealData'
import { Item } from './../../components/Item'
import { Header } from './../../components/Header/'

export const HappyMeal = () => {
  return (
    <>
    <Header />
    <View style={gStyles.FoodsPageContainer}>
      {HappyMealData.map((item, idx) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
    </>
  )
}
