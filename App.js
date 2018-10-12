import React, { Component} from 'react';
import {
  AppRegistry, 

  View,
  StatusBar,
  StyleSheet,
  ScrollView
        } from 'react-native';

import ColorButton from './components/ColorButton';

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
    this.setState ({backgroundColor})
  }

  render() {
 
    const {backgroundColor} = this.state;   //destructoring
    return (
      <ScrollView style = { [ styles.container, { backgroundColor } ] }>
         < ColorButton backgroundColor = 'red' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'pink' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'yellow' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'orange' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'green' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'lightblue' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'white' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'lightpink' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'yellow' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'red' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'pink' onSelect ={this.changeColor}/>
         < ColorButton backgroundColor = 'yellow' onSelect ={this.changeColor}/>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
    paddingTop: 20
    // alignItems: 'center',
    // backgroundColor:'#DDD',
    // justifyContent: 'center'
  }
})

AppRegistry.registerComponent('AwesomeProject', ()=> App)


