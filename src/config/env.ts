import { API_KEY_IMDB } from 'react-native-dotenv';
import { z } from 'zod';

const envSchema = z.object({
  API_KEY_IMDB: z.string(),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse({ API_KEY_IMDB });
