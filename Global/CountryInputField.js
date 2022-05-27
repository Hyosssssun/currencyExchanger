// React
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
        placeholder="Enter the country"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    // width: "80%",
    // marginVertical: "0.3rem",
    // paddingVertical: "1rem",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, .65)",
    borderRadius: 8,
    textTransform: "uppercase",
    color: "#252525",
    // fontFamily: "Raleway_800ExtraBold",
    // fontSize: "1.2rem",
    letterSpacing: 2,
    shadowColor: "#151515",
    // shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    outlineStyle: "none",
  },
});

export default CountryInputField;
