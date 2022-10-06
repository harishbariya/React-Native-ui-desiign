import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';


class App extends Component
{
  render()
  {
    return(
      <View style={styles.display}>
        <Text style={[styles.textstyles,{color:"#fff",fontSize:30,fontWeight:"bold"}]}>Harish Baria</Text>
        <Text style={[styles.textstyles,{fontSize:24}]}>Mobile App Developer</Text>
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
    textAlign:"center",
  }

})

export default App
