import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Flag = ({ text, onChangeText }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      {/* <Image source={require(`${toCountryFlag}`)} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 50,
    width: 60,
    // marginVertical: "1rem",
    paddingVertical: "1rem",
    alignSelf: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, .55)",
    fontFamily: "Raleway_800ExtraBold",
    fontSize: "1rem",
    letterSpacing: 2,
    shadowColor: '#151515',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default Flag;
