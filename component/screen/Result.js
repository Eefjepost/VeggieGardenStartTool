/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Alert,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { ref, onValue } from 'firebase/database';
import { useGlobalState } from '../shared/Storage';
import { database } from '../../firebase-config';

const RESULT_IMAGE = require('../../assets/resultscreen.jpg');

function Result() {
  const [selectedMonth] = useGlobalState('selected');
  // const [selectedGeolocation] = useGlobalState('geolocation');
  // const [retrievedData, setRetrievedData] = useState([]);
  const [retrievedSow, setRetrievedSow] = useState([]);
  const [sowdirect] = useState('SowDirect');

  // get data from database
  const readData = async () => {
    // get data from database
    const reference = ref(database, '/VeggieTool/NH');
    onValue(reference, (snapShot) => {
      const data = snapShot.val() || {};
      console.log(data);
      // const retrievedMonthData = data[selectedMonth]
      // setRetrievedData(retrievedMonthData);
      // console.log(retrievedMonthData);
      const retrievedSowMonth = Object.values(data[selectedMonth][sowdirect]);
      setRetrievedSow(retrievedSowMonth);
      console.log(retrievedSowMonth);
    });
  };

  useEffect(() => {
    readData();
  }, []);

  // //array of strings to array of objects
  const itemsData = retrievedSow.map((index, name) => ({ key: index, value: name }));

  // definition of the Item, which will be rendered in the FlatList
  function Item({ value }) {
    return (
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{ alignSelf: 'center', color: 'white' }}>
          {' '}
          {value}
        </Text>
      </TouchableOpacity>
    );
  }

  // the filter
  const renderItem = ({ item }) => (
    <Item value={item.value} />
  );

  return (
    <View
      style={styles.root}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <View>
        <Image style={styles.result} source={RESULT_IMAGE} />
        <Text style={styles.headerText}>
          What to sow in
          {' '}
          {selectedMonth}
        </Text>

        <FlatList
          data={itemsData}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
        />
        <Item />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={{ alignSelf: 'center', color: 'white' }}>Veggie 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text}>Veggie 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text}>Veggie 3</Text>
        </TouchableOpacity>

      </View>
      <View>
        <Text>What to Harvest</Text>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text}>Veggie 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text}>Veggie 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text}>Veggie 3</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Other activities this month</Text>
        <TouchableOpacity style={styles.text}>
          <Text style={{ alignSelf: 'center', color: 'white' }}>Activity 1</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Or: </Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
        <Text style={styles.text}>Select veggie</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  headerText: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    alignSelf: 'center',
    color: 'black',
  },
  startScreen: {
    width: 300,
    height: 300,
    marginVertical: 19,
  },
  buttonStyle: {
    borderRadius: 15,
    backgroundColor: '#b2bb84',
    marginVertical: 20,
    padding: 20,
    width: '80%',
  },
  result: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 15,

  },
});
