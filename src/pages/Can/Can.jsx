import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  Pressable,
  Alert,
} from 'react-native'

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
  }, '0.00')

  const deliveryPrice = (sum) => {
    if (sum < 5) return 3.49
    else if (sum < 10) return 1.99
    else if (sum > 10) return 0.49
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Purchase', `want to buy everything for ${(deliveryPrice(sum)+Number(sum)).toFixed(2)} ?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: () =>
          Alert.alert('Succes!', 'purchase completed successfully'),
      },
    ])

  const DeliveryItem = () => {
    return (
      <View style={gStyles.CanItemDelivery}>
        <View style={gStyles.CanItemInformation}>
          <Image
            source={{
              uri: 'https://www.seekpng.com/png/full/275-2753778_mcdonalds-delivery-transparent-logo.png',
            }}
            style={{
              width: 151,
              height: 40,
            }}
          />
        </View>
        <View style={gStyles.CanItemInformation}>
          <Text style={{ fontSize: 20, marginRight: 10}} >{deliveryPrice(sum)} $</Text>
        </View>
      </View>
    )
  }
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
      <DeliveryItem />
      <Button
        title={`Buy all $ ${(deliveryPrice(sum)+Number(sum)).toFixed(2)}`}
        color="#848482"
        onPress={createTwoButtonAlert}
      />
    </View>
  )
}
