module.exports = {
  env: {
    es2022: true,
  },
  extends: ["airbnb", "airbnb/hooks", require.resolve("./config/all.yaml")],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
};
