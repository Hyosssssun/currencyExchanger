import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import FlatButton from "./Button";
import FromCountry from "./From/FromCountry";
import ToCountry from "./To/ToCountry";
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

const image = {
  uri: "https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

export default function App() {
  const [fromCountry, onChangefromCountry] = React.useState("");
  const [fromCurrency, onChangefromCurrency] = React.useState("");
  const [toCountry, onChangetoCountry] = React.useState("");
  const [toCurrency, onChangetoCurrency] = React.useState("");

  const pressHandler = () =>
    console.log("i am a button and i just got clicked!");

  return (
    // <TailwindProvider utilities={utilities}>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto" />
        <FromCountry
          FromCountry={fromCountry}
          onChangeFromCountry={onChangefromCountry}
          FromCurrency={fromCurrency}
          onChangeFromCurrency={onChangefromCurrency}
        />
        <ToCountry
          ToCountry={toCountry}
          onChangeToCountry={onChangetoCountry}
          ToCurrency={toCurrency}
          onChangeToCurrency={onChangetoCurrency}
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
  greeting: {
    backgroundColor: "#141",
    color: "#E898",
    fontSize: "8rem",
  },
});
