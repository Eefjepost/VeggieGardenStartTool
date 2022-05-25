import React, { useState, useEffect } from "react";
import { useFonts, Inter_800ExtraBold, Inter_900Black} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image, 
  Button, 
  Alert, 
  FlatList
} from "react-native";
import SearchBar from "../shared/SearchBar";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  
  
  

  // get data from the fake api
  useEffect(() => {
   

    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const fakeData = await apiResponse.json();
      setFakeData(fakeData);
    };

    getData();
  }, []);

  //load fonts
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold, Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => ( 
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>

);

// the filter
const renderItem = ({ item }) => {
     
  // filter of the name
  if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    return <Item name={item.name} details={item.details} />;
  }
  // filter of the description
  if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    return <Item name={item.name} details={item.details} />;
  }
 
};


 
  return (
    <SafeAreaView style={styles.root} contentContainerStyle={{ flexGrow: 1 }} >
      
      <SearchBar
    searchPhrase={searchPhrase}
    setSearchPhrase={setSearchPhrase}
    clicked={clicked}
    setClicked={setClicked}
    /> 

      <FlatList
    data={clicked ? fakeData: []}
    searchPhrase={searchPhrase}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    setClicked={clicked}
       />   

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
      
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
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
