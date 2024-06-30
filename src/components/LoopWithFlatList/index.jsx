import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {

    const users = [
        {
            id: 1,
            name: 'Bilal',
            email: 'abc@gmail.com'
        },
        {
            id: 2,
            name: 'Arslan',
            email: 'xyz@gmail.com'
        },
        {
            id: 3,
            name: 'Aliraza',
            email: 'ali@gmail.com'
        },
    ]


    return (
        <View>
            <Text style={{ fontSize: 30 }}>Componenet With Flat_List</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UsersData item={item} /> }>

            </FlatList>

        </View>
    )
}


const UsersData = ({item}) => {
    return <View style={styles.box} >
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
    </View>
}



export default index

const styles = StyleSheet.create({
    item: {
        flex: 1,
        fontSize: 20,
        color: 'orange',
        margin: 10,
        textAlign: 'center',
        borderRadius: 4,
        backgroundColor: 'white'
    },
    box: {
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: 'orange',
        borderWidth: 2,
        marginBottom: 10,

    }
})