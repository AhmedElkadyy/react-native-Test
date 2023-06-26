import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

function DetailsScreen({ navigation }) {

    const Hello = 'Details Screen'

  return (
    <View style={styles.container}>
      <Text>{Hello}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
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

export default DetailsScreen;



