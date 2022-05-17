import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const CurrencyInputField = ({ fromCurrency, onChangefromCurrency }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangefromCurrency}
        value={fromCurrency}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 50,
    width: "4rem",
    // marginVertical: "1rem",
    paddingVertical: "1rem",
    alignSelf: "center",
    textAlign: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "rgba(255, 255, 255, .55)",
    fontFamily: "Raleway_800ExtraBold",
    fontSize: "1rem",
    letterSpacing: 2,
    shadowColor: '#151515',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default CurrencyInputField;
