import CountryInputField from "../../Global/CountryInputField";
import AmountInputField from "../../Global/AmountInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";

const ToContainer = ({
  toCountry,
  onChangetoCountry,
  toAmount,
  onChangetoAmount,
  toCurrency,
  onChangetoCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryInputField text={toCountry} onChangeText={onChangetoCountry} />
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
