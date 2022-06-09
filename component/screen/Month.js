import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker';





const Month = ({  }) => {

    const [selected, setSelected] = useState("ja");
      
    

  return(
  <View style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: "center",
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
        backgroundColor="white"
        itemStyle={{ color: "red" }}
      >
        <Picker.Item style={styles.pickerItem} label="January" value="ja" />
        <Picker.Item style={styles.pickerItem} label="February" value="fe" />
        <Picker.Item style={styles.pickerItem} label="March" value="ma" />
        <Picker.Item style={styles.pickerItem} label="April" value="ap" />
        <Picker.Item style={styles.pickerItem} label="May" value="my" />
        <Picker.Item style={styles.pickerItem} label="June" value="ju" />
        <Picker.Item style={styles.pickerItem} label="July" value="jl" />
        <Picker.Item style={styles.pickerItem} label="August" value="au" />
        <Picker.Item style={styles.pickerItem} label="September" value="se" />
        <Picker.Item style={styles.pickerItem} label="October" value="oc" />
        <Picker.Item style={styles.pickerItem} label="November" value="no" />
        <Picker.Item style={styles.pickerItem} label="December" value="de" />
        
      </Picker>
     
      </View>
  </View>
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
    lineHeight: 60,
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
    flex: 1,
    paddingTop: 40,
    width: '80%',
    margin: 10,

  },
  pickerItem: {
    fontSize: 20, margin: 2
  }
});

export default Month;