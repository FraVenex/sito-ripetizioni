/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				brand: {
					purple: "#4a7c59",
					indigo: "#2d6a4f",
					violet: "#74b08a",
					blue: "#a8d5b5"
				},
				dark: {
					900: "#080812",
					800: "#0d0d1a",
					700: "#111128",
					600: "#1a1a2e"
				}
			},
			backgroundImage: {
				"gradient-brand": "linear-gradient(135deg, #4a7c59, #2d6a4f)",
				"gradient-text": "linear-gradient(90deg, #74b08a, #a8d5b5)",
				"gradient-hero": "linear-gradient(135deg, #0a1f14 0%, #1a3a2a 50%, #0f2a1e 100%)"
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"]
			}
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: {
					primary: "#4a7c59",
					"primary-content": "#ffffff",
					secondary: "#74b08a",
					"secondary-content": "#ffffff",
					accent: "#a8d5b5",
					"accent-content": "#ffffff",
					neutral: "#1a1a2e",
					"neutral-content": "#ffffff",
					"base-100": "#0d0d1a",
					"base-200": "#111128",
					"base-300": "#1a1a2e",
					"base-content": "#ffffff",
					info: "#60a5fa",
					success: "#34d399",
					warning: "#fbbf24",
					error: "#f87171"
				}
			}
		],
		darkTheme: "dark"
	}
};
