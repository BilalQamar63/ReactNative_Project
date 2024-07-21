import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Feather from 'react-native-vector-icons/Feather'
import user01 from '../../assets/user01.png'
import user02 from '../../assets/user02.png'
import user03 from '../../assets/user03.png'

const Screen01 = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                {/* <Ionicons style={{ fontSize: 30, textAlign: 'left', paddingTop: 18, color: 'black' }} name="grid-outline" /> */}


                <Text style={styles.heading01}>
                    Friday,26
                </Text>

                {/* <Feather
                name='bell'
                style={{color:'black',fontSize:30,marginTop:'8%',margin:10}} /> */}
                    
                

            </View>



            <View>
                <Text style={styles.heading01}>
                    Let's make  a habbits together 🙌
                </Text>
            </View>


            <View style={styles.card}>

                <Text style={styles.heading02}>Application Design</Text>
                <Text>UI design Kit</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <View style={{ flexDirection: 'row', marginTop:14,}}>
                        <Image
                            source={user01}
                        />
                        <Image
                            source={user02}
                        />
                        <Image
                            source={user03}
                        />
                    </View>

                    <View>
                        <View>
                            <Text>Progress</Text>

                            <Text style={styles.bar}>......</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={{color:'white'}}>50/80</Text>
                    </View>
                <View>

                </View>
                </View>


            </View>
        </View>
    )
}

export default Screen01

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    main: {
        width: '80%',
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 10,

    },
    icon: {
        color: '#002055',
        fontSize: 40,

    },
    day: {
        color: '#002055',
        fontSize: 35

    },
    heading01: {
        margin: 20,
        color: '#002055',
        fontSize: 40,
        fontWeight: '400'
    },
    card: {
        backgroundColor: '#756EF3',
        padding: 45,
        margin: 20,
        borderRadius: 10,
    },
    heading02: {
        color: 'white',
        fontSize: 28,

    },
    bar: {
        backgroundColor:'white',
        width:60,
        height:5,
        borderRadius:4,
        marginTop:6
    },
    main:{

    }
})