import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const index = () => {
    let data = 100

    const fruit = (val) =>{
        data =20
        console.warn(data)
    }
    const fruit2 = () =>{
        console.warn(data)
    }

  return (
    <View>
      <Text style={{fontSize:30}}>Button</Text>
      <Text style={{fontSize:20}}>Data: {data}</Text>

      <Button title='Fruit'
      onPress={fruit}
      color={'green'}
      />
      
      
      <Button title='Fruit2'
      onPress={()=>fruit2('Hello World')}
      color={'purple'}
      
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})