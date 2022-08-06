/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('../tailwind-preset.js')],
	content: [
		'./src/pages/**/*.{html,js,vue}',
		'./src/components/**/*.{html,js,vue}',
		'./src/layouts/**/*.{html,js,vue}',
		'./src/App.vue',
	],
};
