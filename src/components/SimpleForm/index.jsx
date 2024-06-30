import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const index = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState(false)

    const resetData =()=>{
        setDisplay(false)
        setEmail('')
        setName('')
        setPassword('')
    }


    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center'
                }}
            >
                SimpleForm
            </Text>

            <TextInput
                placeholder='Enter Your Name'
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <TextInput
                placeholder='Enter Your Password'
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />

            <TextInput
                placeholder='Enter Your Email'
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />


            <View
                style={{ marginBottom: 10 }}
            >

                <Button
                    color={'red'}
                    title='Print Value'
                    onPress={()=>setDisplay(true)}
                />
            </View>
            <Button
                title='Clear Value'
                onPress={resetData}
            />

            <View>
                {
                    display ?
                        <View>
                            <Text style={styles.data}>User Name is: {name}</Text>
                            <Text style={styles.data}>User Password is: {password}</Text>
                            <Text style={styles.data}>User Email is: {email}</Text>
                        </View> : null
                }
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    input: {
        color: 'white',
        fontSize: 18,
        borderWidth: 4,
        borderColor: 'white',
        margin: 10,
        borderRadius: 5,
        padding: 10,
    },
    data:{
        fontSize:15,
        marginTop:10,
        textAlign:'center',
        margin:2,
        color:'white'

    }
})