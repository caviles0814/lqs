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
import { StyleSheet, SafeAreaView, View,TouchableOpacity, FlatList, Text, Linking ,SectionList, ActivityIndicator,Dimensions } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'
import APIRequest from '../Config/APIRequest'
import { sanFranciscoWeights } from 'react-native-typography'
 
export default class News extends Component {

  constructor(props){

    super(props);
     this.state={}
   
  }
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }
  
  //you can change the props above to whatever you want/need.
  
  getArticleContent = () => {
    let contentDisplay = null;
    if(props.loading) {
      contentDisplay = <ActivityIndicator size="large" color="black"/>
    } else {
      contentDisplay = <FlatList data={props.articles} renderItem={({index, item}) => this.renderArticle(index, item)} keyExtractor={(item, index) => this.keyExtractor(index)}/>
    }

    return (
      <View style={styles.container}>
        {contentDisplay}
      </View>
    )
  }

  


  render () {
    // const {articles} = this.props;
    let {data }=this.props;
    
     
    return (

      

        <View style={styles.container}>
         <FlatList   data={data}  
         
         renderItem={({item})=>
         <TouchableOpacity 
           style={{top:0}}
          onPress = {() => Linking.openURL(item.url)}>
          <View >   
          
           <Text style={sanFranciscoWeights.black, styles.ArticleTitle }>{ item.title}</Text>
            
           <Text style={ {  fontSize:15,  top:0,paddingHorizontal:10}}>{ item.snippet}</Text>
           <Text style={ {  fontSize:15,  top:0,paddingHorizontal:10,fontWeight: "bold"}}>{ item.byline}</Text>
           <Text style={{  fontSize:15,  top:0,paddingHorizontal:10,color:'grey' }}>{ item.date}</Text>
           <Text >    </Text>
         
          </View>
        </TouchableOpacity>
                     }
         ListFooterComponent = {<ActivityIndicator/>}
         keyExtractor={ (item,index)=>index.toString()}
         

         />
       
        

         
       </View>
       
    );
  }
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10
     
  },
   
  ArticleTitle:{
    fontSize:30, 
     top:0,
     paddingHorizontal:10

  },
  ArticlesElements:{
    fontSize:15,  
    top:0,
    paddingHorizontal:10
  }
});
const {width,height}= Dimensions.get("window");
