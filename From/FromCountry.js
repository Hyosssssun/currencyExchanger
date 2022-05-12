import CountryInputField from "../CountryInputField";
import CurrencyInputField from "../CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";

const FromCountry = ({
  FromCountry,
  onChangeFromCountry,
  FromCurrency,
  onChangeFromCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryInputField
        text={FromCountry}
        onChangeText={onChangeFromCountry}
      />
      <CurrencyInputField
        text={FromCurrency}
        onChangeText={onChangeFromCurrency}
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

export default FromCountry;
