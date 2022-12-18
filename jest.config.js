/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/*.impl.ts",
    "!<rootDir>/src/**/*.types.ts",
    "!<rootDir>/src/**/index.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    ".+\\.(ts)$": "ts-jest",
  },
  coverageProvider: "v8",
};
