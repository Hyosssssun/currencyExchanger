import CountryInputField from "../../Global/CountryInputField";
import Flag from "../../Global/Flag";
import AmountInputField from "../../Global/AmountInputField";
import CurrencyInputField from "../../Global/CurrencyInputField";
import { SafeAreaView, StyleSheet } from "react-native";
import { View } from "react-native-web";

const ToContainer = ({
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
    <SafeAreaView style={styles.container}>
      <View>
        <CountryInputField country={toCountry} setCountry={setToCountry} />
      </View>
      <View style={styles.view}>
        <Flag text={toCountryFlag} onChangeText={onChangetoCountryFlag} />
        <AmountInputField text={toAmount} onChangeText={onChangetoAmount} />
        <CurrencyInputField
          text={toCurrency}
          onChangeText={onChangetoCurrency}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  view: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export default ToContainer;
