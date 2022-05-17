import CountryInputField from "../../Global/CountryInputField";
import Flag from "../../Global/Flag";
import AmountInputField from "../../Global/AmountInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet, View } from "react-native";

const FromContainer = ({
  fromCountry,
  setFromCountry,
  fromCountryFlag,
  onChangefromCountryFlag,
  fromAmount,
  onChangefromAmount,
  fromCurrency,
  onChangefromCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CountryInputField country={fromCountry} setCountry={setFromCountry} />
      </View>
      <View style={styles.view}>
        <Flag text={fromCountryFlag} onChangeText={onChangefromCountryFlag} />
        <AmountInputField text={fromAmount} onChangeText={onChangefromAmount} />
        <CurrencyInputField
          text={fromCurrency}
          onChangeText={onChangefromCurrency}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  view: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export default FromContainer;
