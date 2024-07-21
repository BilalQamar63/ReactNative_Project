import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Img03 from '../../assets/img03.jpg'

const Intro = (props) => {
    return (
        <View>
            <View>
                <Image source={Img03} style={styles.img} />
            </View>


            <View style={styles.container}>
                <View>
                    <Text style={styles.heading01}>Task Management</Text>
                </View>

                <View>
                    <Text style={styles.heading02}>Let's create a <Text style={{ color: '#6756FF' }}>space</Text> for your workflows</Text>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button} 
                    onPress={()=> props.navigation.navigate('SignUp')}
                    >
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 27,
                            fontWeight: '400',
                            color: 'black'
                        }}>
                            Skip
                        </Text>
                    </TouchableOpacity>




                    <TouchableOpacity onPress={()=> props.navigation.navigate('Intro2')} style={styles.button02}>

                        <Text>Next</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    img: {
        width: '100%',
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center'
    },
    heading01: {
        color: '#6756FF',
        fontSize: 28,
        fontWeight: '600',
        marginLeft: '-17%',
        marginBottom: 5,
    },
    heading02: {
        color: 'black',
        fontWeight: '500',
        fontSize: 45,
        textAlign: 'left',
        marginLeft: 29
    },
    button: {
        alignItems: 'flex-start',
        padding: 20,
        width: 300,
        marginTop: '7%',
    },
    button02: {
        backgroundColor: '#6756FF',
        // padding: 0,
        width: 60,
        height: 60,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 30,
        borderRadius: 30,
        // marginRight: '-50%',
        fontSize: 60,
    },


})