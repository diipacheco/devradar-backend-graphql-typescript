module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "linebreak-style": "off",
    camelcase: "off",
    "@typescript-eslint/camelcase": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off"
  }
};
