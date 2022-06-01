// React
// import { SafeAreaView } from 'react-native';
import { SafeAreaView } from '../../lib/CustomComponents.js';
// Components
import CountryInputField from '../../Global/CountryInputField';
import AmountInputField from '../../Global/AmountInputField';
// util
// import tw from 'twrnc';
// style
import classes from '../../lib/CustomClasses.js';

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
		<SafeAreaView className={classes.fromAndTo}>
			<CountryInputField country={toCountry} setCountry={setToCountry} />
			<AmountInputField
				countryFlag={toCountryFlag}
				onChangeCountryFlag={onChangetoCountryFlag}
				amount={toAmount}
				onChangeAmount={onChangetoAmount}
				currency={toCurrency}
				onChangeCurrency={onChangetoCurrency}
				ieFlag='🇰🇷'
				ieCurrency='KRW'
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
