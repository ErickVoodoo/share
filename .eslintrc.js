module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "prettier", "plugin:react/recommended"],
    "plugins": [
        "flowtype",
        "react",
        "prettier",
        "standard"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "react/prefer-stateless-function": ["error", { "ignorePureComponents": false }],
    },
    "globals" : {
        "document": true,
        "navigator": true,
        "fetch": true,
        "window": true,
        "console": true,
        "process": true,
        "URL": true,
        "FormData": true,
        "Promise": true,
    },
};