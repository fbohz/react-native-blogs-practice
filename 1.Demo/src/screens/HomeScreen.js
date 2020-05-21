import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello Life!</Text>
      <Button 
        title="Components" 
        onPress={() => navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>ListScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
