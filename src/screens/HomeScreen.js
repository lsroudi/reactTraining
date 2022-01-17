import React from 'react';
import { Text, StyleSheet, View, Button,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

  return <View>
          <Text style={styleshome.text}>Hi There</Text>  
          <Button 
            onPress={()=>navigation.navigate('Components')}
            title="Go to Components Demo" 
          />
          <Button 
            onPress={()=>navigation.navigate('List')}
            title="Go to List Demo" 
          />     
          <Button 
            onPress={()=>navigation.navigate('Image')}
            title="Go to Image Demo" 
          />                 
          <Button 
            onPress={()=>navigation.navigate('Counter')}
            title="Go to Counter Demo" 
          /> 
          <Button 
            onPress={()=>navigation.navigate('Color')}
            title="Go to Color Demo" 
          /> 
          <Button 
            onPress={()=>navigation.navigate('Square')}
            title="Go to Square Demo" 
          />           
    </View>
};

const styleshome = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;