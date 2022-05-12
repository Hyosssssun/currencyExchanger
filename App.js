import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlatButton from "./Button";
import FromCountry from "./From/FromCountry";
import ToCountry from "./To/ToCountry";
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

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
  greeting: {
    backgroundColor: "#141",
    color: "#E898",
    fontSize: "8rem",
  },
});
