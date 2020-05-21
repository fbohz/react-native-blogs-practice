import React from "react";
import { Text, View, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    const name = "Pipo"
    return (
        <View>
            <Text style={styles.textStyle}>Hola!</Text>
            <Text style={styles.subHeading}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeading: {
        fontSize: 20
    }
})

export default ComponentsScreen