import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import User from '../Screens/UserScreen'
import Profile from '../Screens/ProfileScreen'


const Drawer_Navigate = () => {
    const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
        <Drawer_Navigate>
            <Drawer.Screen name='Home' component={Home} />
        </Drawer_Navigate>

    </NavigationContainer>
  )
}

export default Drawer_Navigate

const styles = StyleSheet.create({})