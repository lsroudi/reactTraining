import React from 'react';
import { Text, StyleSheet, View, Button,TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

  return (
    <View>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/beach.jpg')} 
                imageScore= "Image Score - 9"
            />
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/forest.jpg')} 
                imageScore= "Image Score - 11"
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
                imageScore= "Image Score - 12"
            />
    </View>
  );
};

const styleshome = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
