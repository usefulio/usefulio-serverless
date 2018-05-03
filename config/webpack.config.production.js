const baseConfig = require("./webpack.config.base");
const testConfig = require("./webpack.config.test");
const merge = require("webpack-merge");

module.exports = merge(baseConfig, testConfig, { mode: "production" });
