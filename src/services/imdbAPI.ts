import { env } from '@/config/env';
import { simpleFetch } from '@/utils/simpleFetch';
import {
  AuthenticationResponse,
  DetailMovieResponse,
  DiscoverResponse,
  DiscoveryMovie,
  ErrorDetailMovieResponse,
  ErrorDiscoveryMoviesResponse,
} from './imdbTypes';

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

export const listMovies = async (page = 1) => {
  try {
    return await simpleFetch<DiscoverResponse>(
      `${IMDBConfig.baseUrl}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc`,
      options,
    );
  } catch (error) {
    throw new Error((error as ErrorDiscoveryMoviesResponse).errors?.join('\n'));
  }
};

export const detailMovie = async (id: DiscoveryMovie['id']) => {
  try {
    return await simpleFetch<DetailMovieResponse>(
      `${IMDBConfig.baseUrl}/movie/${id}?language=pt-BR`,
      options,
    );
  } catch (error) {
    throw new Error((error as ErrorDetailMovieResponse).status_message);
  }
};

export const movieBanner = (posterPath: string) =>
  `${IMDBConfig.imageBaseUrl}w500${posterPath}`;
