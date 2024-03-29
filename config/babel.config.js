module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime"
  ],
  presets: [["@babel/preset-env", { targets: { node: "8.10" } }]]
};
