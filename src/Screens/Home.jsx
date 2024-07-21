import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View>
      <Text style={styles.heading}>React Navigation</Text>
      <Text style={styles.heading}>This is Home Screen</Text>

      <Button title='Profile'
      onPress={()=> props.navigation.navigate('Profile')}
      />

    </View>
  )
}

export default Home

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