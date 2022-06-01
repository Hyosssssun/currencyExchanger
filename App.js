// React
import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { Text, View, ImageBackground } from 'react-native';
import { Text, View, ImageBackground } from './lib/CustomComponents.js';
// Components
import Main from './Main/Main';
// Utils
// import tw from 'twrnc';
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';
// style
import classes, { custom } from './lib/CustomClasses.js';

import {
	Raleway_100Thin,
	Raleway_100Thin_Italic,
	Raleway_200ExtraLight,
	Raleway_200ExtraLight_Italic,
	Raleway_300Light,
	Raleway_300Light_Italic,
	Raleway_400Regular,
	Raleway_400Regular_Italic,
	Raleway_500Medium,
	Raleway_500Medium_Italic,
	Raleway_600SemiBold,
	Raleway_600SemiBold_Italic,
	Raleway_700Bold,
	Raleway_700Bold_Italic,
	Raleway_800ExtraBold,
	Raleway_800ExtraBold_Italic,
	Raleway_900Black,
	Raleway_900Black_Italic,
} from '@expo-google-fonts/raleway';
import { useFonts } from 'expo-font';




export default function App() {
	const image = {
		uri: 'https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	};

	useFonts({
		Raleway_100Thin,
		Raleway_100Thin_Italic,
		Raleway_200ExtraLight,
		Raleway_200ExtraLight_Italic,
		Raleway_300Light,
		Raleway_300Light_Italic,
		Raleway_400Regular,
		Raleway_400Regular_Italic,
		Raleway_500Medium,
		Raleway_500Medium_Italic,
		Raleway_600SemiBold,
		Raleway_600SemiBold_Italic,
		Raleway_700Bold,
		Raleway_700Bold_Italic,
		Raleway_800ExtraBold,
		Raleway_800ExtraBold_Italic,
		Raleway_900Black,
		Raleway_900Black_Italic,
	});
	
	return (
		<View className={classes.app}>
			<ImageBackground
				source={image}
				resizeMode='cover'
				className={classes.app__bg}
			>
				<StatusBar style='auto' />
				<Text className={classes.app__header}>
					{' '}
					Currency Exchange
				</Text>
				<Main />
				<Text className={classes.app__footer}
				>
					All Rights Reserved By S&S © 2022
				</Text>
			</ImageBackground>
		</View>
	);
}

// const styles = StyleSheet.create({
//   // container: {
//   //   width: "100vw",
//   //   flex: 1,
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // },
//   // image: {
//   //   flex: 1,
//   //   justifyContent: "center",
//   // },
//   header: {
//     // width: "90%",
//     // alignSelf: "center",
//     // textAlign: "center",
//     // fontSize: "3rem",
//     // letterSpacing: 4,
//     // color: "#fffaf0",
//     // fontFamily: "Raleway_900Black",---------------------------------
//   },
//   footer: {
//     // width: "90%",
//     // alignSelf: "center",
//     // textAlign: "center",
//     // fontSize: "1rem",
//     // color: "#fffaf0",
//     // letterSpacing: 1.5,
//     // position: "absolute",
//     // bottom: 20,
//     // fontFamily: "Raleway_800ExtraBold", ------------------------------
//   },
// });
