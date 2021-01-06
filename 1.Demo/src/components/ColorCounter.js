import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button 
            title={`Increase ${color}`}
            onPress={() => onIncrease()}
            />
            
            <Button 
               title={`Decrease ${color}`}
               onPress={() => onDecrease()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
 
})

export default ColorCounter