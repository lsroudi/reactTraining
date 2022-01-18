import React,{useState} from 'react'
import {StyleSheet,Button,View,FlatList} from 'react-native'
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {

    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

    const setColor= (color,change) =>{
        if(['red','green','blue'].includes(color)){
            var col = eval(color);
            if(col + change > 255 || col + change< 0){
                return;
            }

            var part2 = color.toString();
            var part = "set"+part2.charAt(0).toUpperCase() + part2.slice(1);
            console.log(part)
            var cl = part+"("+(col+change)+")";
            console.log(cl);
            eval(cl);
            
        }

              

    };
    console.log(red)
    return (
    <View>
        <ColorCounter 
            onIncrease={() => {setColor('red',11)} } 
            onDecrease={() => {setColor('red',-11)} } 
            color ="Red" 
        />
        <ColorCounter 
            onIncrease={() => setColor('green',11) } 
            onDecrease={() => setColor('green',-11) } 
            color ="Green" 
        />
        <ColorCounter 
            onIncrease={() => setColor('blue',11) } 
            onDecrease={() => setColor('blue',-11) } 
            color ="Blue" 
        />   
        <View style={{height:200,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>   
    </View>
    );
};

const styles = StyleSheet.create({

    textStyle:{
        fontSize: 50
    }
});

export default SquareScreen;