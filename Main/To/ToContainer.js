// React
import { SafeAreaView, StyleSheet } from "react-native";
// import { View } from "react-native-web";
// Components
import CountryInputField from "../../Global/CountryInputField";
import AmountInputField from "../../Global/AmountInputField";

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
      <CountryInputField country={toCountry} setCountry={setToCountry} />
      <AmountInputField
        countryFlag={toCountryFlag}
        onChangeCountryFlag={onChangetoCountryFlag}
        amount={toAmount}
        onChangeAmount={onChangetoAmount}
        currency={toCurrency}
        onChangeCurrency={onChangetoCurrency}
        ieFlag="🇰🇷"
        ieCurrency="KRW"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // width: "100%",
    // marginVertical: "1rem",
  },
});

export default ToContainer;
