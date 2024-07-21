import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const ProfileScreen = (props) => {
  return (
    <View>
      <Text style={styles.heading}>React Navigation</Text>
      <Text style={styles.heading}>This is Profile Screen</Text>
      <Button title='User'
      onPress={()=> props.navigation.navigate('User')}
      />

    </View>
  )
}

export default ProfileScreen

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