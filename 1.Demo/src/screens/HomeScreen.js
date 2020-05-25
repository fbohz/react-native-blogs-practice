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
        <Text>ListScreen (Touchable Opacity)</Text>
      </TouchableOpacity>
      <Button 
        title="Image" 
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Counter" 
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Color" 
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title="Square" 
        onPress={() => navigation.navigate('Square')}
      />
      <Button 
        title="Text" 
        onPress={() => navigation.navigate('Text')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
