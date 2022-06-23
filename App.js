import React from "react";
import Home from './component/screen/Home';
import Search from './component/screen/Search';
import Month from './component/screen/Month';
import Geolocation from './component/screen/Geolocation';
import Result from './component/screen/Result';
import {StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


const App = () => {

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Veggie Start Tool', headerTitleStyle: {
            fontWeight: 'bold', color: '#808000'} }} />
      <Stack.Screen name="Search" component={Search} options={{ title: 'Veggie Start Tool', headerTitleStyle: {
            fontWeight: 'bold', color: '#808000'} }} />
      <Stack.Screen name="Month" component={Month} options={{ title: 'Veggie Start Tool', headerTitleStyle: {
            fontWeight: 'bold', color: '#808000'} }} />
       <Stack.Screen name="Geolocation" component={Geolocation} options={{ title: 'Veggie Start Tool', headerTitleStyle: {
            fontWeight: 'bold', color: '#808000'} }} />
             <Stack.Screen name="Result" component={Result} options={{ title: 'Veggie Start Tool', headerTitleStyle: {
            fontWeight: 'bold', color: '#808000'} }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
   },
});

export default App;