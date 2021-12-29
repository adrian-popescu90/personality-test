module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"plugin:react/recommended",
		"airbnb"
	],
	"settings": {
		"import/resolver": {
			"node": {
				"moduleDirectory": ["node_modules", "src/"]
			}
		}
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: [
		"react"
	],
	rules: {
		"comma-dangle": ["error", "never"],
		"no-tabs": ["error", {allowIndentationTabs: true}],
		indent: ["error", "tab"],
		"react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-plusplus": "off",
		"react/destructuring-assignment": "off"
	},
	"ignorePatterns": ["*.test.js"]
};
