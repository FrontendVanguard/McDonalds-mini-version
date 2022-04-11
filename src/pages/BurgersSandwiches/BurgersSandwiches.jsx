import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { BurgersSandwichesData } from './../../constants/foods/BurgersSandwichesData'
import { Item } from './../../components/Item'
import { Header } from './../../components/Header'

export const BurgersSandwiches = () => {
  return (
    <>
    <Header />
    <View style={gStyles.FoodsPageContainer}>
      {BurgersSandwichesData.map((item, idx) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
        </>
  )
}
