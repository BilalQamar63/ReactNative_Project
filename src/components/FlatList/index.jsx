import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {

  const Users = [
    {
      id: 1,
      name: 'Bilal'
    },
    {
      id: 2,
      name: 'Arslan'
    },
    {
      id: 3,
      name: 'Muzamil'
    },
    {
      id: 4,
      name: 'Saqib'
    },
    {
      id: 5,
      name: 'Aliraza'
    },
  ]



  return (
    <View>
      <Text style={{ fontSize: 40 }}>Flat list in React Native</Text>


      <FlatList
        data={Users}
        renderItem={({ item }) => <Text style={styles.item} >{item.name}</Text>}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    borderRadius:10,
    borderColor:'yellow',
    borderWidth:3,
    padding:10,
    margin:3,
    backgroundColor:'white',
    textAlign:'center',
    textAlignVertical:'center'
  }
})