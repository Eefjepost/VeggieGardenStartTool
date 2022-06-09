import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker';





const Month = ({  }) => {

    const [selected, setSelected] = useState("js");
      
    

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
      <View>
      <Picker
        selectedValue={selected}
        onValueChange={value => setSelected({ selected: value })}
        backgroundColor="white"
        itemStyle={{ color: "red" }}
      >
        <Picker.Item label="Python" value="py" />
        <Picker.Item  label="C++" value="c" />
        <Picker.Item  label="JavaScript" value="js" />
        <Picker.Item  label="Ruby" value="ru" />
        <Picker.Item  label="Other" value="etc" />
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
});

export default Month;