import CountryInputField from "../../Global/CountryInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";

const FromContainer = ({
  fromCountry,
  onChangefromCountry,
  fromCurrency,
  onChangefromCurrency,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryInputField
        text={fromCountry}
        onChangeText={onChangefromCountry}
      />
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
