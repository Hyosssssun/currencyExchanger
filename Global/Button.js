import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Raleway_800ExtraBold_Italic } from "@expo-google-fonts/raleway";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// import { useTailwind } from "tailwind-rn/dist";

const FlatButton = ({ onPress, text }) => {
  // const tailwind = useTailwind();

  let [fontsLoaded, error] = useFonts({
    Raleway_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#252525da",
    marginTop: "2rem",
    width: "23rem",
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Raleway_800ExtraBold_Italic",
    letterSpacing: 2,
  },
});
