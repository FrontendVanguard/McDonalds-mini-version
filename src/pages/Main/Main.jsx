import React from 'react'
import { View } from 'react-native'

import { Header } from '../../components/Header/Header'
import { Categories } from '../../components/Categories'
import { Popular } from '../../components/Popular/Popular'
import { gStyles } from '../styles'

export const Main = () => {
  return (
    <View
      style={gStyles.MainPage}
    >
      <Header />
      <Categories />
      <Popular />
    </View>
  )
}


