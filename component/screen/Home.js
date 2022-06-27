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

      <View style={{marginVertical: 20}}>
      <Text style={styles.headerText}>What are you looking for?</Text>  
      </View>

     
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => navigation.navigate('Month')}
      >
        <Image style={styles.iconImage} source={require('../../assets/calenderIcon3.png')}
      />
      <View style={{flexDirection: "column", alignSelf: 'flex-end', alignContent: 'center', flexwrap: 'wrap', flexShrink: 1}}>
      <Text style={styles.buttonContentHeader}> Select month</Text>
      <Text style={styles.buttonContentText}> Choose your preferred month and what you can start with right now. Or what other activities are on the agenda based on your geographical location.  </Text>
      </View>
      </TouchableOpacity> 
      
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => navigation.navigate('Month')}
      >
        <Image style={styles.iconImage} source={require('../../assets/veggieIcon3.png')}
      />
      <View style={{flexDirection: "column", alignSelf: 'center', alignContent: 'center', flexwrap: 'wrap', flexShrink: 1}}>
      <Text style={styles.buttonContentHeader}> Select Veggie</Text>
      <Text style={styles.buttonContentText}> Choose a veggie to see when to sow, harvest and other relevant information. </Text>
      <Text style={{marginVertical: 15}}></Text>
      </View>
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
    alignSelf:'center',
    borderRadius: 15,
    shadowOffset: {width: 1, height: 4},
    shadowColor: 'black',
    shadowOpacity: 0.32,
    shadowRadius: 5
  },
  iconImage: {
    width: 100,
    height: 150,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 15,
    shadowOffset: {width: 1, height: 2},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  buttonStyle: {
  borderRadius: 15,
  backgroundColor: '#b2bb84',
  elevation: 3,
  shadowOffset: {width: 1, height: 1},
  shadowColor: '#333',
  shadowOpacity: 0.3,
  shadowRadius: 5,
  width: '90%',
  marginVertical: 10,
  marginHorizontal: 10,
  flexDirection: "row",
  },
  buttonContentHeader: {
    marginHorizontal: 18,
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  buttonContentText: {
    marginHorizontal: 18,
    marginBottom: 20,
    marginTop: 20,
    color: 'white',
    alignSelf: "center",
    
  }
});

export default Home;