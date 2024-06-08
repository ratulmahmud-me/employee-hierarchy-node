export default {
    roots: ['<rootDir>/tests'],
    moduleDirectories: ['node_modules', 'src'],
    clearMocks: true,
    testEnvironment: 'node',
    transform: {
      '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'mjs', 'json', 'jsx', 'node'],
    // setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    resetMocks: true,
    restoreMocks: true,
    verbose: true,
    testMatch: ['**/tests/**/*.test.mjs', '**/?(*.)+(spec|test).mjs'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,mjs,jsx}', '!src/**/*.d.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  };
  