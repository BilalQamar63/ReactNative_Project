import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const index = () => {
    const [name,setName]= useState('Bilal mahar')

  return (
    <View>
        <Text style={{fontSize:30, marginBottom: 20}}>Props in React Native</Text>

        <Text style={{fontSize:20, marginBottom: 20}}>Parents Component</Text>

        <Button title='Update Props' onPress={()=>setName('Bilal Qamar')}/>
        <User name={name} age={19}/>
    </View>
  )
}

const User = (props) =>{
    console.warn(props.name)
    return(
        <View style={{backgroundColor: 'green', padding:5}} >
              <Text style={{fontSize:20, marginBottom: 20}}>Child Component </Text>
              <Text style={{fontSize:20, marginBottom: 20}}>Name : {props.name}</Text>
              <Text style={{fontSize:20, marginBottom: 20}}>Age : {props.age} </Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})