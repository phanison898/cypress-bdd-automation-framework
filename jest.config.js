module.exports = {
  testEnvironment: "node", // Use node environment for Jest
  transform: {
    "^.+\\.js$": "babel-jest", // Use Babel to transpile JS files
  },
  testMatch: ["**/tests/**/*.test.js"], // Specify where Jest should look for test files
};
