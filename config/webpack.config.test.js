const config =
  process.env.SERVERLESS_TEST === "1"
    ? {
        entry: {
          tests: "./tests/index.js"
        }
      }
    : {};

module.exports = config;
