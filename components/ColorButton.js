import React, {Component} from 'react'; 
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'; 

const ColorButton = ({backgroundColor, onSelect=f=>f })=>(
    <TouchableHighlight 
          style = {styles.button} 
          onPress = {()=> onSelect(backgroundColor)}
          underlayColor = 'orange' >

            <View style = {styles.row}>
              <View style= {[styles.sample, {backgroundColor}]} />
              <Text style = {styles.text}> {backgroundColor} </Text>
            </View>

    </TouchableHighlight>
)
    


const styles = StyleSheet.create({
  button:{
     borderWidth:2,
     borderRadius: 10,
     borderColor:'gray',
     padding: 10,
     margin: 10,
     alignSelf:'stretch',
     backgroundColor: 'rgba(255, 255,255,.8)'
  },
  row:{
    flexDirection: 'row',
    alignItems:'center',
   

  },
  sample:{
    height: 20,
    width: 20,
    borderRadius:10,
    margin: 5,
    backgroundColor: 'white',

  },
  text:{
    fontSize: 22,
    fontWeight:'bold'
  }
  
})

export default ColorButton;