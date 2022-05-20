# 💰 Currency Exchange App

This project allows the user to exchange currency between two countries.

## Motivation

It was created because the authors wanted to strengthen their ReactJS knowledge by learning React Native and further their technical skills by learning Tailwind CSS.

And also to collaborate for the first time and have fun together!

## Demo

<div align="center">
<img src="https://user-images.githubusercontent.com/93612381/169525343-776fad4c-6c34-4b78-94c7-5b9ade4d424c.gif" alt="App demo on iPhone 12 PRO" />

<p style="font-weight: bold">iPhone 12 PRO</p>
</div>

## Technologies

- React v17.0.2
- React Native v0.68.2

## Future Goals

Our next sprint will include these improvements:

- [ ] a feature that allows the user to reverse the countries to exchange
- [ ] default flag images will be displayed
- [ ] the app will run on android simulator
- [ ] the user will be able to see exchange currency of Cuba

## Known Bugs

Currently, the app does not allow for the exchange of two countries:

1. **Cuba** - the [Country and Currency library](https://github.com/work-mate/country-and-currency-ts) that authors use, lists the currency code as CUC (Cuban Convertible Peso). This is unfortunate because the currency is no longer used in Cuba (it is Cuban Peso (CUP) only now), therefore, the [ExchangeRate API](https://www.exchangerate-api.com) does not recognise the code and will not exchange the currency.

   _This will be remedied with future releases of the app._

2. **North Korea** - the [ExchangeRate API](https://www.exchangerate-api.com) does not offer exchange rate data for North Korean Won (KPW) due to sanctions and lack of any international trade. See further information [here](https://www.exchangerate-api.com/docs/supported-currencies).

## Authors

- [Sunny (Hyosun Lee)](https://github.com/Hyosssssun)
- [Sandra Skolarczyk](https://github.com/sandiskolarczyk)
