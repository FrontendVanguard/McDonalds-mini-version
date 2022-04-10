import React from 'react'
import { Image, Linking, TouchableHighlight, View, Text } from 'react-native'

import { gStyles } from './../../pages/styles'
export const Header = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginTop: -35
			}}
		>
			<View>
				<TouchableHighlight
					onPress={() => Linking.openURL('https://mcdonalds.pl/')}
				>
					<Image
						source={{
							uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png',
						}}
						style={{
							width: 51,
							height: 45,
						}}
					/>
				</TouchableHighlight>
			</View>
			<View>
				<Image
					source={{
						uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
					}}
					style={{
						width: 45,
						height: 45,
					}}
				/>

			</View>
		</View>
	)
}