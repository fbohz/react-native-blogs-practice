import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child 1</Text>
            <Text style={styles.textStyle2}>Child 2</Text>
            <Text style={styles.textStyle3}>Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: "flex-start",
        // flexDirection: 'row',
        // justifyContent: "center",
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        margin: 20,
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'red',
        margin: 20,
        flex: 1, 
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'red',
        margin: 20,
    },
 
})

export default BoxScreen