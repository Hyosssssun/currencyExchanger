import { View, StyleSheet } from "react-native";
import FromContainer from "./From/FromContainer.js";
import ToContainer from "./To/ToContainer.js";

const Main = ({
  fromCountry,
  onChangefromCountry,
  fromCurrency,
  onChangefromCurrency,
  toCountry,
  onChangetoCountry,
  toCurrency,
  onChangetoCurrency,
}) => {
  return (
    <View style={styles.container}>
      <FromContainer
        fromCountry={fromCountry}
        onChangefromCountry={onChangefromCountry}
        fromCurrency={fromCurrency}
        onChangefromCurrency={onChangefromCurrency}
      />
      <ToContainer
        toCountry={toCountry}
        onChangetoCountry={onChangetoCountry}
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
