import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import FlatButton from "./Global/Button";
import Main from "./Main/Main";
import { API_URL, API_KEY } from "@env"
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

const image = {
  uri: "https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

export default function App() {
  const [fromCountry, onChangefromCountry] = useState("");
  const [fromCurrency, onChangefromCurrency] = useState("GBP");
  const [toCountry, onChangetoCountry] = useState("");
  const [toCurrency, onChangetoCurrency] = useState("USD");
  const [amount, setAmount] = useState("1000")

  // if you want just rates, use this URL:
  // `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  // can be separated to 'helper.js' file later.
  const fetchData = () => (
    fetch(`${API_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`)
      .then(res => res.json())
      .then(data => console.log(data))
      // .then(data => {setState(data)})
      .catch(error => console.error(error))
  )

  const pressHandler = () => {
    console.log('i am a button and i just got clicked! and now I will fetch data')
    return fetchData()
  }


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
});