import plugin from 'twrnc';

module.exports = {
	corePlugins: require('tailwind-rn/unsupported-core-plugins'),
	content: ['./src/**/*.{js,jsx}'],
	theme: {
    fontFamily: {
      display: 'Raleway',
      body: 'Raleway',
    },
		extend: {},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				colors: {
					'font-white': '#fffaf0',
					'font-black': '#252525',
					'shadow-black': '#151515',
					'background-black': '#252525da',
				},
				container: {
					'width': '100vw',
					'flex': 1,
					'alignItems': 'center',
					'justifyContent': 'center',
				},
			});
		}),
	],
};
// module.exports = {
//   corePlugins: require("tailwind-rn/unsupported-core-plugins"),
//   content: ["./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         'font-white': '#fffaf0',
//         'font-black': '#252525',
//         'shadow-black': '#151515',
//         'background-black': '#252525da'
//       }
//     },
//   },
//   plugins: [],
// };
