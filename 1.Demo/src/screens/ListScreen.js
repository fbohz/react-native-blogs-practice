import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 21 },
        { name: 'Friend #3', age: 22 },
        { name: 'Friend #4', age: 23 },
        { name: 'Friend #5', age: 24 },
        { name: 'Friend #6', age: 25 },
        { name: 'Friend #7', age: 26 },
        { name: 'Friend #8', age: 27 },
        { name: 'Friend #9', age: 28 }
      ];

    return (
        //  <Text>List Screen</Text> 
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            data={friends}
            keyExtractor={ item  => item.name }
            renderItem={({ item }) => {
               // element is a large object with a lot of information so we limit to item property with destructuring.
               return <Text style={styles.textStyle}> {item.name} -  Age {item.age} </Text>
            }}
        >

        </FlatList>
         
    )
        
}

const styles = StyleSheet.create({
    // gives list as tall enough to go to bottom edge.
    textStyle: {
        marginVertical: 30
    }
})

export default ListScreen