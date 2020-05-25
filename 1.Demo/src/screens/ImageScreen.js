import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Beach" imageSource={require('../../assets/images/beach.jpg')} score={5} />
            <ImageDetail title="Mountain" imageSource={require('../../assets/images/mountain.jpg')} score={10}/>
            <ImageDetail title="Forest" imageSource={require('../../assets/images/forest.jpg')} score={7} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen