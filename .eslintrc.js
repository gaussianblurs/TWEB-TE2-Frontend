module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "jest": true
    },
    "extends": ["airbnb", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "globals": {
        "localStorage": true,
        "document": true,
        "process": true
    },
    "rules": {
      "space-in-parens": [0, "always"],
      "template-curly-spacing": [2, "never"],
      "object-curly-spacing": [2, "always"],
      "object-curly-newline": "off",
      "no-use-before-define": [2, { "functions": false }],
      "semi": [2, "never"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-one-expression-per-line": [1, { "allow": "single-child" }],
      "react/destructuring-assignment": "off",
      "operator-linebreak": [2, "after"],
      "comma-dangle": [2, "never"],
      "no-param-reassign": [1],
      "no-underscore-dangle": "off",
      "no-console": [2, { "allow": ["warn", "error"] }],
      "no-tabs": "off"
    }
};
