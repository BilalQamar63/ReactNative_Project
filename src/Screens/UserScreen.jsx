import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>React Navigation</Text>
      <Text style={styles.heading}>This is User Screen</Text>

    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        alignItems:'center'
    }
})