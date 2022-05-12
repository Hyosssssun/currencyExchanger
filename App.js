import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlatButton from "./Button";
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

export default function App() {

  const pressHandler = ()=> console.log('i am a button and i just got clicked!')

  return (
    // <TailwindProvider utilities={utilities}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatButton text='Exchange Currency!' onPress={pressHandler} />
      </View>
    // </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  greeting: {
    backgroundColor: "#141",
    color: "#E898",
    fontSize: "8rem"
  }
});
