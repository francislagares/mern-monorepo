import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'client',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['\\.(css|scss|sass)$'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;
