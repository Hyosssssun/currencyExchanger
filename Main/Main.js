// React
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
// Components
import FromContainer from "./From/FromContainer.js";
import ToContainer from "./To/ToContainer.js";
import FlatButton from "../Global/Button";
// Utils
import { API_URL, API_KEY } from "@env";
import CountryAndCurrency from "@workmate/country-and-currency";

const Main = () => {
  const [fromCountry, setFromCountry] = useState("");
  const [fromCountryFlag, onChangefromCountryFlag] = useState("");
  const [fromAmount, onChangefromAmount] = useState("");
  const [fromCurrency, onChangefromCurrency] = useState("");

  const [toCountry, setToCountry] = useState("");
  const [toCountryFlag, onChangetoCountryFlag] = useState("");
  const [toAmount, onChangetoAmount] = useState("");
  const [toCurrency, onChangetoCurrency] = useState("");

  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

  const setCountries = (country) =>
    CountryAndCurrency.getCountriesBy("name", uppercaseWords(country));

  const setCurrencies = (fromCountry, toCountry) => {
    const from = setCountries(fromCountry);
    const to = setCountries(toCountry);
    if (from.length === 1) {
      onChangefromCountryFlag(from[0].currency.unicode);
      onChangefromCurrency(from[0].currency.code);
    }
    if (to.length === 1) {
      onChangetoCountryFlag(to[0].currency.unicode);
      onChangetoCurrency(to[0].currency.code);
    }
  };

  useEffect(() => {
    setCurrencies(fromCountry, toCountry);
  });

  // if you want just rates, use this URL:
  // `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  // can be separated to 'helper.js' file later.
  const fetchData = () =>
    fetch(
      `${API_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${fromAmount}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const twoDecimalAmount = data.conversion_result.toFixed(2);
        onChangetoAmount(twoDecimalAmount);
        // console.log(toAmount);
      })
      .catch((error) => console.error(error));

  const pressHandler = () => {
    return fetchData();
  };

  return (
    <View style={styles.container}>
      <FromContainer
        fromCountry={fromCountry}
        setFromCountry={setFromCountry}
        fromCountryFlag={fromCountryFlag}
        onChangefromCountryFlag={onChangefromCountryFlag}
        fromAmount={fromAmount}
        onChangefromAmount={onChangefromAmount}
        fromCurrency={fromCurrency}
        onChangefromCurrency={onChangefromCurrency}
      />
      <ToContainer
        toCountry={toCountry}
        setToCountry={setToCountry}
        toCountryFlag={toCountryFlag}
        onChangetoCountryFlag={onChangetoCountryFlag}
        toAmount={toAmount}
        onChangetoAmount={onChangetoAmount}
        toCurrency={toCurrency}
        onChangetoCurrency={onChangetoCurrency}
      />
      <FlatButton text="Show Me The Money!" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: "4rem",
    width: "100%",
  },
});

export default Main;
