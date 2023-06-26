import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { useState } from "react";

function SquareScreen({ navigation }) {

    var [red, setRed] = useState(0);
    var [green, setGreen] = useState(0);
    var [blue, setBlue] = useState(0);

    function increaseRed() {
        if (red < 255) {
            setRed(red + 10);    
        }
    }
    function decreaseRed() {
        if (red > 0) {
            setRed(red - 10);
        }
    }
    function increaseGreen() {
        if (green < 255) {

            setGreen(green + 10);
        }
    }
    function decreaseGreen() {
        if (green > 0) {
            setGreen(green - 10);
        }
    }
    function increaseBlue() {
        if (blue < 255) {
            setBlue(blue + 10);
        }
    }
    function decreaseBlue() {

        if (blue > 0) {
            setBlue(blue - 10);
        }
    }
        


    return (
        <View>

            <Text style={styles.TextStyle}> Square Screen</Text>

            <Text>RED</Text>
            <Button title="Increase Red" onPress={() => increaseRed()} />
            <Button title="Decrease Red" onPress={() => decreaseRed()} />
          
            <Text>GREEN</Text>
            <Button title="Increase Green" onPress={() => increaseGreen()} />
            <Button title="Decrease Green" onPress={() => decreaseGreen()} />

            <Text>BLUE</Text>
            <Button title="increase Blue" onPress={() => increaseBlue()} />
            <Button title="Decrease Blue" onPress={() => decreaseBlue()} />


            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />



                
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


export default SquareScreen;

