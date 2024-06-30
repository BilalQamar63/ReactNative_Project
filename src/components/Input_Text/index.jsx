import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const index = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    return (
        <View>
            <Text
                style={{
                    fontSize: 30
                }}
            >
                Handle Text Input
            </Text>
            <Text
                style={{
                    fontSize: 30
                }}
            >
                Your Name is :{name}
            </Text>

            <Text
                style={{
                    fontSize: 30
                }}
            >
                Your Name is :{age}
            </Text>

            <Text
                style={{
                    fontSize: 30
                }}
            >
                Your Name is :{email}
            </Text>

            <TextInput 
            placeholder='Enter Your Name'
            style={styles.textBox}
            value={name}
            onChangeText={(text)=>setName(text)}
            />

            <TextInput 
            placeholder='Enter Your Age'
            style={styles.textBox}
            value={age}
            onChangeText={(text)=>setAge(text)}
            />

            <TextInput 
            placeholder='Enter Your Email'
            style={styles.textBox}
            value={email}
            onChangeText={(text)=>setEmail(text)}
            />

            <Button 
            title='clear input value'
            onPress={()=>setName('')}
            />

            <Button 
            title='clear input value'
            onPress={()=>setAge('')}
            />

            <Button 
            title='clear input value'
            onPress={()=>setEmail('')}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    textBox:{
        fontSize: 18,
        color:'white',
        borderWidth:5,
        borderRadius:10,
        borderColor: 'yellow',
        padding:10,
        margin:12,
        backgroundColor:'black'
    }
})