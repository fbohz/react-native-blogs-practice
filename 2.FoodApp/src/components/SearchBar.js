import React from "react";
import { TextInpur, StyleSheet, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput placeholder="Search" style={styles.inputStyle}
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row', 
    },
    inputStyle: {
        // borderColor: 'black',
        // borderTopWidth: 1, 
        flex: 1, 
        fontSize: 18, 
    },
    iconStyle: {
        fontSize: 35, 
        alignSelf: 'center',
        marginHorizontal: 15, 
    },
})

export default SearchBar