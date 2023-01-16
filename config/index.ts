// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export const CONFIG = {
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,
  HOST: process.env.HOST || '127.0.0.1',
  PORT_DB: process.env.PORT_DB,
  DATABASE: process.env.DATABASE,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  LIVE_SCORE_URL: process.env.LIVE_SCORE_URL,
};
