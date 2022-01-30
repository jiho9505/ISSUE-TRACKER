import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();

const loadDotEnv = () => {
  if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: path.resolve(__dirname, '.env') });
  } else {
    dotenv.config({ path: path.resolve(__dirname, '.env.dev') });
  }
};
export default loadDotEnv;
