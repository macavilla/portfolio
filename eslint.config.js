import eslintPluginAstro from "eslint-plugin-astro";
export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
		extends: [
			"airbnb",
			"airbnb-typescript",
			"plugin:react/recommended",
			"plugin:testing-library/react",
			"plugin:jest-dom/recommended",
			"plugin:jest/recommended",
			"plugin:tailwindcss/recommended",
			"next",
			"prettier",
		],
	},
];
