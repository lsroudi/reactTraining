import React from 'react';
import { Text, StyleSheet, View, Button,TouchableOpacity,Image } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
    return (
        <View>
            <Image 
                source={props.imageSource} 
            />
            <Text>{props.title} - {props.imageScore}</Text>  
          

    </View>
    );
};

const styleshome = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;