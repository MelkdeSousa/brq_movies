import { listMovies } from '@/services/imdbAPI';
import { DiscoveryMovie } from '@/services/imdbTypes';
import { useReducer } from 'react';

export type MoviesState = {
  movies: DiscoveryMovie[];
  page: number;
  loading: boolean;
  error:
    | {
        has: true;
        message: string;
      }
    | {
        has: false;
      };
};

const initialState: MoviesState = {
  movies: [],
  page: 1,
  loading: false,
  error: {
    has: false,
  },
};

export type ActionReducer =
  | {
      type: 'request';
    }
  | {
      type: 'error';
      data: {
        message: string;
      };
    }
  | {
      type: 'success';
      data: {
        results: DiscoveryMovie[];
      };
    };

const reducer = (state: MoviesState, action: ActionReducer): MoviesState => {
  switch (action.type) {
    case 'request': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'error':
      return {
        ...state,
        loading: false,
        error: {
          has: true,
          message: action.data.message,
        },
      };
    case 'success':
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        error: {
          has: false,
        },
        movies: [...state.movies, ...action.data.results],
      };
    default:
      return state;
  }
};

export const useMovies = () => {
  const [movies, dispatch] = useReducer(reducer, initialState);

  const loadListMovies = async () => {
    try {
      const { results } = await listMovies(movies.page);

      dispatch({ type: 'success', data: { results } });
    } catch (error) {
      dispatch({ type: 'error', data: error as Error });
    }
  };

  return {
    ...movies,
    dispatch,
    loadListMovies,
  };
};
