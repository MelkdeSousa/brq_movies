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
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|react-navigation|@react-navigation/.*|react-native-svg|react-native-device-info|phosphor-react-native)',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
};

export default config;
