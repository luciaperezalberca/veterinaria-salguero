/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
			  'primary-violet': '#87519F',
			  'primary-lightviolet': '#D2C3D9',
			},
		}
	},
	plugins: [],
}
