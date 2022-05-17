import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'client',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};

export default config;
