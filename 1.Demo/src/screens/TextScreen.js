import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] =  useState('')
    const [psw, setPsw] =  useState('')
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput style={styles.input}
                autoCapitalize="none"
                autoCorrect="none"
                value={name}
                onChangeText={(newValue) => setName(newValue) }
            />
            <Text>My Name is: {name}</Text>

            <Text>Enter Password:</Text>
            <TextInput style={styles.input}
                autoCapitalize="none"
                autoCorrect="none"
                value={psw}
                onChangeText={(newValue) => setPsw(newValue) }
            />
            {psw.length < 4 ? <Text>Password must be at least 4 characters </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default TextScreen