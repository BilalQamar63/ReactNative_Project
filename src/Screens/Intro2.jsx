import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Img02 from '../../assets/img02.jpg'
// import Icon from 'react-native-vector-icons/MaterialIcons'


const Intro2 = (props) => {
    return (
        <View>
            <View>
                <Image source={Img02} style={styles.img} />
            </View>


            <View style={styles.container}>
                <View>
                    <Text style={styles.heading01}>Task Management</Text>
                </View>

                <View>
                    <Text style={styles.heading02}>Work more <Text style={{
                    color: '#756EF3' }}>Structure</Text> and Organized
                    👌</Text>


                </View>


                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('SignUp')} style={styles.button}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 27,
                            fontWeight: '400',
                            color: '#002055'
                        }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity 
                    onPress={()=> props.navigation.navigate('Intro3')}
                    style={styles.button02}>

                      <Text>Next</Text>

                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Intro2

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
        marginTop: 19,
        color: '#756EF3',
        fontSize: 23,
        fontWeight: '500',
        marginLeft: '-25%',
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