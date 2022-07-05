import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image, 
  Alert, 
  View,
  TouchableOpacity, 
  FlatList
} from "react-native";
import { Feather} from "@expo/vector-icons";
import { useGlobalState } from '../shared/Storage';
import { database } from "../../firebase-config";
import {ref, onValue} from 'firebase/database';
import Card from "../shared/Card";
import { Inter_500Medium } from "@expo-google-fonts/inter";


const Result = ({ navigation }) => {

  const [selectedMonth] =  useGlobalState('selected'); 
  const [selectedGeolocation] =  useGlobalState('geolocation'); 
  const [retrievedData, setRetrievedData] = useState([]);
  

  // get data from database
  useEffect(() => { 
  return onValue(ref(database, '/VeggieTool/'+selectedGeolocation), snapShot => {
    //Check location and Month for fetching the right table from database
        const data = snapShot.val() || {};
        console.log(data);

        //from object of objects to array of objects
        const retrievedData =data[selectedMonth]  //Object.values(data);
        setRetrievedData(retrievedData);
        console.log(retrievedData);
      
  });
}, []);


  // // console.log(itemsData);


  // const renderItem = ({item}) => 
  // <Item value={item.key} />;
  
  // const Items = retrievedData.map( ( {SowDirect}, index ) => {
  //   return (<Text key={index}>{JSON.stringify(SowDirect)}</Text>);
  // });

  //     console.log(Items);


  return (
    <View style={styles.root} contentContainerStyle={{ flexGrow: 1, justifyContent: "center",
    alignItems: "center"}} >

    <View>
      <Image style={styles.result} source={require('../../assets/resultscreen.jpg')}
      />
    <Text style={styles.headerText}>What to sow in {selectedMonth}</Text>

    {/* <FlatList
  data={retrievedSow}
  keyExtractor={item => item.id}
  renderItem={renderItem}
 /> */}

     
    <TouchableOpacity>  
        <Card>
         <Text>Carrot</Text>
       </Card>
       </TouchableOpacity>  
      
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={{alignSelf:"center", color: "white"}}>Veggie 1</Text>
      </TouchableOpacity> 
      
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={styles.text}>Veggie 2</Text>
      </TouchableOpacity> 
    
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={styles.text}>Veggie 3</Text>
      </TouchableOpacity> 

    </View>
    <View>
      <Text>What to Harvest</Text>
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={styles.text}>Veggie 1</Text>
      </TouchableOpacity> 
      
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={styles.text}>Veggie 2</Text>
      </TouchableOpacity> 
    
      <TouchableOpacity style ={styles.buttonStyle}>  
        <Text style={styles.text}>Veggie 3</Text>
      </TouchableOpacity> 
      </View>

    <View>
      <Text>Other activities this month</Text>
      <TouchableOpacity style={styles.text}>  
        <Text style={{alignSelf:"center", color: "white"}}>Activity 1</Text>
      </TouchableOpacity> 
    </View>

      <Text style={styles.text}>Or: </Text>  
      
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      ><Text style={styles.text}>Select veggie</Text>
      </TouchableOpacity> 
      
    </View>
  );
  };

export default Result;

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
    alignSelf:"center", 
    color: "black"
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
  result: {
    width: 300,
    height: 300,
    alignSelf:'center',
    borderRadius: 20,
    marginVertical: 15,
    
  },
  
 
});