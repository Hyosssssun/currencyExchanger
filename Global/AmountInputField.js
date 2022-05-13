import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const AmountInputField = ({ text, onChangeText }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontFamily: "Raleway_800ExtraBold",
    backgroundColor: "rgba(255, 255, 255, .7)",
  },
});

export default AmountInputField;
