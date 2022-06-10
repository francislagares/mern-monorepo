import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'client',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
};

export default config;
