// React
import React from 'react';
// import { Text, TouchableOpacity } from 'react-native';
import { Text, TouchableOpacity } from '../lib/CustomComponents.js';
// Utils
import tw from 'twrnc';
// style
import classes from '../lib/CustomClasses.js';

const FlatButton = ({ onPress, text }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={classes.button__button}
		>
			<Text className={classes.button__text}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default FlatButton;

// const styles = StyleSheet.create({
//   button: {
//     width: "80%", // w-4/5
//     marginVertical: "1rem", // my-4
//     paddingVertical: "1rem", // py-4
//     alignSelf: "center", // self-center
//     backgroundColor: "#252525da",
//     borderRadius: 8, // rounded-lg
//     shadowColor: "#151515", // shadow-neutral-900
//     shadowOffset: { width: 4, height: 4 }, // shadow-2xl
//     shadowOpacity: 0.3, // shadow-2xl
//     shadowRadius: 8,
//   },
//   buttonText: {
//     textAlign: "center", // text-center
//     color: "#fffaf0",
//     textTransform: "uppercase", // uppercase
//     fontSize: 16, // text-lg
//     fontFamily: "Raleway_800ExtraBold_Italic",
//     letterSpacing: 2, // tracking-wide
//   },
// });
