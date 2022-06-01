import  plugin  from 'twrnc';

module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				fromContainerStyle: {
					// marginVertical: '8rem',
					alignItems: 'center',
					justifyContent: 'center',
				},
				customFont: {
					fontFamily: 'Raleway_800ExtraBold',
				},
			});
		}),
	],
};