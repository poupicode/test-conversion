
module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "json-summary"],
  coverageThreshold: {
    global: {
      statements: 80
    }
  }
};