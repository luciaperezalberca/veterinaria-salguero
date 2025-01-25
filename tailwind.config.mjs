/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
			  'primary-violet': '#87519F',
			  'primary-lightviolet': '#D2C3D9',
			  'secondary-lightviolet': '#DBD0E0',
			  'secondary-blue': '#0000EE',
			  'tertiary-lightviolet': ' #F1E9F8',
			},
			dropShadow: {
				'md': '2px 4px 3px rgba(135, 81, 159, 0.50)',
				'2xl': '0 10px 10px rgba(135, 81, 159, 0.40)',
			}
		}
	},
	plugins: [],
}
