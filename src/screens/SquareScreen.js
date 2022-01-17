import React,{useState} from 'react'
import {StyleSheet,Button,View,FlatList} from 'react-native'
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {

    const[colors,setColors]=useState([]);
    console.log(colors)
    return (
    <View>
        <ColorCounter color ="Red" />
        <ColorCounter color ="Blue"/>
        <ColorCounter color ="Green"/>
    </View>
    );
};

const randomRGB = ()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({

    textStyle:{
        fontSize: 50
    }
});

export default SquareScreen;