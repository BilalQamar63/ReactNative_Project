import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Component from './src/components/CompanyData'
import Button from './src/components/Button'
import State from './src/components/State'
import Style from './src/components/Basic_Style'
import Props from './src/components/Props'
import GetInput from './src/components/Input_Text'
import SimpleForm from './src/components/SimpleForm'
import FlatList from './src/components/FlatList'
import ListWithMap from './src/components/ListWithMap'
import Grids from './src/components/Grids'
import LoopWithFlatList from './src/components/LoopWithFlatList'
import SecitonList from './src/components/SectionList'
import ClassComponent from './src/components/ClassComponent'

const App = () => {
  return (
    <View>
      {/* <Component/> */}
      {/* <Button /> */}
      {/* <State /> */}
      {/* <Props /> */}
      {/* <Style/> */}
      {/* <GetInput /> */}
      {/* <SimpleForm /> */}
      {/* <FlatList /> */}
      {/* <ListWithMap /> */}
      {/* <Grids /> */}
      {/* <LoopWithFlatList /> */}
      {/* <SecitonList /> */}
      <ClassComponent />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})