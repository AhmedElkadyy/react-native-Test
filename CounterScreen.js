import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import  ImageDetails  from "../components/ImageDetails";
import { useState } from "react";


function CounterScreen({ navigation }) {

    const [counter, setCounter] = useState(0);

    function increase() {
       setCounter(counter + 1);
        console.log(counter);
    }
    function decrease() {
         setCounter(counter - 1);
        console.log(counter);
    }

  return (
    <View>

<Text style={styles.TextStyle}> Counter Screen</Text>

<Button title="Increase" onPress={() => increase()} />
<Button title="Decrease" onPress={() => decrease()} />
<Text>Current Count: {counter}</Text>



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

export default CounterScreen;
