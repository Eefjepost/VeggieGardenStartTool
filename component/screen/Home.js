import React, { useState, useEffect } from "react";
import { useFonts, Inter_800ExtraBold, Inter_900Black} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
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

      <Image style={styles.startScreen} source={require('../../assets/startscreen.jpg')}
      />

      <View>
      <Text style={styles.headerText}>What are you looking for?</Text>  
      </View>

      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => navigation.navigate('Month')}
      >
     
        <Text style={{alignSelf:"center", color: "white"}}>Month to start</Text>
      </TouchableOpacity> 

      <Text style={styles.text}>Or: </Text>  
      
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      ><Text style={{alignSelf:"center", color: "white"}}>Select veggie</Text>
      </TouchableOpacity> 
      
    </KeyboardAwareScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
  },
  headerText: {
    fontFamily: 'Inter_800ExtraBold', fontSize: 40, margin: 2
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
  marginVertical: 20,
  padding: 20,
  width: '80%'
 
  },
  
 
});