import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const CountryInputField = ({ country, setCountry }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setCountry(newText)}
        defaultValue={country}
        autoCapitalize="words"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontFamily: "Raleway_800ExtraBold",
    textAlign: "center",
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, .7)",
  },
});

export default CountryInputField;
