// React
import { SafeAreaView } from 'react-native';
// Components
import CountryInputField from '../../Global/CountryInputField';
import AmountInputField from '../../Global/AmountInputField';
// util
import tw from 'twrnc';

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
		<SafeAreaView style={tw.style('justify-center', 'w-full', 'my-4')}>
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