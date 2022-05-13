import CountryInputField from "../../Global/CountryInputField";
import Flag from "../../Global/Flag";
import AmountInputField from "../../Global/AmountInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";

const FromContainer = ({
  fromCountry,
  onChangefromCountry,
  fromCountryFlag,
  onChangefromCountryFlag,
  fromAmount,
  onChangefromAmount,
  fromCurrency,
  onChangefromCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryInputField
        text={fromCountry}
        onChangeText={onChangefromCountry}
      />
      <Flag text={fromCountryFlag} onChangeText={onChangefromCountryFlag} />
      <AmountInputField text={fromAmount} onChangeText={onChangefromAmount} />
      <CurrencyInputField
        text={fromCurrency}
        onChangeText={onChangefromCurrency}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default FromContainer;
