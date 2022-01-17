import React from 'react'
import {Text,StyleSheet,FlatList,View} from 'react-native'

const ListScreen = () => {
    const freinds = [
        {name: "freids #1", age: 20},
        {name: "freids #2",age: 25},
        {name: "freids #3",age: 35},
        {name: "freids #4",age: 45},
        {name: "freids #5",age: 55},
        {name: "freids #6",age: 60},
        {name: "freids #7",age: 60},
        {name: "freids #8",age: 20},
        {name: "freids #9",age: 20},
        {name: "freids #10",age: 20}
    ]
    return (
    <FlatList 
        data={freinds}
        
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>item.name}
        renderItem={({ item })=>{
            return <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
            </Text>;
        }}
    />);
};

const styles = StyleSheet.create({

    textStyle:{
        fontSize: 30,
        marginVertical:40
    }
});

export default ListScreen;