import { API_KEY_IMDB } from '@env';
import { z } from "zod";

const envSchema = z.object({
    API_KEY_IMDB: z.string(),
})


export const env = envSchema.parse({ API_KEY_IMDB })
