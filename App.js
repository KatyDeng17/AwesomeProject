import React, { Component} from 'react';
import {
  AppRegistry, 
  Text, 
  View,
  StatusBar,
  StyleSheet,
  TouchableHighlight } from 'react-native';



export default class App extends Component {
  constructor(){
    super()
    this.state ={
      backgroundColor: 'blue'
    }
    //binding the methods: 
    this.changeColor = this.changeColor.bind(this)
  }

  //adding methods: 
  changeColor(backgroundColor){
    this.setState ({backgroundColor:backgroundColor})
  }

  render() {
 
    const {backgroundColor} = this.state;   //destructoring
    return (
      <View style = { [ styles.container, { backgroundColor } ] }>
        <TouchableHighlight 
          style = {styles.button} 
          onPress = {()=>this.changeColor('yellow')}
          underlayColor = 'orange' >

            <View style = {styles.row}>
            <View style= {[styles.sample, {backgroundColor: 'yellow'}]}/>
            <Text style = {styles.text}> yellow</Text>
            </View>

        </TouchableHighlight>
        {/* <Text style = { styles.button } onPress = {()=> this.changeColor('green')}> green</Text>
        <Text style = { styles.button } onPress ={() =>this.changeColor('red')}> red</Text> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#DDD',
    justifyContent: 'center'
  }, 
  button:{
     borderWidth:2,
     borderRadius: 10,
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

AppRegistry.registerComponent('AwesomeProject', ()=> App)


