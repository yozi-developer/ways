const { override, addBabelPlugin, addExternalBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin("react-hot-loader/babel"),
  addExternalBabelPlugin("react-hot-loader/babel")
);
