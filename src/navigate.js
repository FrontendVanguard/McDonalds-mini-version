import React from 'react'

import { Main } from './pages/Main'

import { Combo } from './pages/Combo'
import { BurgersSandwiches } from './pages/BurgersSandwiches'
import { HappyMeal } from './pages/HappyMeal'
import { Beverages } from './pages/Beverages'
import { Chicken } from './pages/Chicken'
import { SnacksSlides } from './pages/SnacksSlides'
import { Can } from './pages/Can'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Navigate() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Main"
                component={Main}
            />
            <Stack.Screen 
                name="Combo Meal"
                component={Combo}
            />    
            <Stack.Screen 
                name="Burgers Sandwiches"
                component={BurgersSandwiches}
            />    
            <Stack.Screen 
                name="Happy Meal"
                component={HappyMeal}
            />        
            <Stack.Screen 
                name="Beverages"
                component={Beverages}
            />    
            <Stack.Screen 
                name="Chicken"
                component={Chicken}
            />    
            <Stack.Screen 
                name="Snacks Slides"
                component={SnacksSlides}
            /> 
            <Stack.Screen 
                name="Can"
                component={Can}
            />  
        </Stack.Navigator>
    </NavigationContainer>
    )
}