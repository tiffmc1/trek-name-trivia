import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				deep_blue: "#010124",
				medium_blue: "#020252",
				true_blue: "#030380",
				light_blue: "#0962d6",
			},
		},
	},
	plugins: [],
};
export default config;
