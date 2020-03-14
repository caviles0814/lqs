/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity ,TouchableHighlight,ActivityIndicator,Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes';
import { Keyboard } from 'react-native';
 

export default function search(props){

 

 
  
   
    return (
       
    
     
      <View style={styles.container1}>  
      
        <View 
           style= {styles.searchContainer}>
        
          <TextInput 
                    placeholder="Search News"
                     style={styles.textinput}
                     onChangeText={ props.onChangeText}
                     value={props.value}
                      onSubmitEditing={ props.onSubmitEditing}
                     
          >

          </TextInput>

          <TouchableOpacity 
             style={styles.vectorIcon}
             onPress={props.onPress}
          >
            
            <FontAwesome name="search" size={20} color="#cc338b" />
          </TouchableOpacity>
           
          
         </View>
         
          
      </View> 
      
    );
    
   
  
}

  

const styles = StyleSheet.create({

   container1:{
     
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop:125
    
    
    

  },
  searchContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 40,
    margin: 5,
    borderRadius: 10,
    width:"90%"
    

  },
  
  textinput: {
    flex: 1,
    marginStart: 10,
  },
  vectorIcon: {
    justifyContent: 'flex-end',
    marginEnd: 10,
    
  }
});
 