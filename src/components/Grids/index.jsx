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
            <Text style={{ fontSize: 40, marginBottom: 10 }} >Dynamic Grid</Text>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}
            >
                
                
                    {
                        Users.map((item) => <Text key={item.id} style={styles.item} >{item.name}</Text>)
                    }

               
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        fontSize: 25,
        color: 'blue',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        borderColor: 'yellow',
        borderWidth: 3,
        width: 120,
        height: 120,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})