module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 
  require.resolve("react-app"),
  require.resolve("react-app/jest"),
  require.resolve("airbnb"),
  require.resolve("airbnb-typescript"),
  require.resolve("plugin:react/jsx-runtime"),
  require.resolve("plugin:prettier/recommended")],
  parser: "@typescript-eslint/parser",
    "parserOptions": {
        "project": ["./tsconfig.json"]
    },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  settings: {
    "import/resolver": {}
}
};
