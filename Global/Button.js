// React
import React from "react";
import { Text, TouchableOpacity } from "react-native";
// Expo
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
} from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// Utils
import tw from "twrnc";

const FlatButton = ({ onPress, text }) => {
  // const tailwind = useTailwind();

  let [fontsLoaded, error] = useFonts({
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

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw.style(
        "w-4/5",
        "my-4",
        "py-4",
        "self-center",
        "bg-[#252525da]",
        "rounded-lg",
        "shadow-neutral-900",
        "shadow-2xl"
      )}
    >
      <Text
        style={tw.style(
          "text-center",
          "text-[#fffaf0]",
          "uppercase",
          "text-lg",
          "tracking-widest",
          { fontFamily: "Raleway_800ExtraBold_Italic" }
        )}
      >
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
