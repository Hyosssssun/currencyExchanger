// React
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
// Components
import Main from './Main/Main';
// Utils
import tw from 'twrnc';
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

export default function App() {
	const image = {
		uri: 'https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	};

	return (
		<View
			style={tw.style('flex-1', 'items-center', 'justify-center', 'w-full')}
		>
			<ImageBackground
				source={image}
				resizeMode='cover'
				style={tw`flex-1 justify-center`}
			>
				<StatusBar style='auto' />
				<Text
					style={tw.style(
						'w-11/12',
						'self-center',
						'text-center',
						'text-5xl',
						'tracking-widest',
						'text-[#fffaf0]',
						'font-bold',
						{ fontFamily: 'Raleway_900Black' }
					)}
				>
					{' '}
					Currency Exchange
				</Text>
				<Main />
				<Text
					style={tw.style(
						'w-11/12',
						'self-center',
						'text-center',
						'text-base',
						'tracking-widest',
						'text-[#fffaf0]',
						'absolute',
						'bottom-5',
						'font-semibold',
						{ fontFamily: 'Raleway_800ExtraBold' }
					)}
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
