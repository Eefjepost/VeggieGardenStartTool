import React, { useState, useEffect } from "react";
import { useFonts, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  View,
  Image, 
  Button, 
  Alert
} from "react-native";
import List from "../shared/List";
import SearchBar from "../shared/SearchBar";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

   // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  //load fonts
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

 
  return (
    <View style={styles.root}>

<SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
  
      <Image style={styles.startScreen} source={require('../../assets/startscreen.jpg')}
      />
      <Text style={{ fontFamily: 'Inter_800ExtraBold', fontSize: 40 }}>What are you looking for?</Text>   
      <Button
      title="Choose location"
      style ={styles.button}
      color = "#808000"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Button
      title="choose month"
      style ={styles.button}
      color= "#808000"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Button
      title="Start your garden"
      style ={styles.button}
      color= "#808000"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 40
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