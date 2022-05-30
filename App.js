// React
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
// Components
import Main from "./Main/Main";
// Utils
import tw from 'twrnc';
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

export default function App() {
  const image = {
    uri: "https://images.unsplash.com/photo-1612540646801-4d5d183e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  };

  return (
    // // <TailwindProvider utilities={utilities}>
    // <View style={styles.container}>
    //   <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    //     <StatusBar style="auto" />
    //     <Text style={styles.header}> Currency Exchange</Text>
    //     <Main />
    //     <Text style={styles.footer}> All Rights Reserved By S&S © 2022</Text>
    //   </ImageBackground>
    // </View>
    // // </TailwindProvider>
    // <TailwindProvider utilities={utilities}>
    <View>
        <StatusBar style="auto" />
        <Text style={tw`bg-blue-100`}> Currency Exchange</Text>
        <Text style={tw`bg-red-800`}> All Rights Reserved By S&S © 2022</Text>
    </View>
    // </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     width: "100vw",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   header: {
//     width: "90%",
//     alignSelf: "center",
//     textAlign: "center",
//     fontFamily: "Raleway_900Black",
//     fontSize: "3rem",
//     color: "#fffaf0",
//     letterSpacing: 4,
//   },
//   footer: {
//     width: "90%",
//     alignSelf: "center",
//     textAlign: "center",
//     fontFamily: "Raleway_800ExtraBold",
//     fontSize: "1rem",
//     color: "#fffaf0",
//     letterSpacing: 1.5,
//     position: "absolute",
//     bottom: 20,
//   },
// });
