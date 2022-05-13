import { View, StyleSheet } from "react-native";
import FromCountry from "./From/FromCountry.js";
import ToCountry from "./To/ToCountry.js";

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
      <FromCountry
        FromCountry={fromCountry}
        onChangeFromCountry={onChangefromCountry}
        FromCurrency={fromCurrency}
        onChangeFromCurrency={onChangefromCurrency}
      />
      <ToCountry
        ToCountry={toCountry}
        onChangeToCountry={onChangetoCountry}
        ToCurrency={toCurrency}
        onChangeToCurrency={onChangetoCurrency}
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
