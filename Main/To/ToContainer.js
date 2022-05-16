import CountryInputField from "../../Global/CountryInputField";
import Flag from "../../Global/Flag";
import AmountInputField from "../../Global/AmountInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";

const ToContainer = ({
  toCountry,
  setToCountry,
  toCountryFlag,
  onChangetoCountryFlag,
  toAmount,
  onChangetoAmount,
  toCurrency,
  onChangetoCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryInputField country={toCountry} setCountry={setToCountry} />
      <Flag text={toCountryFlag} onChangeText={onChangetoCountryFlag} />
      <AmountInputField text={toAmount} onChangeText={onChangetoAmount} />
      <CurrencyInputField text={toCurrency} onChangeText={onChangetoCurrency} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default ToContainer;
