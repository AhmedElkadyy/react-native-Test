import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'
import { TextInput } from 'react-native'
import { useState } from 'react'

function TextScreen({ navigation }) {
   const [password, setPassword] = useState('')

    return (
        <View>
            <Text style={styles.TextStyle}>Text Screen</Text>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 5 ? <Text>Password must be 4 characters</Text> : null}

          


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        justifyContent: 'center'
    },
    TextStyle: {
        fontSize: 40
    }, 
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }



})

export default TextScreen




