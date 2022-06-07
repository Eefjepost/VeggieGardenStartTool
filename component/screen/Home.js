import React, { useState, useEffect } from "react";
import { useFonts, Inter_800ExtraBold, Inter_900Black} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  Image, 
  Button, 
  Alert, 
  View
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Feather} from "@expo/vector-icons";


const Home = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

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
      <Text style={{ fontFamily: 'Inter_800ExtraBold', fontSize: 40, margin: 2}}>What are you looking for?</Text>   
      
      <Button
      title="Choose starting month"
      style ={styles.button}
      color = "#808000"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

      <Text style={{ fontFamily: 'Inter_900Black,', fontSize: 30 }}>Or: </Text>  
      
      <Button
      title="choose veggie"
      style ={styles.button}
      color= "#808000"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      
    </KeyboardAwareScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",

  },
  startScreen: {
    width: 300,
    height: 300,
    marginVertical: 19,
  },
  button: {
  marginVertical: 20
  }
 
});