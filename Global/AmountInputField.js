// React
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, View } from "react-native";
// Utils
import tw from "twrnc";

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
    <SafeAreaView
      style={tw.style(
        `w-4/5, my-1.3, flex-1, flex-row, self-center, rounded-lg, shadow-[#151515]`
      )}
    >
      <View style={tw.style(`flex-1 bg-[#ffffffa6] flex-row && items-center`)}>
        <Image
          source={countryFlag}
          style={tw.style(`w-1/5, py-4, px-4, items-center`, {
            resizeMode: "contain",
          })}
          editable={false}
        />
        <TextInput
          style={tw.style(
            `w-3/5, py-4, text-center, text-[#252525], font-["Raleway_800ExtraBold"], text-xl, tracking-wide`,
            { outlineStyle: "none", fontFamily: "Raleway_800ExtraBold" }
          )}
          onChangeText={onChangeAmount}
          value={amount}
          placeholder={ieAmount}
        />
        <TextInput
          style={tw.style(
            `w-1/5, py-4, text-center, text-[#252525], text-base, tracking-wide`
          )}
          onChangeText={onChangeCurrency}
          value={currency}
          placeholder={ieCurrency}
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%", // w-4/5
    marginVertical: "0.3rem", // my-1.3
    flex: 1, // flex-1
    flexDirection: "row", // flex-row
    alignSelf: "center", // self-center
    borderRadius: 8, // rounded-lg
    backgroundColor: "rgba(255, 255, 255, .65)", // bg-[]
    shadowColor: "#151515", // shadow-[]
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3, // opacity-30
    shadowRadius: 8,
  },
  // sectionStyle: {
  //   flex: 1, // flex-1
  //   flexDirection: "row", // flex-row
  //   alignItems: "center", // items-center
  // },
  // flag: {
  //   width: "20%", // w-1/5
  //   paddingVertical: "1rem", // py-4
  //   paddingHorizontal: "1rem", // px-4
  //   resizeMode: "contain",
  //   alignItems: "center", // items-center
  // },
  amount: {
    width: "60%", // w-3/5
    paddingVertical: "1rem", // py-4
    textAlign: "center", // text-center
    color: "#252525", // text-[]
    fontFamily: "Raleway_800ExtraBold", // font-[]
    fontSize: "1.3rem", // text-xl
    letterSpacing: 2, // tracking-wide
    outlineStyle: "none",
  },
  currency: {
    width: "20%", // w-1/5
    paddingVertical: "1rem", // py-4
    textAlign: "center", // text-center
    color: "#252525", // text-[]
    fontFamily: "Raleway_800ExtraBold",
    fontSize: "1rem", // text-base
    letterSpacing: 2, // tracking-wide
  },
});

export default AmountInputField;
