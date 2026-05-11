// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	modules: [
		"@nuxt/eslint",
		[
			// https://google-fonts.nuxtjs.org
			"@nuxtjs/google-fonts",
			{
				families: {
					// TODO: Remove unused weights
					"DM Sans": [300, 400, 500, 600, 700],
				},
			},
		],
	],
	nitro: {
		preset: "static",
		prerender: {
			crawlLinks: true,
			routes: ["/", "/200.html", "/404.html"],
			failOnError: false,
		},
	},
	app: {
		buildAssetsDir: "/_nuxt/",
	},
	postcss: {
		plugins: {
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
