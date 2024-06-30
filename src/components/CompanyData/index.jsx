import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 30 }}>Components</Text>
      <UserData />
      <UserData2 />
      <UserData3 />
      <UserData4 />

    </View>
  )
}


const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Name : Bilal</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }} >Age : 19</Text>
      <Text style={{ fontSize: 20, marginBottom: 30 }} >email : abc@gmail.com</Text>
    </View>

  )
}

const UserData2 = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Name : Arslan</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }} >Age : 18</Text>
      <Text style={{ fontSize: 20, marginBottom: 30 }} >email : abc1@gmail.com</Text>
    </View>

  )
}


const UserData3 = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Name : Aliraza</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }} >Age : 18</Text>
      <Text style={{ fontSize: 20, marginBottom: 30 }} >email : abc3@gmail.com</Text>
    </View>

  )
}


const UserData4 = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Name : Junaid</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }} >Age : 21</Text>
      <Text style={{ fontSize: 20, marginBottom: 30 }} >email : abc4@gmail.com</Text>
    </View>

  )
}

export default index

