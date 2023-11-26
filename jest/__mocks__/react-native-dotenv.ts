import { Env } from '@/config/env';

const envs: Env = {
  API_KEY_IMDB: '123',
};

jest.mock('react-native-dotenv', (): Env => envs);

export default envs;
