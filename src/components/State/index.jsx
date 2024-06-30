import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const index = () => {
   const [name, setName] = useState("Bilal");
   const [age, setAge] = useState("18");
   const [email, setEmail] = useState("abc@gmail.com");

   let testName = () =>{
    setName('Bilal Mahar')
   }

   let testAge = () =>{
    setAge('19')
   }
   let testEmail = () =>{
    setEmail('abc2@gmial.com')
   }
  return (
    <View>
      <Text style={{fontSize:30, marginBottom: 20}}>State in R/N</Text>


      <Text style={{fontSize:20}}>Name : {name}</Text>

      <Text style={{fontSize:20}}>Age : {age}</Text>

      <Text style={{fontSize:20}}>Email : {email}</Text>

      <Button 
      title='Name' 
      onPress={testName}
      />
      <Button 
      title='Age'
      color={'green'}
      onPress={testAge}
      />
      <Button 
      title='Email'
      color={'red'}
      onPress={testEmail}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})