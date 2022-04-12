import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  CheckBox,
} from 'react-native'

import { deliveryStyles } from './Delivery.styles'
import { Header } from './../../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { gStyles } from '../styles'

export const Delivery = () => {
  const [isSelectedCash, setSelectionCash] = useState(false)
  const { items } = useSelector((state) => state.itemReducer)
  const time = items.length * 5 + 20

  const sum = items.reduce((acc, el, idx) => {
    console.log(acc)
    return Number(acc) + Number(el.price.split(' ')[1])
  }, '0.00')

  const deliveryPrice = (sum) => {
    if (sum < 5) return 3.49
    else if (sum < 10) return 1.99
    else if (sum > 10) return 0.49
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Purchase',
      `want to buy everything for ${(deliveryPrice(sum) + Number(sum)).toFixed(
        2
      )} ?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'OK',
          onPress: () => Alert.alert('Purchase', 'Purchase completed successfully!'),
        },
      ]
    )

  const allPrice = (deliveryPrice(sum) + Number(sum)).toFixed(2)
  return (
    <View style={deliveryStyles.deliveryContainer}>
      <Header />
      <Text style={deliveryStyles.deliveryText}>Delivery terms</Text>
      <SafeAreaView style={deliveryStyles.adressContainer}>
        <TextInput
          style={deliveryStyles.adressElement}
          placeholder="Flat"
          keyboardType="numeric"
        />
        <TextInput
          style={deliveryStyles.adressElement}
          placeholder="Entrance"
          keyboardType="numeric"
        />
        <TextInput
          style={deliveryStyles.adressElement}
          placeholder="Floor"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <TextInput style={deliveryStyles.commentary} placeholder="Сomment" />
      <View style={deliveryStyles.checkBoxContainer}>
        <CheckBox value={isSelectedCash} onValueChange={setSelectionCash} />
        <Text>Cash</Text>
      </View>
      <View style={deliveryStyles.checkBoxContainer}>
        <CheckBox
          value={!isSelectedCash}
          onValueChange={() => {
            setSelectionCash(false)
          }}
        />
        <Text>Card</Text>
      </View>
      {!isSelectedCash && (
        <View>
          <TextInput
            style={deliveryStyles.commentary}
            placeholder="Number Card"
          />
          <TextInput style={deliveryStyles.cvcInput} placeholder="CVC" />
        </View>
      )}
      <View>
        <Text style={{ margin: 12 }}>
          Estimated delivery time: {time} - {time + 5}
        </Text>
      </View>
      <View style={deliveryStyles.button}>
        <Button title={`Order now by $ ${allPrice}`} color="#848482" onPress={createTwoButtonAlert} />
      </View>
    </View>
  )
}
