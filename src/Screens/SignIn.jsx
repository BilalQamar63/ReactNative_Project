
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/EvilIcons';
import Google from '../../assets/google.png'
import Apple from '../../assets/Apple.png'



const SignIn = (props) => {
    return (
        <View
            style={styles.container}>


            <View>
                {/* <Icon style={{ fontSize: 60, textAlign: 'left', paddingTop: 18, color: 'black' }} name="arrow-left" /> */}


                <Text style={styles.heading01}>
                    Sign In
                </Text>


                <Text style={styles.heading02}>
                    Welcome Back
                </Text>


                <Text style={styles.heading03}>
                    Please Enter your email address and password for login

                </Text>

            </View>


            <View style={styles.form}>


                <TextInput
                    placeholder="  Enter  your Email"
                    placeholderTextColor={'black'}
                    style={styles.Input} />


                <TextInput
                    placeholder="  Enter your Password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                    style={styles.Input} />

                <Text style={{ color: '#002055', textAlign: 'right', fontweight: 500, marginRight: 10 }}>
                    Forgot Password?
                </Text>


                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>

                            Sign In

                        </Text>


                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={styles.heading04}>SignIn With</Text>

                    <View style={styles.icons}>
                        <Image source={Apple} />
                        <Image source={Google} />
                    </View>

                    <Text style={styles.heading04}>Not Register Yet ? 
                        <TouchableOpacity 
                        onPress={()=> props.navigation.navigate('SignUp')}
                        >
                        <Text style={styles.signIn}>
                            Sign Up
                        </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        color: 'black'
    },
    heading01: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: '400',
        marginBottom: 20,
        marginTop: '-10%'

    },
    heading02: {
        marginLeft: 30,
        textAlign: 'left',
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        margin: 9,

    },
    heading03: {
        marginLeft: 30,
        textAlign: 'left',
        color: 'silver',
        fontSize: 22,
        fontWeight: '400',
        margin: 9,

    },
    heading04: {
        marginLeft: 30,
        textAlign: 'center',
        color: 'silver',
        fontSize: 22,
        fontWeight: '400',
        margin: 9,

    },
    form: {
        paddingTop: 30,
    },
    Text: {
        color: 'black',
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center',
    },
    Input: {
        padding: 20,
        marginTop: 20,
        fontSize: 20,
        margin: 10,
        width: '90%',
        color: 'black',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'black',
    },
    button: {
        backgroundColor: '#756EF3',
        padding: 15,
        width: '92%',
        marginTop: 10,
        borderRadius: 20,
    },

    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-evenly'
        // width:20,
    },
    signIn: {
        fontfamily: 'Poppins',
        fontsize: '14px',
        fontweight: 600,
        // lineheight: '14px',
        // textalign: 'right',
        color:'#756EF3'

    }
});
export default SignIn;
