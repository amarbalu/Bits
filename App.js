/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  LogBox
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Font5Icon from "react-native-vector-icons/FontAwesome5";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GestureRecognizer from 'react-native-swipe-gestures';
import { WebView } from 'react-native-webview';
const Tab=createBottomTabNavigator()
const news=[ {
  "key":1,
  "title": "Java Developer",
  "company": "ABC Corporation",
  "snippet": "a <b>Java</b> Developer to join our team. This position will be responsible for design and development of <b>Java</b>... <b>Java</b> or C# Frameworks/Skills: <b>Java</b> EE, <b>Java</b> Swing or... ",
  "newsId": "83400e947276d20b",
  "formattedRelativeTime": "1 day ago",
},
{
  "key":2,
  "title": "Sr. Java Developer",
  "company": "Lucent Corp",
  "snippet": "Knowledge/Skills Strong <b>Java</b> development skills... abreast of emerging technology trends Core <b>Java</b> and <b>Java</b> Enterprise Edition (JavaEE) Strong relational... ",
  "newsId": "9d2c6535dc61d3b6",
  "formattedRelativeTime": "4 days ago",
},
{
  "key":3,
  "title": "Sr. Java Developer",
  "company": "Lucent Corp",
  "snippet": "Knowledge/Skills Strong <b>Java</b> development skills... abreast of emerging technology trends Core <b>Java</b> and <b>Java</b> Enterprise Edition (JavaEE) Strong relational... ",
  "newsId": "9d2c6535dc61d3b6",
  "formattedRelativeTime": "4 days ago",
},
{
  "key":4,
  "title": "Sr. Java Developer",
  "company": "Lucent Corp",
  "snippet": "Knowledge/Skills Strong <b>Java</b> development skills... abreast of emerging technology trends Core <b>Java</b> and <b>Java</b> Enterprise Edition (JavaEE) Strong relational... ",
  "newsId": "9d2c6535dc61d3b6",
  "formattedRelativeTime": "4 days ago",
},
{
  "key":5,
  "title": "Sr. Java Developer",
  "company": "Lucent Corp",
  "snippet": "Knowledge/Skills Strong <b>Java</b> development skills... abreast of emerging technology trends Core <b>Java</b> and <b>Java</b> Enterprise Edition (JavaEE) Strong relational... ",
  "newsId": "9d2c6535dc61d3b6",
  "formattedRelativeTime": "4 days ago",
}
]
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-elements';


const Feed=({navigation})=>{
  const onSwipeUp=()=> {

  }
 
  const onSwipeDown=()=>{
    
  }
 
  const onSwipeLeft=()=>{
    navigation.navigate("web")
    console.log("left")
   
  }
 
 const onSwipeRight=()=>{
  console.log("right")
  }
  return(
    <View style={{flex:1}}>
    <GestureRecognizer
    onSwipeUp={() => onSwipeUp()}
    onSwipeDown={() => onSwipeDown()}
    onSwipeLeft={() => onSwipeLeft()}
    onSwipeRight={() => onSwipeRight()}
    config={{
     velocityThreshold: 0.3,
     directionalOffsetThreshold: 80
   }}
    style={{
      flex: 1
    }}
    >
      <View style={{flex:1}}>
        <Image  source={require('./assets/image.jpg')}
          style={{ width: '100%',height:"100%"}} />
      </View>
      <View style={{flex:1,padding:20}}>
        <Text style={{fontSize:18,fontWeight:"bold"}}>
          {news[0].title}
        </Text>
      <Text style={{fontSize:16}}>
        {`${news[0].snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}\nSwipe left for more`}
      </Text>
      </View>
    </GestureRecognizer>
    </View>
  )
}
const newsWeb=()=>{
  // LogBox.ignoreAllLogs(true);
  return (
    <View style={{flex:1}}>
      <WebView 
        source={{
          uri: 'https://www.google.com/'
        }}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={{ marginTop: 20 }}
      />

      </View>
  )
}
const Discover=({navigation})=>{
  const Categories=[{title:"My Feed",icon:"star",color:"lightblue"},
  {title:"Top Stories",icon:"star",color:"gold"},
  {title:"My Feed",icon:"star",color:"lightblue"},
  {title:"My Feed",icon:"star",color:"lightblue"},
  {title:"My Feed",icon:"star",color:"lightblue"},
  {title:"My Feed",icon:"star",color:"lightblue"},
  {title:"My Feed",icon:"star",color:"lightblue"},
  {title:"My Feed",icon:"star",color:"lightblue"},
  {title:"My Feed",icon:"star",color:"lightblue"},
]
  return(
    // <SafeAreaView>
    // <ScrollView>
    <View style={{padding:20,flex:1}}>

      <View style={{flex:1}}>

        <View>
          <Text style={{fontSize:20,fontWeight:"400",textAlign:"center"}}>Categories</Text>
          </View>
          
              <View style={{flex: 1}}>

      <View style={{flex:1,flexDirection: 'row',justifyContent:"center"}}>
       
        <View style={{width: 100, height: 80}} >
         <View style={{flexDirection:"row",justifyContent:"center"}}><Icon  name="star" size={50} color="gold"></Icon></View> 
          <Text style={{textAlign:"center"}}>Top</Text>
        </View>


        <View style={{width: 100, height: 80}} >  
        <View style={{flexDirection:"row",justifyContent:"center"}}>
          <Font5Icon  name="fire-alt" size={50} color="orange"></Font5Icon></View> 
          <Text style={{textAlign:"center"}}>Trending</Text>
          </View>

        <View style={{width: 100, height: 80}} >
        <View style={{flexDirection:"row",justifyContent:"center"}}>
        <Font5Icon  name="newspaper" size={50} color="skyblue"></Font5Icon></View> 
          <Text style={{textAlign:"center"}}>All News</Text>
        </View>

        </View> 
       <View style={{ flex:1,flexDirection: 'row',justifyContent:"center"}}>
         
         
          <View style={{width: 100, height: 80}} >
          <View style={{flexDirection:"row",justifyContent:"center"}}>
           <Font5Icon  name="warehouse" size={50} color="brown" ></Font5Icon></View> 
          <Text style={{textAlign:"center"}}>My Feed</Text>
       
        </View>
     
      <View style={{width: 100, height: 80}} >
        <View style={{flexDirection:"row",justifyContent:"center"}}>
           <Font5Icon  name="box-tissue" size={50} color="steelblue" ></Font5Icon></View> 
          <Text style={{textAlign:"center"}}>Bookmark</Text>
       
        </View>

         <View style={{width: 100, height: 80}} >
        <View style={{flexDirection:"row",justifyContent:"center"}}> 
        <Font5Icon  name="eye-slash" size={50} color="grey" ></Font5Icon></View> 
          <Text style={{textAlign:"center"}}>Unread</Text>
          </View> 
 
    
     
      </View>
      </View>      
          
      </View>
      <View style={{flex:1}}>
        <View >
          <Text style={{fontSize:20,fontWeight:"400",textAlign:"center"}}>Topics</Text>
          </View>
              <View style={{flex: 1}}>
       {/* <View style={{ flexDirection: 'column'}}> */}
      <View style={{flex: 1,flexDirection: 'row',justifyContent:"center"}}>
      <View style={{width: 100, height: 80}} >
         <View style={{flexDirection:"row",justifyContent:"center"}}><Icon  name="star" size={50} color="gold"></Icon></View> 
          <Text style={{textAlign:"center"}}>India</Text>
        </View>


        <View style={{width: 100, height: 80}} >  
        <View style={{flexDirection:"row",justifyContent:"center"}}>
          <Font5Icon  name="briefcase" size={50} color="black"></Font5Icon></View> 
          <Text style={{textAlign:"center"}}>Business</Text>
          </View>

        <View style={{width: 100, height: 80}} >
        <View style={{flexDirection:"row",justifyContent:"center"}}>
        <Font5Icon  name="newspaper" size={50} color="skyblue"></Font5Icon></View> 
          <Text style={{textAlign:"center"}}>Technology</Text>
        </View>
      </View>
       <View style={{flex: 1, flexDirection: 'row',justifyContent:"center"}}>
        <View style={{width: 100, height: 80, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 80, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 80, backgroundColor: 'steelblue'}} />
      </View>
      </View>
      {/* </View> */}
            
          
      </View>
      
      </View>
      // </ScrollView>
      // </SafeAreaView>
    
  )
}
const Settings=({navigation})=>{
  return(
    <Text>Settings</Text>
  )
}
const Loader=()=>{
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Icon  name="hourglass-2" size={100} color="grey" />
      <Text>Loading in Bits...</Text>
    </View>
  )
}
const App = () => {
  const [state,setState]=useState({
    loader:true
  })
  
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide();
      setState({loader:false})
    },1000)
  },[])

  return (
    <>
      <StatusBar barStyle="dark-content" />
     {state.loader? <Loader/>:
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed" >
        <Tab.Screen name="Settings"
         options={{tabBarIcon:()=><Icon name="cog" size={20} color="grey" />}} 
          component={Settings}/>
        <Tab.Screen name="Discover" component={Discover} options={{tabBarIcon:()=><Icon  name="globe" size={20} color="grey"  />}}/>
        <Tab.Screen name="Feed" component={Feed}
                 options={{tabBarIcon:()=><Icon  name="newspaper-o" size={20} color="grey" />}} />
                 <Tab.Screen name="web" component={newsWeb} />
      </Tab.Navigator>
      </NavigationContainer>
      }
    </>
  );
};



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

AppRegistry.registerComponent('App', () => App);
export default App;
