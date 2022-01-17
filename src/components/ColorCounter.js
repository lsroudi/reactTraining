import React from 'react'
import {StyleSheet,Button,View,Text} from 'react-native'


const ColorCounter = ({color}) => {


    return (
    <View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`} />
        <Button title={`Decrease ${color}`} />
    </View>
    );
};


const styles = StyleSheet.create({

    textStyle:{
        fontSize: 50
    }
});

export default ColorCounter;