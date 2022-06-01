// React
import React from 'react';
// import { SafeAreaView, TextInput, Image, View } from 'react-native';
import { SafeAreaView, TextInput, Image, View } from '../lib/CustomComponents.js';
// Utils
// import tw from 'twrnc';
// styles
import classes from '../lib/CustomClasses.js';

const AmountInputField = ({
	onChangeCountryFlag,
	countryFlag,
	amount,
	onChangeAmount,
	ieAmount,
	currency,
	onChangeCurrency,
	ieCurrency,
}) => {
	return (
		<SafeAreaView className={classes.amountInputField}>
			<View className={classes.amountInputField__container}>
				<Image
					source={countryFlag}
					className={classes.amountInputField__flag}
					editable={false}
				/>
				<TextInput 
					className={classes.amountInputField__amount}
					onChangeText={onChangeAmount}
					value={amount}
					placeholder={ieAmount}
				/>
				<TextInput 
					className={classes.amountInputField__currency}
					onChangeText={onChangeCurrency}
					value={currency}
					placeholder={ieCurrency}
					editable={false}
					selectTextOnFocus={false}
				/>
			</View>
		</SafeAreaView>
	);
};

export default AmountInputField;

// const styles = StyleSheet.create({
//   inputContainer: {
//     width: "80%", // w-4/5
//     marginVertical: "0.3rem", // my-1.3
//     flex: 1, // flex-1
//     flexDirection: "row", // flex-row
//     alignSelf: "center", // self-center
//     borderRadius: 8, // rounded-lg
//     backgroundColor: "rgba(255, 255, 255, .65)", // bg-[]
//     shadowColor: "#151515", // shadow-[]
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.3, // opacity-30
//     shadowRadius: 8,
//   },
//   // sectionStyle: {
//   //   flex: 1, // flex-1
//   //   flexDirection: "row", // flex-row
//   //   alignItems: "center", // items-center
//   // },
//   // flag: {
//   //   width: "20%", // w-1/5
//   //   paddingVertical: "1rem", // py-4
//   //   paddingHorizontal: "1rem", // px-4
//   //   resizeMode: "contain",
//   //   alignItems: "center", // items-center
//   // },
//   // amount: {
//   //   width: "60%", // w-3/5
//   //   paddingVertical: "1rem", // py-4
//   //   textAlign: "center", // text-center
//   //   color: "#252525", // text-[]
//   //   fontFamily: "Raleway_800ExtraBold", // font-[]
//   //   fontSize: "1.3rem", // text-xl
//   //   letterSpacing: 2, // tracking-wide
//   //   outlineStyle: "none",
//   // },
//   // currency: {
//   //   width: "20%", // w-1/5
//   //   paddingVertical: "1rem", // py-4
//   //   textAlign: "center", // text-center
//   //   color: "#252525", // text-[]
//   //   fontFamily: "Raleway_800ExtraBold",
//   //   fontSize: "1rem", // text-base
//   //   letterSpacing: 2, // tracking-wide
//   // },
// });
