import { env } from '@/config/env';
import { simpleFetch } from '@/utils/simpleFetch';
import { AuthenticationResponse, DiscoverResponse } from './imdbTypes';

export const IMDBConfig = {
  imageBaseUrl: 'https://image.tmdb.org/t/p/',
  apiKey: env.API_KEY_IMDB,
  baseUrl: 'https://api.themoviedb.org/3',
};

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + IMDBConfig.apiKey,
  },
};

export const checkAuthentication = async () =>
  await simpleFetch<AuthenticationResponse>(
    `${IMDBConfig.baseUrl}/authentication`,
    options,
  );

export const listMovies = async (page = 1) =>
  await simpleFetch<DiscoverResponse>(
    `${IMDBConfig.baseUrl}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc`,
    options,
  );

export const movieBanner = (posterPath: string) =>
  `${IMDBConfig.imageBaseUrl}w500${posterPath}`;
