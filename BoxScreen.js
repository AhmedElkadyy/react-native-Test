import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'

function BoxScreen({ navigation }) {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.view1} />
            <View style={styles.view2} />
            <View style={styles.view3} />


        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
      justifyContent: 'space-between'


    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',

       
    }
    ,
    view1: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    view2: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        marginTop: 50
    },
    view3: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }


})

export default BoxScreen
