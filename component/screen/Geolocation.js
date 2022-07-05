import React from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { useGlobalState} from '../shared/Storage'

const Geolocation = ({ navigation }) => {

    const [hemisphere, setHemisphere] = useGlobalState('geolocation');

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

      <View style={styles.containerPicker}>
    
      <RNPickerSelect
        onValueChange={handleChange}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Select your location", value: ''}}
        items={[
          { label: 'Northern Hemisphere', value: 'Northern Hemisphere' },
          { label: 'Southern Hemisphere', value: 'Southern Hemisphere' }
        ]}
        style={styles}
      />
     
      </View>

    {hemisphere == '' ? ( null ) : (
      <TouchableOpacity style ={styles.buttonStyle}
      onPress={() => handleButton()}>
        <Text style={{alignSelf:"center", color: "white"}}>Next</Text>
      </TouchableOpacity> 
      )
    }
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
    },
    inputAndroid: {
      fontSize: 17,
      paddingHorizontal: 80,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: '#808000',
      borderRadius: 8,
      color: '#808000'
    },
    inputIOS: {
      fontSize: 17,
      paddingVertical: 12,
      paddingHorizontal: 80,
      borderWidth: 1,
      borderColor: '#808000',
      borderRadius: 4,
      color: '#808000',
    },
    placeholder: {
      color: '#808000',
    },
    containerPicker : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default Geolocation;