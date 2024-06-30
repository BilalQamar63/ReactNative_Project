import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {

    const users = [
        {
            id: 1,
            name: "Bilal",
            data: ['Java', 'PHP', 'Angular']
        },
        {
            id: 2,
            name: "Arslan",
            data: ['Javascript', 'Python', 'Angular']
        },
        {
            id: 3,
            name: "Saqib",
            data: ['Java', 'Javascript', 'Python']
        },
        {
            id: 4,
            name: "Sadiq",
            data: ['Java', 'PHP', 'bootstrap']
        },
        {
            id: 5,
            name: "Sajid",
            data: ['Javascript', 'python', 'React.js']
        },
    ]



    return (




        <View>
            <Text style={{ fontSize: 30 }} >Section list in React-native</Text>

            <SectionList
                sections={users}
                renderSectionHeader={({ section: { name } }) => <Text style={{ fontSize: 22, color:'red',}}>{name}</Text>}
                renderItem={({ item }) => <Text style={{ fontSize: 25,marginLeft:20 }}
                >{item}</Text>
                }
            >

            </SectionList>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})