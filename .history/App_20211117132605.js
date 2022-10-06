import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';


class App extends Component
{
  render()
  {
    return(
      <View style={styles.display}>
        <Text style={[styles.textstyles]}>Harish Baria</Text>
        <Text>Mobile App Developer</Text>
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
  textstyles:{
    color:"#fff",
  }

})

export default App
