import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/login'
import Main from './src/screens/main'


const AuthStack = createStackNavigator()

function Stack() { //tanto faz usar class ou function

  return (

    <NavigationContainer>

      <AuthStack.Navigator
      //headerMode='none'
      >

        <AuthStack.Screen name='Login' component={Login} />
        <AuthStack.Screen name='Main' component={Main} />

      </AuthStack.Navigator>

    </NavigationContainer>

  )

}

export default Stack

