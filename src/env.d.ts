declare namespace NodeJS {
    export type ProcessEnv = {
        REACT_APP_CAT_API_BASE_URL: string;
        REACT_APP_CAT_API_KEY: string;
    } & typeof process.env;
  }