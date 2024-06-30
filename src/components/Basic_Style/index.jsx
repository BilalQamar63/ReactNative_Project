import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Exstyles from '../../../style'

const index = () => {
  return (
    <View>
      <Text style={{
        fontSize: 30,
        marginBottom: 20,
        color: 'white'
      }}
      >
        Basic Style in React-Native
      </Text>

      <Text style={styles.textBox}
      >
        Basic Style in React-Native
      </Text>

      <Text style={styles.textBox}
      >
        Basic Style in React-Native
      </Text>

      <Text style={Exstyles.textBox2}
      >
        Basic Style in Exfile
      </Text>

      <Text style={[styles.textBox,Exstyles.textBox2,{color:'green'}]}
      >
        Basic Style in Exfile
      </Text>



    </View>
  )
}

export default index

const styles = StyleSheet.create({
  textBox:{
    color:'yellow',
    fontSize:30,
    backgroundColor:'orange',
    marginBottom:10,
    padding:10,
    borderRadius:20,
    height:100,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'yellow',
    borderWidth:5
  }
})