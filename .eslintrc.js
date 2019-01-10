module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "jest": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "localStorage": true,
        "document": true,
        "process": true
    },
    "rules": {
      "space-in-parens": "off",
      "template-curly-spacing": [2, "never"],
      "object-curly-spacing": [2, "always"],
      "object-curly-newline": "off",
      "no-use-before-define": [2, { "functions": false }],
      "semi": [2, "never"],
      "react/destructuring-assignment": "off",
      "operator-linebreak": [2, "after"],
      "comma-dangle": [2, "never"],
      "no-param-reassign": [1],
      "no-underscore-dangle": "off",
      "no-console": [2, { "allow": ["warn", "error"] }]
    }
};
