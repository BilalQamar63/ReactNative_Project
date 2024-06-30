import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {

    const Users = [
        {
            id: 1,
            name: 'Bilal'
        },
        {
            id: 2,
            name: 'Arslan'
        },
        {
            id: 3,
            name: 'Muzamil'
        },
        {
            id: 4,
            name: 'Saqib'
        },
        {
            id: 5,
            name: 'Aliraza'
        },
        {
            id: 6,
            name: 'Rizwan'
        },
        {
            id: 7,
            name: 'Zeeshan'
        },
        {
            id: 8,
            name: 'Subhan'
        },
        {
            id: 9,
            name: 'Azhar'
        },
        {
            id: 10,
            name: 'Mahar'
        },
        {
            id: 11,
            name: 'Mahar2'
        },
        {
            id: 12,
            name: 'Mahar3'
        },
        {
            id: 13,
            name: 'Mahar4'
        },
    ]

    return (
        <View>
            <Text style={{ fontSize: 30 }}>List With Map Function</Text>
            <ScrollView>

                {
                    Users.map((item) => <Text style={styles.item} >{item.name}</Text>)
                }
            </ScrollView>


        </View>
    )
}

export default index

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        borderRadius: 10,
        borderColor: 'yellow',
        borderWidth: 3,
        padding: 10,
        margin: 3,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})