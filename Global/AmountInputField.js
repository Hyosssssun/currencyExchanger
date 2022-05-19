// React
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";

const AmountInputField = ({
  onChangeCountryFlag,
  countryFlag,
  amount,
  onChangeAmount,
  ieAmount,
  currency,
  onChangeCurrency,
  ieCurrency,
}) => {
  return (
    <SafeAreaView style={styles.inputContainer}>
      <Image style={styles.flag} source={countryFlag} editable={false} />
      <TextInput
        style={styles.amount}
        onChangeText={onChangeAmount}
        value={amount}
        placeholder={ieAmount}
      />
      <TextInput
        style={styles.currency}
        onChangeText={onChangeCurrency}
        value={currency}
        placeholder={ieCurrency}
        editable={false}
        selectTextOnFocus={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginVertical: "0.3rem",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, .65)",
    shadowColor: "#151515",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  flag: {
    width: "20%",
    paddingVertical: "1rem",
    borderRadius: "5%",
  },
  amount: {
    width: "60%",
    paddingVertical: "1rem",
    textAlign: "center",
    color: "#252525",
    fontFamily: "Raleway_800ExtraBold",
    fontSize: "1.3rem",
    letterSpacing: 2,
    outlineStyle: "none",
  },
  currency: {
    width: "20%",
    paddingVertical: "1rem",
    textAlign: "center",
    color: "#252525",
    fontFamily: "Raleway_800ExtraBold",
    fontSize: "1rem",
    letterSpacing: 2,
  },
});

export default AmountInputField;
