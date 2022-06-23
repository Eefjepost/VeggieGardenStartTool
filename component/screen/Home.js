import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image, 
  Button, 
  Alert, 
  View,
  TouchableOpacity
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Feather} from "@expo/vector-icons";
import Card from "../shared/Card";


const Home = ({ navigation }) => {
 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Feather
            name="search"
            size={22}
            color='#808000'
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate('Search')}
          />
      ),
    });
  }, [navigation]);
  
  
  return (
    <KeyboardAwareScrollView style={styles.root} contentContainerStyle={{ flexGrow: 1, justifyContent: "center",
    alignItems: "center"}} >

      <View>

      <Image style={styles.startScreen} source={require('../../assets/startscreen.jpg')}
      />

      <View style={{marginBottom: 20}}>
      <Text style={styles.headerText}>What are you looking for?</Text>  
      </View>

     
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => navigation.navigate('Month')}
      >
      <Text style={styles.buttonContentHeader}> Select month</Text>
      <Text style={styles.buttonContentText}> Choose your preferred month and what you can start with right now. Or what other activities are on the agenda based on your geographical location.  </Text>

      </TouchableOpacity> 
      

      <Text style={styles.text}>Or: </Text>  
      
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      ><Text style={{alignSelf:"center", color: "white"}}>Select veggie</Text>
      </TouchableOpacity> 
      
    </View>
    </KeyboardAwareScrollView>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
  },
    headerText: {
      color:'black',
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
  },
  text: {
  marginVertical: 50,
  },
  startScreen: {
    width: 300,
    height: 300,
    marginVertical: 19,
  },
  buttonStyle: {
  borderRadius: 15,
  backgroundColor: '#b2bb84',
  elevation: 3,
  shadowOffset: {widt: 1, height: 1},
  shadowColor: '#333',
  shadowOpacity: 0.3,
  shadowRadius: 5,
  width: '80%',
  marginVertical: 20
  },
  buttonContentHeader: {
    marginHorizontal: 18,
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContentText: {
    marginHorizontal: 18,
    marginBottom: 50,
    marginTop: 20,
    color: 'white',
  }
});

export default Home;