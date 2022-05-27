// // React
// import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, View } from "react-native";

const AmountInputField = ({
  // onChangeCountryFlag,
  // countryFlag,
  amount,
  onChangeAmount,
  ieAmount,
  currency,
  onChangeCurrency,
  ieCurrency,
}) => {
  return (
    <SafeAreaView style={styles.inputContainer}>
    <View style={styles.sectionStyle}>
         {/* <Image source={countryFlag} style={styles.flag} editable={false} /> */}
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
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    marginVertical: 6,
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, .65)",
    shadowColor: "#151515",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  sectionStyle: {
    flex: 1,
    flexDirection: "row",
//     // alignItems: "center",
  },
  flag: {
//     // // width: "20%",
//     // // paddingVertical: "1rem",
//     // // paddingHorizontal: "1rem",
    resizeMode: "contain",
//     // alignItems: "center",
  },
  amount: {
    width: 180,
//     // // paddingVertical: "1rem",
    textAlign: "center",
    color: "#252525",
//     // // fontFamily: "Raleway_800ExtraBold",
    fontSize: 20,
    letterSpacing: 2,
//     // outlineStyle: "none",
  },
  currency: {
    width: 60,
//     // // paddingVertical: "1rem",
    textAlign: "center",
    color: "#252525",
//     // // fontFamily: "Raleway_800ExtraBold",
    fontSize: 20,
    letterSpacing: 2,
  },
});

export default AmountInputField;
