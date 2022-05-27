import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
// import {
//   Raleway_100Thin,
//   Raleway_100Thin_Italic,
//   Raleway_200ExtraLight,
//   Raleway_200ExtraLight_Italic,
//   Raleway_300Light,
//   Raleway_300Light_Italic,
//   Raleway_400Regular,
//   Raleway_400Regular_Italic,
//   Raleway_500Medium,
//   Raleway_500Medium_Italic,
//   Raleway_600SemiBold,
//   Raleway_600SemiBold_Italic,
//   Raleway_700Bold,
//   Raleway_700Bold_Italic,
//   Raleway_800ExtraBold,
//   Raleway_800ExtraBold_Italic,
//   Raleway_900Black,
//   Raleway_900Black_Italic,
// } from "@expo-google-fonts/raleway";

// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
// import { useTailwind } from "tailwind-rn/dist";

const FlatButton = ({ onPress, text }) => {
  // const tailwind = useTailwind();

  // let [fontsLoaded, error] = useFonts({
  //   Raleway_100Thin,
  //   Raleway_100Thin_Italic,
  //   Raleway_200ExtraLight,
  //   Raleway_200ExtraLight_Italic,
  //   Raleway_300Light,
  //   Raleway_300Light_Italic,
  //   Raleway_400Regular,
  //   Raleway_400Regular_Italic,
  //   Raleway_500Medium,
  //   Raleway_500Medium_Italic,
  //   Raleway_600SemiBold,
  //   Raleway_600SemiBold_Italic,
  //   Raleway_700Bold,
  //   Raleway_700Bold_Italic,
  //   Raleway_800ExtraBold,
  //   Raleway_800ExtraBold_Italic,
  //   Raleway_900Black
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    // width: "80%",
    // marginVertical: "1rem",
    // paddingVertical: "1rem",
    alignSelf: "center",
    backgroundColor: "#252525da",
    borderRadius: 8,
    shadowColor: '#151515',
    // shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffaf0",
    textTransform: "uppercase",
    fontSize: 16,
    // fontFamily: "Raleway_800ExtraBold_Italic",
    letterSpacing: 2,
  },
});
