import React from 'react'
import { View, Text } from 'react-native'

import { ChickenData } from './../../constants/foods/ChickenData'
import { Item } from './../../components/Item'
import { gStyles } from '../styles'
import { Header } from './../../components/Header'

export const Chicken = () => {
  return (
    <View style={gStyles.MainPage}>
    <Header />
    <View style={gStyles.FoodsPageContainer}>
      {ChickenData.map((item) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
    </View>
  )
}
