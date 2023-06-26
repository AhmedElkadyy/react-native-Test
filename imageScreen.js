import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import  ImageDetails  from "../components/ImageDetails";

function ImageScreen({ navigation }) {
  return (
    <View>

<Text style={styles.TextStyle}> Image Screen</Text>
        <ImageDetails  title="Forest" imageSource={require('../assets/forest.jpg')} score={9} />
        <ImageDetails title="Beach" imageSource={require('../assets/beach.jpg')} score={7} />
        <ImageDetails   title="Mountain"    imageSource={require('../assets/mountain.jpg')} score={4} />
    
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





    


export default ImageScreen;