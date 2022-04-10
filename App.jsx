import React from 'react'
import { Main } from './src/pages/Main'
import MainStack from './src/navigate'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { Store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={Store}>
      <MainStack />
    </Provider>
  )
}
