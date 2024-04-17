// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	modules: [
		[
			// https://google-fonts.nuxtjs.org
			"@nuxtjs/google-fonts",
			{
				families: {
					"DM Sans": [400, 500, 600, 700],
				},
			},
		],
	],
	postcss: {
		plugins: {
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
