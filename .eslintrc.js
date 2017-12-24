module.exports = {
	"extends": "eslint:recommended",
	"env": {
		"node": true,
	},
	"parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module",
	},
	"rules": {
		// enable additional rules
		"semi": ["error", "always"],
		
		// override default options for rules from base configurations
		"comma-dangle": ["error", "always"],
		"no-cond-assign": ["error", "always"],
		
		// disable rules from base configurations
		"no-console": "off",
		"no-cond-assign": 0
	}
}