import 'dotenv/config'

const isCI = process.env.CI === 'true'

export default {
  verbose: true,
  collectCoverage: false,
  resetModules: true,
  restoreMocks: true,
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
        useESM: true,
      },
    ],
  },
  collectCoverageFrom: ['<rootDir>/src/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/dist/', '/node_modules/', '<rootDir>/scripts', '<rootDir>/tools'],
  coverageProvider: 'v8',
  coverageReporters: isCI ? ['json'] : ['text'],
  rootDir: './',
  // testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  // testMatch: ['<rootDir>/create-boilerplate-tyepscript/src/**/*.spec.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
}
