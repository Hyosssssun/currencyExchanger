import { Text as TextRn, SafeAreaView as SafeAreaViewRn, View as ViewRn, ImageBackground as ImageBackgroundRn, TouchableOpacity as TouchableOpacityRn, TextInput as TextInputRn, Image as ImageRn } from "react-native";
import tw from "twrnc";

const Text = ({ className, children, ...rest }) => {
  return <TextRn style={tw.style(className)} {...rest}>{children}</TextRn>
};
const SafeAreaView = ({ className, children, ...rest }) => {
  return <SafeAreaViewRn style={tw.style(className)} {...rest}>{children}</SafeAreaViewRn>
};
const View = ({ className, children, ...rest }) => {
  return <ViewRn style={tw.style(className)} {...rest}>{children}</ViewRn>
};
const ImageBackground = ({ className, children, ...rest }) => {
  return <ImageBackgroundRn style={tw.style(className)} {...rest}>{children}</ImageBackgroundRn>
};
const TouchableOpacity = ({ className, children, ...rest }) => {
  return <TouchableOpacityRn style={tw.style(className)} {...rest}>{children}</TouchableOpacityRn>
};
const TextInput = ({ className, children, ...rest }) => {
  return <TextInputRn style={tw.style(className)} {...rest}>{children}</TextInputRn>
};
const Image = ({ className, children, ...rest }) => {
  return <ImageRn style={tw.style(className)} {...rest}>{children}</ImageRn>
};

export { Text, SafeAreaView, View, ImageBackground, TouchableOpacity, TextInput, Image };