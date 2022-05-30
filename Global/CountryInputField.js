// React
import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
// util
import tw from 'twrnc';

const CountryInputField = ({ country, setCountry }) => {
	return (
		<SafeAreaView>
			<TextInput
				style={tw.style(
					'w-4/5',
					'my-1',
					'py-4',
					'self-center',
					'text-center',
					'bg-[#ffffffa6]',
					'rounded-lg',
					'uppercase',
					'text-neutral-800',
					'text-lg',
					'tracking-wide',
					'shadow-2xl',
					'shadow-neutral-900',
					{ outlineStyle: 'none', fontFamily: 'Raleway_800ExtraBold' }
				)}
				onChangeText={(newText) => setCountry(newText)}
				defaultValue={country}
				autoCapitalize='words'
				placeholder='Enter the country'
			/>
		</SafeAreaView>
	);
};

export default CountryInputField;
