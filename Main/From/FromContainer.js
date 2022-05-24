// React
import { SafeAreaView, StyleSheet } from "react-native";
// Components
import CountryInputField from "../../Global/CountryInputField";
import AmountInputField from "../../Global/AmountInputField";
// import Flag from "../../Global/Flag";
// import CurrencyInputField from "../../Global/CurrencyInputField";

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
      <CountryInputField country={fromCountry} setCountry={setFromCountry} />
      <AmountInputField
        countryFlag={fromCountryFlag}
        onChangeCountryFlag={onChangefromCountryFlag}
        amount={fromAmount}
        onChangeAmount={onChangefromAmount}
        currency={fromCurrency}
        onChangeCurrency={onChangefromCurrency}
        ieAmount="1.00"
        ieCurrency="PLN"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    marginVertical: "1rem",
  },
});

export default FromContainer;
