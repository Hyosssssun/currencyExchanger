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
  const [fromCountry, onChangefromCountry] = useState("Japan");
  const [fromCountryFlag, onChangefromCountryFlag] = useState("");
  const [fromAmount, onChangefromAmount] = useState("1.00");
  const [fromCurrency, onChangefromCurrency] = useState("");
  const [toCountry, onChangetoCountry] = useState("Taiwan");
  const [toCountryFlag, onChangetoCountryFlag] = useState("");
  const [toAmount, onChangetoAmount] = useState("");
  const [toCurrency, onChangetoCurrency] = useState("");
  const [amount, setAmount] = useState("1000");

  let inputFromCountry = CountryAndCurrency.getCountriesBy("name", fromCountry);
  console.log(inputFromCountry);

  let fromCountryFlagEmoji = inputFromCountry[0].currency.unicode;
  console.log(fromCountryFlagEmoji);

  let inputFromCurrency = inputFromCountry[0].currency.code;
  console.log(inputFromCurrency);

  function setFromCurrency() {
    onChangefromCountryFlag(fromCountryFlagEmoji);
    onChangefromCurrency(inputFromCurrency);
  }
  useEffect(() => {
    setFromCurrency();
  }, []);

  let inputToCountry = CountryAndCurrency.getCountriesBy("name", toCountry);
  console.log(inputToCountry);

  let toCountryFlagEmoji = inputToCountry[0].currency.unicode;
  console.log(toCountryFlagEmoji);

  let inputToCurrency = inputToCountry[0].currency.code;
  console.log(inputToCurrency);

  function setToCurrency() {
    onChangetoCountryFlag(toCountryFlagEmoji);
    onChangetoCurrency(inputToCurrency);
  }
  useEffect(() => {
    setToCurrency();
  }, []);

  // if you want just rates, use this URL:
  // `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  // can be separated to 'helper.js' file later.
  const fetchData = () =>
    fetch(`${API_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`)
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
          onChangefromCountry={onChangefromCountry}
          fromCountryFlag={fromCountryFlag}
          onChangefromCountryFlag={onChangefromCountryFlag}
          fromAmount={fromAmount}
          onChangefromAmount={onChangefromAmount}
          fromCurrency={fromCurrency}
          onChangefromCurrency={onChangefromCurrency}
          toCountry={toCountry}
          onChangetoCountry={onChangetoCountry}
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
