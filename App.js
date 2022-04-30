import React from "react";
import Home from './component/screen/Home';
import {SafeAreaView, StyleSheet} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Home />
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1 },
});

export default App;