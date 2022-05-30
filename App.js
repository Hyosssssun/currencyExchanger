// React
// import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Text,
	View,
	ImageBackground,
} from 'react-native';
// Components
import Main from './Main/Main';
// Utils
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

export default function App() {
	const image = {
		uri: 'https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMode='cover' style={styles.image}>
				<StatusBar style='auto' />
				<View style={styles.mainContainer}>
					<Text style={styles.header}>Currency Exchange</Text>
					<Main />
					<Text style={styles.footer}>All Rights Reserved By S&S © 2022</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

//  // <TailwindProvider utilities={utilities}>
//  <View style={styles.container}>
//  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//    <StatusBar style="auto" />
//    <Text style={styles.header}> Currency Exchange</Text>
//    <Main />
//  </ImageBackground>
// </View>
// // </TailwindProvider>

const styles = StyleSheet.create({
	container: {
		height: '100%',
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	header: {
		marginBottom: 30,
		marginTop: 80,
		textAlign: 'center',
		fontSize: 40,
		fontWeight: '800',
		color: '#fffaf0',
		letterSpacing: 4,
	},
	footer: {
		alignSelf: 'center',
		textAlign: 'center',
		fontWeight: '800',
		fontSize: 15,
		color: '#fffaf0',
		letterSpacing: 1.5,
		bottom: 20,
		// position: "absolute",
	},
});
