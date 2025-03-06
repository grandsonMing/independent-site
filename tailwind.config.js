import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

module.exports = {
	presets: [tailwindConfig],
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
	 extend: {
      outlineColor: {
        DEFAULT: '#ff00ff',
      },
      outlineOffset: {
        DEFAULT: '0px',
      },
      outlineWidth: {
        DEFAULT: '2px',
      },
    }
	},
	variants: {
		extend: {},
	},
	// plugins: [
	// 	require('@tailwindcss/forms'),
	// 	require('@tailwindcss/aspect-ratio'),
	// 	require('@tailwindcss/typography'),
	// ],
};
