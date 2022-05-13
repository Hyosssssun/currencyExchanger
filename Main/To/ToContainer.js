import CountryInputField from "../../Global/CountryInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";

const ToContainer = ({
  toCountry,
  onChangetoCountry,
  toCurrency,
  onChangetoCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryInputField text={toCountry} onChangeText={onChangetoCountry} />
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
