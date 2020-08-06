/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Card } from 'react-native-elements';
import Swipe from "./swipe";

const Stack= createStackNavigator()
const news=[ {
  "title": "Java Developer",
  "company": "ABC Corporation",
  "snippet": "a <b>Java</b> Developer to join our team. This position will be responsible for design and development of <b>Java</b>... <b>Java</b> or C# Frameworks/Skills: <b>Java</b> EE, <b>Java</b> Swing or... ",
  "newsId": "83400e947276d20b",
  "formattedRelativeTime": "1 day ago",
},
{
  "title": "Sr. Java Developer",
  "company": "Lucent Corp",
  "snippet": "Knowledge/Skills Strong <b>Java</b> development skills... abreast of emerging technology trends Core <b>Java</b> and <b>Java</b> Enterprise Edition (JavaEE) Strong relational... ",
  "newsId": "9d2c6535dc61d3b6",
  "formattedRelativeTime": "4 days ago",
}]
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Feed=({navigation})=>{
  renderCards=(news)=>{
    return (
      <Card title={news.title} titleStyle={{ fontSize: 14 }} key={Math.random()}>
      <View style={{ height: 200 }}>
        <Image
          source={require('./assets/image.jpg')}
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <Text numberOfLines={4}>
        {news.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
      </Text>
    </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More cards">
        <Button
          title="Do something"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  };

  return(
<SafeAreaView>
        
         <Swipe
          data={news}
          renderCard={this.renderCards}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </SafeAreaView>
  )
}
const Content=({navigation})=>{
  return(
    <Text>Content</Text>
  )
}

const Discover=({navigation})=>{
  return(
    <Text>Discover</Text>
  )
}
const Settings=({navigation})=>{
  return(
    <Text>Settings</Text>
  )
}

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <>
      <StatusBar barStyle="dark-content" />
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={Feed}/>
      <Stack.Screen name="Discover" component={Discover}/>
      <Stack.Screen name="Content" component={Content}/>
      <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
      </NavigationContainer>
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


export default App;
