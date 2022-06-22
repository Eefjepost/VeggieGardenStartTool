import React, { useState, useEffect } from "react";
import { useFonts, Inter_800ExtraBold, Inter_900Black} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  Image, 
  Alert, 
  View,
  TouchableOpacity
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Feather} from "@expo/vector-icons";
import { useGlobalState } from '../shared/Storage';
import { database } from "../../firebase-config";
import {ref, onValue} from 'firebase/database';


const Result = ({ navigation }) => {

  const [selectedMonth] =  useGlobalState('selected'); 
  const [selectedLocation] =  useGlobalState('location'); 
  const [retrievedData, setRetrievedData] = useState([]);
  console.log(selectedMonth);
  console.log(selectedLocation);

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

  // get data from database
  useEffect(() => { 


    //Check location and Month for fetching the right table from database
    if(selectedLocation === 'Northern Hemisphere'){
      if(selectedMonth === 'March'){
        return onValue(ref(database, '/VeggieTool/NH/March'), querySnapShot => {
        const data = querySnapShot.val() || {};
        const retrievedData = Object.values(data);
        setRetrievedData(retrievedData);
        console.log(retrievedData); 
       });
      } 
    } console.log(' no match');
  
  }, []);



  

  
 // const [retrievedData, setRetrievedData] = useState([]);
  //const [selected, setSelected] = useState('');
  

 
  // useEffect(() => { 
  //   return onValue(ref(database, '/month'), querySnapShot => {
  //     const data = querySnapShot.val() || {};
  //     const retrievedData = Object.values(data);
  //     setRetrievedData(retrievedData);
  //     console.log(retrievedData);
  //   });
  // }, []);
  
  

  
    

  return (
    <KeyboardAwareScrollView style={styles.root} contentContainerStyle={{ flexGrow: 1, justifyContent: "center",
    alignItems: "center"}} >

    <View>
      <Text style={styles.headerText}>What to sow in {selectedMonth}</Text>
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Veggie 1</Text>
      </TouchableOpacity> 
      
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Veggie 2</Text>
      </TouchableOpacity> 
    
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Veggie 3</Text>
      </TouchableOpacity> 

    </View>
    <View>
      <Text>What to Harvest</Text>
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Veggie 1</Text>
      </TouchableOpacity> 
      
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Veggie 2</Text>
      </TouchableOpacity> 
    
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Veggie 3</Text>
      </TouchableOpacity> 
      </View>

    <View>
      <Text>Other activities this month</Text>
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Activity 1</Text>
      </TouchableOpacity> 
    </View>

      <Text style={styles.text}>Or: </Text>  
      
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      ><Text style={{alignSelf:"center", color: "white"}}>Select veggie</Text>
      </TouchableOpacity> 
      
    </KeyboardAwareScrollView>
  );
};

export default Result;

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