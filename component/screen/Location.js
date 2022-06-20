import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useGlobalState, setGlobalState } from '../shared/Storage'

const Location = ({ navigation }) => {

    const [hemisphere, setHemisphere] = useGlobalState('location');

    const handleChange = (value) =>{
      setHemisphere(value);
      console.log(value);
      }
   
    const handleButton = () =>{
      console.log(hemisphere);
      navigation.navigate('Result');
      }




  return(
  <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: "center",
  alignItems: "center"}}>
       <View>
      <Image style={styles.calendar} source={require('../../assets/calendar.jpg')}
      />
      </View>
        <View>
      <Text style={styles.text}>Where are you located?</Text>
      </View>

      <View style={styles.viewPicker}>
    
      <Picker
        selectedValue={hemisphere}
        onValueChange={handleChange}
        itemStyle={{ color: "black" }}
      >
        <Picker.Item style={styles.pickerItem} label="Northern Hemisphere" value="Northern Hemisphere" />
        <Picker.Item style={styles.pickerItem} label="Southern Hemisphere" value="Southern Hemisphere" />
      </Picker>
     
      </View>

      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => handleButton()}>
        <Text style={{alignSelf:"center", color: "white"}}>Next</Text>
      </TouchableOpacity> 

      </ScrollView>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  text: {
    color:'black',
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  calendar: {
    width: 300,
    height: 300,
    alignSelf:'center',
    borderRadius: 20,
    marginVertical: 15,
    
  },
  viewPicker: {
    width: '80%',
    borderRadius: 15,
    color: 'black'
  },
  pickerItem: {
    fontSize: 20, margin: 2,
    color: 'black'
  },
  buttonStyle: {
    borderRadius: 15,
    backgroundColor: '#b2bb84',
    marginVertical: 20,
    padding: 20,
    width: '80%'
    }
});

export default Location;