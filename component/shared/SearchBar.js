import React from "react";
import { StyleSheet, TextInput, View, Keyboard, TouchableOpacity} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  
  const clear = () =>{
   setSearchPhrase("");
   }

   //handle click outside searchbar
const handleBlur = () => {
  setClicked(false);
  Keyboard.dismiss;
  setSearchPhrase("");
};

  return (
    <View style={styles.container}> 
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >

        <Feather
          name="search"
          size={20}
          color='black'
          style={{ marginLeft: 1 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => setClicked(true)}
          onBlur={handleBlur}
        />

      </View>
      
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

    
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    alignSelf: "stretch",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});