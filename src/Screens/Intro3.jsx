import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Img04 from '../../assets/img04.jpg'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import Icon2 from 'react-native-vector-icons/FontAwesome'



const Intro3 = (props) => {
    return (
        <View>
            <View>
                <Image source={Img04} style={styles.img} />
            </View>


            <View style={styles.container}>
                <View>
                    <Text style={styles.heading01}>Task Management</Text>
                </View>

                <View>
                    <Text style={styles.heading02}>Mange Your  <Text style={{ color: 'silver' }}>Tasks</Text> quikly for Results ✌️
                    </Text>


                </View>


                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 27,
                            fontWeight: '400',
                            color: 'black'
                        }}
                        onPress={()=> props.navigation.navigate('SignUp')}
                        >
                            Skip
                        </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.button02}
                    onPress={()=> props.navigation.navigate('Screen02')}
                    >
                       
                        {/* <Icon
                            style={{fontSize:50,textAlign:'right',
                            color:'white'
                            }}
                            name="arrow-forward"
                            
                        /> */}
                        <Text>Next</Text>
                        
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Intro3

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
        color: 'silver',
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