export type AuthenticationResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
};

export type DiscoverResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: [
    {
      adult: boolean;
      backdrop_path: `/${string}.jpg`;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: `/${string}.jpg`;
      release_date: `${number}-${number}-${number}`;
      title: string;
      video: false;
      vote_average: number;
      vote_count: number;
    },
  ];
};

export type DetailMovieResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type ErrorDiscoveryMoviesResponse = {
  errors: string[];
  success: boolean;
};

export type ErrorDetailMovieResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
};

export type DiscoveryMovie = DiscoverResponse['results'][0];
