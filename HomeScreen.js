import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';



function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
            />
            <Button
            title="Go to List"
            onPress={() => navigation.navigate('List')}
            />
            <Button
            title="Go to Image"
            onPress={() => navigation.navigate('Image')}
            />
            <Button
            title="Go to Counter"
            onPress={() => navigation.navigate('Counter')}
            />
            <Button
            title="Go to Color"
            onPress={() => navigation.navigate('Color')}
            />

            <Button
            title="Go to Square"
            onPress={() => navigation.navigate('Square')}
            />

            <Button
            title="Go to Text"
            onPress={() => navigation.navigate('Text')}
            />

            <Button
            title="Go to Box"
            onPress={() => navigation.navigate('Box')}
            />
            

            
            
            
            

            
        </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
    });

export default HomeScreen;   