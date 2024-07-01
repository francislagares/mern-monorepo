export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string;
      PORT: number;
      BASE_URL: string;
      REDIS_HOST: string;
      REDIS_PORT: number;
      REDIS_TIMEOUT: number;
      REDIS_TTL: number;
      CLIENT_URL: string;
      LOG_DIR: string;
      ORIGIN: string;
      JWT_SECRET: string;
      NODE_ENV: 'test' | 'development' | 'production';
    }
  }
}
