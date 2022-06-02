// React
import { SafeAreaView } from "react-native";
// import { View } from "react-native-web";
// Components
import CountryInputField from "../../Global/CountryInputField";
import AmountInputField from "../../Global/AmountInputField";
// util
import tw from "twrnc";

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
    <SafeAreaView style={tw.style("justify-center", "w-full", "mb-4", "mt-2")}>
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

export default ToContainer;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     width: "100%",
//     marginVertical: "1rem",
//   },
// });
