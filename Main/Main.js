import { View, StyleSheet } from "react-native";
import FromContainer from "./From/FromContainer.js";
import ToContainer from "./To/ToContainer.js";

const Main = ({
  fromCountry,
  onChangefromCountry,
  fromAmount,
  onChangefromAmount,
  fromCurrency,
  onChangefromCurrency,
  toCountry,
  onChangetoCountry,
  toAmount,
  onChangetoAmount,
  toCurrency,
  onChangetoCurrency,
}) => {
  return (
    <View style={styles.container}>
      <FromContainer
        fromCountry={fromCountry}
        onChangefromCountry={onChangefromCountry}
        fromAmount={fromAmount}
        onChangefromAmount={onChangefromAmount}
        fromCurrency={fromCurrency}
        onChangefromCurrency={onChangefromCurrency}
      />
      <ToContainer
        toCountry={toCountry}
        onChangetoCountry={onChangetoCountry}
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
