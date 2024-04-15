import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReactConfig,
	{
		files: ["**/*.{js,jsx}"],
		rules: {
			"react/no-array-index-key": "error",
			semi: "error",
			"prefer-const": "error",
			"react/self-closing-comp": "error",
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-pascal-case": "error",
		},
	},
];
