import CountryInputField from "../../Global/CountryInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";

const ToCountry = ({
  ToCountry,
  onChangeToCountry,
  ToCurrency,
  onChangeToCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryInputField text={ToCountry} onChangeText={onChangeToCountry} />
      <CurrencyInputField text={ToCurrency} onChangeText={onChangeToCurrency} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default ToCountry;
