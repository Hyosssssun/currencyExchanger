import plugin from 'twrnc';

module.exports = {
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
			addUtilities({});
		}),
	],
};