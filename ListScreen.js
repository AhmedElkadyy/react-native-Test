import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { FlatList } from "react-native";


function ListScreen    ({ navigation }) {

   const freinds = [    { name: 'Friend #1', age: 20 }, 
                        { name: 'Friend #2', age: 45 },
                        { name: 'Friend #3', age: 32 },
                        { name: 'Friend #4', age: 27 },
                        { name: 'Friend #5', age: 53 },
                        { name: 'Friend #6', age: 30 },
                        { name: 'Friend #7', age: 20 },
                        { name: 'Friend #8', age: 45 },
   ];

  return (
    <View style={styles.container}>
     
      <Text>List Screen</Text>
        <FlatList  data={freinds} renderItem={({ item }) => {
            return <Text style={styles.TextStyle}>{item.name} - Age {item.age}</Text>
        }}  keyExtractor={(freinds) => freinds.name}  
        showsVerticalScrollIndicator={false} />
        

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    TextStyle: {
        marginVertical: 50
    }

    });



export default ListScreen;