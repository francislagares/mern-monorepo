import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'api',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
};

export default config;
