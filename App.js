/*
*
* Assignment 3
* Starter Files
*
* COEN 4440
* Spring, 2020
*/

import React from 'react';
import {  StyleSheet, Text, TextInput, View, SafeAreaView, Image, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { Images, Colors } from './App/Themes';
import APIRequest from './App/Config/APIRequest';

import News from './App/Components/News';
import Search from './App/Components/Search';

export default class App extends React.Component {
constructor(props){ 
  super(props);
  this.state = {
    loading: true,
    articles : [ ],
    searchText: '',
    category: ''
  }
}
  componentDidMount() {

    //uncomment this to run an API query!
    this.loadArticles();
  }
  onChangeText = text => {
    this.setState({searchText: text});
     
  }

  articleSearch = () => {
    this.loadArticles(this.state.searchText, category = '');
    this.setState({searchText: ""});
    
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
     
     
    this.setState({loading: false, articles: resultArticles})
    
  }

  render() {
    const {articles, loading} = this.state;
     
    return (
      <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
       <SafeAreaView style={styles.container}>
          <Image
            style = {{width: width * 0.9, height: 100,position:'absolute',top:20}}
            resizeMode = 'contain'
            source = {Images.logo}
          />
        <Search onChangeText={ text => this.onChangeText(text)}   
                      onSubmitEditing={() => this.articleSearch()}
                      onPress={() => this.articleSearch()}
          value={this.state.search}
        />

        <News  data={articles}  loading={loading} />
        
         

         

       </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  } 
  
});
var {width,height}= Dimensions.get("window");