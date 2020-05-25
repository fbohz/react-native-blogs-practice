import React, { useState } from "react";
import { Button, StyleSheet, View, Text, FlatList } from "react-native";

const ColorScreen = () => {
    // const color = randomRGB()
    console.log(colors);

    const [ colors, setColors ] = useState([])
    return (
        <View>
            <Button title="Add Color"  onPress={() => {
                setColors([...colors, randomRGB()])
            }}/>
            {/* <View 
                style={{ height: 100, width: 100, backgroundColor: color}}
            /> */}
            {/* <Text>Current Color: {color}</Text> */}
            <FlatList 
                keyExtractor={item => item }
                data={colors}
                // this is a fn that is called for every element inside the data array you specified.
                renderItem={({ item }) => {
                   return <View> 
                            <View style={{ height: 100, width: 100, backgroundColor: item}}/>
                            <Text>Color: {item}</Text>
                        </View> 
                } }
            />
        </View>
    )
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
 
})

export default ColorScreen