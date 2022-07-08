/* eslint-disable no-use-before-define */

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ref, onValue } from 'firebase/database';
import { database } from '../../firebase-config';
import { useGlobalState } from '../shared/Storage';

const MONTH_IMAGE = require('../../assets/calendar.jpg');

function Month({ navigation }) {
  const [retrievedData, setRetrievedData] = useState([]);
  const [selected, setSelected] = useGlobalState('selected');

  useEffect(() => onValue(ref(database, '/VeggieTool/Month'), (querySnapShot) => {
    const data = querySnapShot.val() || {};
    console.log(data);
    // from object to array
    const retrieved = Object.values(data);
    setRetrievedData(retrieved);
    console.log(data);
  }), []);

  const Items = retrievedData.map((s, i) => ({ key: i, value: s, label: s }));

  const handleChange = (value, index) => {
    setSelected(value);
    console.log(`${value}: ${index}`);
  };

  const handleNext = () => {
    console.log(selected);
    navigation.navigate('Geolocation');
  };

  return (
    <ScrollView
      style={
        styles.container
      }
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View>
        <Image
          style={styles.calendar}
          source={MONTH_IMAGE}
        />
      </View>
      <View>
        <Text style={styles.text}>When would you like to start?</Text>
      </View>

      <View style={styles.viewPicker}>
        <RNPickerSelect
          onValueChange={handleChange}
          itemStyle={{ color: 'black' }}
          placeholder={{ label: 'Select your month', value: '' }}
          items={Items}
        />
      </View>

      {selected === '' ? (null) : (
        <TouchableOpacity
          style={
            styles.buttonStyle
          }
          onPress={() => handleNext()}
        >
          <Text style={{ alignSelf: 'center', color: 'white' }}>Next</Text>
        </TouchableOpacity>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  calendar: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 15,

  },
  viewPicker: {
    width: '80%',
    borderRadius: 15,
    color: 'black',
  },
  pickerItem: {
    fontSize: 20,
    margin: 2,
    color: 'black',
  },
  buttonStyle: {
    borderRadius: 15,
    backgroundColor: '#b2bb84',
    marginVertical: 20,
    padding: 20,
    width: '80%',
  },
});

export default Month;
