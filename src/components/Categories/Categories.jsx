import React from 'react'
import {
  Text,
  Image,
  TouchableHighlight,
  View,
  Button,
  TouchableOpacity,
} from 'react-native'

import { COLORS, SIZES } from '../../constants/theme'
import { categories } from '../../constants/categories'

import { useNavigation } from '@react-navigation/native'

export const Categories = () => {
  const navigation = useNavigation()

  const loadScene = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <View style={{ paddingTop: 5 }}>
      <Text
        style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}
      >
        Hey,
      </Text>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>
        what's up?
      </Text>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {categories.map((cat, idx) => (
          <TouchableOpacity
            key={`categories ${idx}`}
            style={{
              width: '30%',
              marginBottom: 20,
            }}
          >
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              style={{
                height: 100,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: COLORS.gray,
              }}
              onPress={() => {
              loadScene(cat.name)
            }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}
                >
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
