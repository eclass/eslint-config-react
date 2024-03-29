module.exports = {
  extends: [
    "standard",
    "react-app",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "jsx-a11y/href-no-hash": [0],
    "no-console": ["error"],
    "react-hooks/exhaustive-deps": "off"
  }
};
