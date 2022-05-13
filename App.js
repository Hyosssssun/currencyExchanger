import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import FlatButton from "./Global/Button";
import Main from "./Main/Main";
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

const image = {
  uri: "https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

export default function App() {
  const [fromCountry, onChangefromCountry] = useState("");
  const [fromCurrency, onChangefromCurrency] = useState("");
  const [toCountry, onChangetoCountry] = useState("");
  const [toCurrency, onChangetoCurrency] = useState("");

  const pressHandler = () =>
    console.log("i am a button and i just got clicked!");

  return (
    // <TailwindProvider utilities={utilities}>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto" />
        <Text style={styles.header}>Currency Exchange</Text>
        <Main
          fromCountry={fromCountry}
          onChangefromCountry={onChangefromCountry}
          fromCurrency={fromCurrency}
          onChangefromCurrency={onChangefromCurrency}
          toCountry={toCountry}
          onChangetoCountry={onChangetoCountry}
          toCurrency={toCurrency}
          onChangetoCurrency={onChangetoCurrency}
        />
        <FlatButton text="Exchange Currency!" onPress={pressHandler} />
      </ImageBackground>
    </View>
    // </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: "3rem",
    color: "#fff",
    fontFamily: "Raleway_900Black",
    marginLeft: "2rem",
    marginRight: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    backgroundColor: "#141",
    color: "#E898",
    fontSize: "8rem",
  },
});
