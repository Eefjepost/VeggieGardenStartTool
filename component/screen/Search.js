import React, { useState, useEffect } from "react";
import { useFonts, Inter_800ExtraBold, Inter_900Black} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {
  Text,
  View,
  FlatList, 
  TouchableOpacity
} from "react-native";
import SearchBar from "../shared/SearchBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Entypo} from "@expo/vector-icons";


const Search = () => {
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
    console.log(fakeData);
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
<View >
  <Text>{name}</Text>
  <Text>{details}</Text>
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

const clear = () =>{
  setSearchPhrase("");
  }


return (
<View Style={{justifyContent: "flex-start",
    alignItems: "center"}} >

<View style={{flexDirection: 'row', width: '90%'}}>
<View>
<SearchBar 
    searchPhrase={searchPhrase}
    setSearchPhrase={setSearchPhrase}
    clicked={clicked}
    setClicked={setClicked}
    /> 
</View>

{clicked &&
<View style={{alignSelf: 'center', marginLeft: -5}}>
<TouchableOpacity onPress={clear} >
  <Entypo name="cross" size={30} style={{ padding: 1 }} color="black" /> 
  </TouchableOpacity>
  </View>
}

</View>

        
    <FlatList style={{marginLeft: 20}}
      data={fakeData}
      searchPhrase={searchPhrase}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      setClicked={clicked}
         />   
    

    </View>
    );
};

export default Search;
