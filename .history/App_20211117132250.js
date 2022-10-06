import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';


class App extends Component
{
  render()
  {
    return(
      <View style={styles.display}>
        <Text>Alia Bhatt</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({

  display:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"#2d3436",
   
  },

})

export default App
