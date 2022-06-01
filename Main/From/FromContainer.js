// React
// import { SafeAreaView } from 'react-native';
import { SafeAreaView } from '../../lib/CustomComponents.js';
// Components
import CountryInputField from '../../Global/CountryInputField';
import AmountInputField from '../../Global/AmountInputField';
// style
import classes from '../../lib/CustomClasses.js';

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
		<SafeAreaView className={classes.fromAndTo}>
			<CountryInputField country={fromCountry} setCountry={setFromCountry} />
			<AmountInputField
				countryFlag={fromCountryFlag}
				onChangeCountryFlag={onChangefromCountryFlag}
				amount={fromAmount}
				onChangeAmount={onChangefromAmount}
				currency={fromCurrency}
				onChangeCurrency={onChangefromCurrency}
				ieAmount='1.00'
				ieCurrency='PLN'
			/>
		</SafeAreaView>
	);
};

export default FromContainer;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     width: "100%",
//     marginVertical: "1rem",
//   },
// });
