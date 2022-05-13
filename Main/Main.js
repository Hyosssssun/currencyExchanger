import { View, StyleSheet } from "react-native";
import FromContainer from "./From/FromContainer.js";
import ToContainer from "./To/ToContainer.js";

const Main = ({
  fromCountry,
  setFromCountry,
  fromCountryFlag,
  onChangefromCountryFlag,
  fromAmount,
  onChangefromAmount,
  fromCurrency,
  onChangefromCurrency,
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
    <View style={styles.container}>
      <FromContainer
        fromCountry={fromCountry}
        setFromCountry={setFromCountry}
        fromCountryFlag={fromCountryFlag}
        onChangefromCountryFlag={onChangefromCountryFlag}
        fromAmount={fromAmount}
        onChangefromAmount={onChangefromAmount}
        fromCurrency={fromCurrency}
        onChangefromCurrency={onChangefromCurrency}
      />
      <ToContainer
        toCountry={toCountry}
        setToCountry={setToCountry}
        toCountryFlag={toCountryFlag}
        onChangetoCountryFlag={onChangetoCountryFlag}
        toAmount={toAmount}
        onChangetoAmount={onChangetoAmount}
        toCurrency={toCurrency}
        onChangetoCurrency={onChangetoCurrency}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
