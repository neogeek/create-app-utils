/** @type {import('jest').Config} */
const jestConfig = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.ts$': 'ts-jest/legacy',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['env.d.ts', 'index.ts'],
};

export default jestConfig;
