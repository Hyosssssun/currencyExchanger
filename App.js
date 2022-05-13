import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import FlatButton from "./Global/Button";
import Main from "./Main/Main";
import { API_URL, API_KEY } from "@env";
import CountryAndCurrency from "@workmate/country-and-currency";
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

const image = {
  uri: "https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

export default function App() {
  const [fromCountry, setFromCountry] = useState("");
  const [fromCountryFlag, onChangefromCountryFlag] = useState("");
  const [fromAmount, onChangefromAmount] = useState("1.00");
  const [fromCurrency, onChangefromCurrency] = useState("");

  const [toCountry, setToCountry] = useState("");
  const [toCountryFlag, onChangetoCountryFlag] = useState("");
  const [toAmount, onChangetoAmount] = useState("");
  const [toCurrency, onChangetoCurrency] = useState("");

  function setFromCurrency() {
    let inputFromCountry = CountryAndCurrency.getCountriesBy(
      "name",
      fromCountry
    );

    if (inputFromCountry.length === 1) {
      onChangefromCountryFlag(inputFromCountry[0].currency.unicode);
      onChangefromCurrency(inputFromCountry[0].currency.code);
    }
  }
  useEffect(() => {
    setFromCurrency();
  });

  function setToCurrency() {
    let inputToCountry = CountryAndCurrency.getCountriesBy("name", toCountry);
    if (inputToCountry.length === 1) {
      onChangetoCountryFlag(inputToCountry[0].currency.unicode);
      onChangetoCurrency(inputToCountry[0].currency.code);
    }
  }
  useEffect(() => {
    setToCurrency();
  });

  // if you want just rates, use this URL:
  // `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  // can be separated to 'helper.js' file later.
  const fetchData = () =>
    fetch(
      `${API_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${fromAmount}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      // .then(data => {setState(data)})
      .catch((error) => console.error(error));

  const pressHandler = () => {
    console.log(
      "i am a button and i just got clicked! and now I will fetch data"
    );
    return fetchData();
  };

  return (
    // <TailwindProvider utilities={utilities}>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto" />
        <Text style={styles.header}>Currency Exchange</Text>
        <Main
          fromCountry={fromCountry}
          setFromCountry={setFromCountry}
          fromCountryFlag={fromCountryFlag}
          onChangefromCountryFlag={onChangefromCountryFlag}
          fromAmount={fromAmount}
          onChangefromAmount={onChangefromAmount}
          fromCurrency={fromCurrency}
          onChangefromCurrency={onChangefromCurrency}
          toCountry={toCountry}
          setToCountry={setToCountry}
          toCountryFlag={toCountryFlag}
          onChangetoCountryFlag={onChangetoCountryFlag}
          toAmount={toAmount}
          onChangetoAmount={onChangetoAmount}
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
