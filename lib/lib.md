## Problem

We realised that when inline style is too long, the code gets dirty. So we tried several ways including using plugin of tailwind.config.js, multiple libraries together etc. but in the end, I found this way to clear and you don't have to manipulate their own Native components. 

## Solution

1. Create lib/CustomComponents.js

```js
import { Text, SafeAreaView, View, ImageBackground, TouchableOpacity, TextInput, Image as original } from "react-native";
import tw from "twrnc";

const Text = ({ className, children, ...rest }) => {
  return <original.Text style={tw.style(className)} {...rest}>{children}</original.Text>
};
const SafeAreaView = ({ className, children, ...rest }) => {
  return <original.SafeAreaView style={tw.style(className)} {...rest}>{children}</original.SafeAreaView>
};
const View = ({ className, children, ...rest }) => {
  return <original.View style={tw.style(className)} {...rest}>{children}</original.View>
};
const ImageBackground = ({ className, children, ...rest }) => {
  return <original.ImageBackground style={tw.style(className)} {...rest}>{children}</original.ImageBackground>
};
const TouchableOpacity = ({ className, children, ...rest }) => {
  return <original.TouchableOpacity style={tw.style(className)} {...rest}>{children}</original.TouchableOpacity>
};
const TextInput = ({ className, children, ...rest }) => {
  return <original.TextInput style={tw.style(className)} {...rest}>{children}</original.TextInput>
};
const Image = ({ className, children, ...rest }) => {
  return <original.Image style={tw.style(className)} {...rest}>{children}</original.Image>
};

export { Text, SafeAreaView, View, ImageBackground, TouchableOpacity, TextInput, Image };
```

2. Create lib/CustomClasses.js

```js
const app = `flex-1 items-center justify-center w-full`;
const app__bg = `flex-1 justify-center`
const app__header = `w-11/12 self-center text-center text-5xl tracking-widest text-[#fffaf0] font-bold`, { fontFamily: 'Raleway_900Black' }
const app__footer = `w-11/12 self-center text-center text-base tracking-widest text-[#fffaf0] absolute bottom-5 font-semibold`,	{ fontFamily: 'Raleway_800ExtraBold' }
const main = `items-center self-center justify-center my-16 w-full`
const fromAndTo = `justify-center w-full my-4`
const amountInputField = `w-4/5 my-1.3 flex-1 flex-row self-center shadow-[#151515] shadow-2xl shadow-neutral-900`
const amountInputField__container = `flex-1 bg-[#ffffffa6] rounded-lg flex-row items-center`
const amountInputField__flag = `w-1/5 py-4 px-4 items-center`, { resizeMode: 'contain' }
const amountInputField__amount = `w-3/5 py-4 text-center text-[#252525] text-xl tracking-widest`, { outlineStyle: 'none', fontFamily: 'Raleway_800ExtraBold' }
const amountInputField__currency = `w-1/5 py-4 text-center text-[#252525] text-base tracking-widest`, { outlineStyle: 'none', fontFamily: 'Raleway_800ExtraBold' }
const countryInputField__country = `w-4/5 my-1 py-4 self-center text-center bg-[#ffffffa6] rounded-lg uppercase text-neutral-800 text-lg tracking-wide shadow-2xl shadow-neutral-900`, { outlineStyle: 'none', fontFamily: 'Raleway_800ExtraBold' }
const button__button = `w-4/5 my-4 py-4 self-center bg-[#252525da] rounded-lg shadow-2xl shadow-neutral-900`
const button__text = `text-center bg-[#fffaf0] uppercase text-lg tracking-widest`, { fontFamily: 'Raleway_800ExtraBold_Italic' }

export { 
    app,
    app__bg,
    app__header,
    app__footer,
    main,
    fromAndTo,
    amountInputField,
    amountInputField__container,
    amountInputField__flag,
    amountInputField__amount,
    amountInputField__currency,
    countryInputField__country,
    button__button,
    button__text 
};
```