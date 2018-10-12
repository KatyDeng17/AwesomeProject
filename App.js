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
        <Text style = { styles.button }> Green</Text>
        <Text style = { styles.button }> Red</Text>
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
     

  }


})

AppRegistry.registerComponent('AwesomeProject', ()=> App)


