import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Index2 from './index2'

class index extends Component{

    fruit=()=>{
        console.warn('Apple')
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:30,color:'white'}} >
                    Class Components
                </Text>

                <Button title='Press me' onPress={this.fruit}/>

                <Index2 />
            </View>
        )
    }
}

export default index

const styles = StyleSheet.create({})