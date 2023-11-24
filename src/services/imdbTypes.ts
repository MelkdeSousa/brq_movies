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

export type DiscoveryMovie = DiscoverResponse['results'][0];
