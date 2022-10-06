import React, { Component } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {Button} from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';

import Divider from 'react-native-divider';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {RippleProps} from 'react-native-material-ripple';


const QulityPar=(props)=>{
  return(
    <View style={{flexDirection:"row"}}>
    <Text style={{color:"#fff",fontSize:20}}>+ </Text>
    <Text style={{color:"#fff",fontSize:20}}>{props.name}</Text>
  </View>

  );
}


const DividerLaa=()=>{
  return <Divider borderColor="#fff" color="#fff" orientation="center">
    <Icon name="triangle-wave" size={30}/>
</Divider>

}

class App extends Component
{
  render()
  {
    return(
       <LinearGradient style={styles.display} 
       
       start={{x: 0, y: 1}} end={{x: 1, y: 0}}
      
       colors={['#c1c1c1','#212121']}>
     
      <View>
      
      

      <Image style={{alignSelf:"center",marginTop:8,borderRadius:1000}} source={{uri:"data:image/jpeg;base64,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"
      ,width:90,height:90}}/>
      
        <Text style={[styles.textstyles,{color:"#fff",fontSize:30,fontWeight:"bold"}]}>Harish Baria</Text>
        <Text style={[styles.textstyles,{fontSize:24}]}>Mobile App Developer</Text>

     <DividerLaa/>
      <Text style={{color:"#fff",fontSize:16,textAlign:"auto"}}>Hello Developers.I am a Mobile App and Web Developer with industry Experience.</Text>
      
         <DividerLaa/>
      <View>

    <View style={{margin:10}}>
    <QulityPar name="Experience"/>
       <QulityPar name="Education"/>
       <QulityPar name="Skill"/>
       <QulityPar name="Personal Info"/>
    </View>
       



        

          <View>
            <Button style={{backgroundColor:"#fff",padding:7,marginHorizontal:15,borderRadius:50}}>
            <Text style={{fontWeight:"bold",color:"#000"}}>Download CV</Text></Button>
          </View>

            <DividerLaa/>

       <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <Image style={{borderRadius:5,marginRight:-5}} source={{uri:"https://png.pngtree.com/element_our/png_detail/20181015/facebook-logo-icon-design-vector-png_124139.jpg",width:50,height:50}}/>
     
      <Image style={{borderRadius:5,backgroundColor:"#fff",marginLeft:-5}} source={{uri:"https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png",width:50,height:50}}/>
     
      </View>

      </View>

      
    
      </View>

        </LinearGradient>
      
    );
  }
}

const styles=StyleSheet.create({

  display:{
    flex:1,
    flexDirection:"column",
    margin:0
   
  },
  textstyles:{
    color:"#fff",
    textAlign:"center",
  }

})

export default App
