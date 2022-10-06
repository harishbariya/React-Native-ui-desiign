import React, { Component } from 'react';
import {View,Text} from 'react-native';


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
    backgroundColor:"#fff",
    marginHorizontal:10,
    marginTop:5,
  },

})

export default App
