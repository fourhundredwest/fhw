import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			spacing: {
				"gap-sm": "var(--gap-sm)",
				gap: "var(--gap)",
				"gap-lg": "var(--gap-lg)",
				"header-height": "var(--header-height)",
				"content-height": "var(--content-height)",
				"content-width": "var(--content-width)",
				"form-height": "var(--form-height)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			colors: {
				"surface-0": "hsl(var(--color-surface-0) / <alpha-value>)",
				"surface-1": "hsl(var(--color-surface-1) / <alpha-value>)",
				"surface-2": "hsl(var(--color-surface-2) / <alpha-value>)",
				"surface-3": "hsl(var(--color-surface-3) / <alpha-value>)",
				subtle: "hsl(var(--color-subtle) / <alpha-value>)",
				text: "hsl(var(--color-text) / <alpha-value>)",
				primary: "hsl(var(--color-primary) / <alpha-value>)",
				"on-primary": "hsl(var(--color-on-primary) / <alpha-value>)",
				accent: "hsl(var(--color-accent) / <alpha-value>)",
				"on-accent": "hsl(var(--color-on-accent) / <alpha-value>)",
			},
			borderColor: {
				DEFAULT: "hsl(var(--color-surface-3))",
			},
			divideColor: {
				DEFAULT: "hsl(var(--color-surface-3))",
			},
		},
	},
	plugins: [],
};
