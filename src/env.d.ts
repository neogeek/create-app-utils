declare namespace NodeJS {
  export interface ProcessEnv {
    // Node.js
    NODE_ENV?: 'production' | 'development' | 'test' | undefined;

    // JWT
    JWT_ACCESS_TOKEN_PRIVATE_KEY: string;
    JWT_ACCESS_TOKEN_PUBLIC_KEY: string;
    JWT_REFRESH_TOKEN_PRIVATE_KEY: string;
    JWT_REFRESH_TOKEN_PUBLIC_KEY: string;
  }
}
