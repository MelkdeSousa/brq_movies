import { Env } from '@/config/env';

const env: Env = {
  API_KEY_IMDB: '123',
};

jest.mock('@/config/env', (): typeof import('@/config/env') => ({
  env,
}));

export default env;
