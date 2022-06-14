import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Picker} from '@react-native-picker/picker';





const Location = ({  }) => {

    const [selected, setSelected] = useState("no");
      
    

  return(
  <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: "center",
  alignItems: "center"}}>
       <View>
      <Image style={styles.calendar} source={require('../../assets/calendar.jpg')}
      />
      </View>
        <View>
      <Text style={styles.text}>When would you like to start?</Text>
      </View>

      <View style={styles.viewPicker}>
    
      <Picker
        selectedValue={selected}
        onValueChange={value => setSelected({ selected: value })}
        backgroundColor="black"
        itemStyle={{ color: "red" }}
      >
        <Picker.Item style={styles.pickerItem} label="Northern Hemisphere" value="no" />
        <Picker.Item style={styles.pickerItem} label="Southern Hemisphere" value="so" />
     
        
        
      </Picker>
     
      </View>
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