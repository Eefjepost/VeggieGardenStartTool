/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SearchBar from '../shared/SearchBar';

// definition of the Item, which will be rendered in the FlatList
function Item({ name, details }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{details}</Text>
    </View>
  );
}

function Search() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fakeDataResult, setFakeData] = useState();

  // get data from the fake api
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        'https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages',
      );
      const fakeData = await apiResponse.json();
      setFakeData(fakeData);
      console.log(fakeDataResult);
    };

    getData();
  }, []);

  // the filter
  // eslint-disable-next-line consistent-return
  const renderItem = ({ item }) => {
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  const clear = () => {
    setSearchPhrase('');
  };

  return (
    <View Style={{
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
    >

      <View style={{ flexDirection: 'row', width: '90%' }}>
        <View>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
        </View>

        {clicked
&& (
  <View style={{ alignSelf: 'center', marginLeft: -5 }}>
    <TouchableOpacity onPress={clear}>
      <Entypo name="cross" size={30} style={{ padding: 1 }} color="black" />
    </TouchableOpacity>
  </View>
)}

      </View>

      <FlatList
        style={{ marginLeft: 20 }}
        data={fakeDataResult}
        searchPhrase={searchPhrase}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        setClicked={clicked}
      />

    </View>
  );
}

export default Search;
