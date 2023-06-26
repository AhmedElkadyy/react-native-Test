import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";



function ColorScreen({ navigation }) {
const [colors, setColors] = useState([]);

function addColor() {
    setColors([...colors, randomRgb()]);
}

function randomRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}


return (
    <View>
        <Text style={styles.TextStyle}>Color Screen</Text>
        <Button title="Add a Color" onPress={addColor} />
      
        <FlatList
            keyExtractor={(item) => item}
            data={colors}
            renderItem={({ item }) => {
                return (
                    <View
                        style={{ height: 100, width: 100, backgroundColor: item }}
                    />
                );
            }}

        />


    </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        justifyContent: 'center'
    },
    TextStyle: {

        fontSize: 40
    }

    });

    export default ColorScreen;


