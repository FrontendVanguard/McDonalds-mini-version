import React from 'react'
import { View, Text } from 'react-native'

import { ChickenData } from './../../constants/foods/ChickenData'
import { Item } from './../../components/Item'
import { gStyles } from '../styles'

export const Chicken = () => {
  return (
    <View style={gStyles.FoodsPageContainer}>
      {ChickenData.map((item) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
  )
}
