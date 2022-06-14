import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { database } from "../../firebase-config";
import {ref, onValue} from 'firebase/database';



const Month = ({  }) => {

    
    const [retrievedData, setRetrievedData] = useState([]);
    const [selected, setSelected] = useState('');

  

    useEffect(() => { 
      return onValue(ref(database, '/month'), querySnapShot => {
        const data = querySnapShot.val() || {};
        const retrievedData = Object.values(data);
        setRetrievedData(retrievedData);
        console.log(retrievedData);
      });
    }, []);
      
    
      const Items = retrievedData.map( (s, i) => {
          return <Picker.Item key={i} value={i} label={s} />
      });
      
      const handleChange = (value) =>{
        setSelected({selected : value});
        console.log({selected : value});
        }

    

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
      onValueChange={handleChange}
      itemStyle={{ color: "red" }}
      >
        {Items}

    
  
      
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

export default Month;