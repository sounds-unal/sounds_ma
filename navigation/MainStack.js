import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Play from './screens/Play'

import client from './../src/graphql/Client'


const Stack = createNativeStackNavigator()

const MainStack = () => {
  
  return (
    
    <NavigationContainer>
      
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
            name='Home'
            component={Home}
            />

            <Stack.Screen 
            name='Play'
            component={Play}/>
        </Stack.Navigator>
       
    </NavigationContainer>
    
  )
}

export default MainStack