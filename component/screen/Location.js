import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {Picker} from '@react-native-picker/picker';

const Location = ({  }) => {

    const [hemisphere, setHemisphere] = useState(" ");
   

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
        onValueChange={label => setHemisphere({ hemisphere: label})}
        itemStyle={{ color: "black" }}
      >
        <Picker.Item style={styles.pickerItem} label="Northern Hemisphere" value="no" />
        <Picker.Item style={styles.pickerItem} label="Southern Hemisphere" value="so" />
      </Picker>
     
      </View>

      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => navigation.navigate('')}>
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
  }
});

export default Location;