import React from 'react'
import { View, Text, Image, TouchableHighlight, Button, Pressable, Alert  } from 'react-native'

import { gStyles } from '../styles'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem } from './../../redux/actions'

export const Can = () => {
  const { items } = useSelector((state) => state.itemReducer)

  const dispatch = useDispatch()

  const onPressCan = (item) => {
    dispatch(deleteItem(item))
  }

  const sum = items.reduce((acc, el, idx) => {
    console.log(acc)
    return Number(acc) + Number(el.price.split(' ')[1])
  }, "0.00")

  const createTwoButtonAlert = () =>
  Alert.alert("Purchase", `want to buy everything for ${sum} ?`, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
    },
    { text: 'OK', onPress: () => Alert.alert("Succes!", "purchase completed successfully")},
  ])
  return (
    <View style={gStyles.CanContainer}>
      {items.map((item, idx) => (
        <View key={idx} style={gStyles.CanItem}>
          <View style={gStyles.CanItemInformation}>
            <Text style={gStyles.CanItemText}>{item.name}</Text>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 51,
                height: 45,
              }}
            />
          </View>
          <View style={gStyles.CanItemInformation}>
            <Text style={gStyles.CanPriceText}>{item.price}</Text>
            <TouchableHighlight onPress={() => onPressCan(item.id)}>
              <Image
                source={{
                  uri: 'https://www.pngplay.com/wp-content/uploads/7/Delete-Transparent-Background.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableHighlight>
          </View>
        </View>
      ))}
      <Button
        title={`Buy all $ ${sum}`}
        color="#848482"
        onPress={createTwoButtonAlert}
      />
    </View>
  )
}
