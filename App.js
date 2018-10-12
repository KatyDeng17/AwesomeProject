import React, { Component} from 'react';
import {
  AppRegistry, 
  Text, 
  View,
  StatusBar,
  StyleSheet } from 'react-native';



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
        <View style = {styles.row}>
         <View style= {[styles.sample, {backgroundColor: 'yellow'}]}/>
         <Text style = {styles.text}> yellow</Text>
        </View>
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
     fontSize: 30,
     padding: 10,
     margin: 10,
     alignSelf:'stretch',
     textAlign: 'center'
  },
  row:{
    flexDirection: 'row',
    alignItems:'center',
    borderWidth: 1

  },
  sample:{
    height: 20,
    width: 20,
    borderRadius:10,
    margin: 5,
    backgroundColor: 'white',

  },
  text:{
    fontSize: 23,
    fontWeight:'bold'
  }
  


})

AppRegistry.registerComponent('AwesomeProject', ()=> App)


