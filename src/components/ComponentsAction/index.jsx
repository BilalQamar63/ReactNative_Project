import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import Loading from '../Loading'
import TextForm from '../TextForm'
import FlatList02 from '../FlatList02'

const ComponentsAction = () => {
  const [loading,setLoading] = useState(false)
  const [form,setForm] = useState(false)
  const [list,setList] = useState(false)



  function showComponents(title){
    if(title == 'loading'){
      setLoading(true)
      setForm(false)
      setList(false)
    }else if(title == 'form'){
      setForm(true)
      setLoading(false)
      setList(false)
    }else if(title == 'list'){
      setList(true)
      setForm(false)
      setLoading(false)
    } else{
      setLoading(true)
      setForm(true)
      setList(true)
    }
  }





  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <View>
        <Text style={styles.container}>Demo of Components</Text>
      </View>


      <View>
        <Button onPress={()=>showComponents('loading')} style={[styles.button, { backgroundColor: 'red' }]} title='Show Loading' textColor='white'>Show Loading</Button>
        <Button onPress={()=>showComponents('form')} style={[styles.button, { backgroundColor: 'blue' }]} title='Show Form' textColor='white'>Show Form</Button>
        <Button onPress={()=>showComponents('list')} style={[styles.button, { backgroundColor: 'green' }]} title='Show Flatlist' textColor='white'>Show Flatlist</Button>
        <Button onPress={()=>showComponents('')} style={[styles.button, { backgroundColor: 'black', }]} title='Show all' textColor='white' >Show All</Button>
      </View>

      <View>
        {loading? <Loading /> : ''}
        {form? <TextForm /> : ''}
        {list? <FlatList02 /> : ''}
      </View>
    </View>

  )
}

export default ComponentsAction

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 24,
    color: 'black'
  },
  button: {
    margin: 5,
    padding: 10,

  }
})