import type { JestConfigWithTsJest } from 'ts-jest';
import { defaults as tsjPreset } from 'ts-jest/presets';

const config: JestConfigWithTsJest = {
  ...tsjPreset,
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/__mocks__/react-native-dotenv.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    // '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  // testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  // cacheDirectory: '.jest/cache',
};

export default config;
