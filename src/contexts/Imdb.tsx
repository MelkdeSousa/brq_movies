import {
  AuthenticationResponse,
  DetailMovieResponse,
  DiscoverResponse,
  DiscoveryMovie,
} from '@/services/imdbTypes';
import { createContext, useContext } from 'react';

export type IMDBContextState = {
  listMovies: (page: number) => Promise<DiscoverResponse>;
  checkAuthentication: () => Promise<AuthenticationResponse>;
  detailMovie: (id: DiscoveryMovie['id']) => Promise<DetailMovieResponse>;
};

const IMDBContext = createContext<IMDBContextState>({} as IMDBContextState);

export const IMDBProvider = ({
  children,
  config,
}: ContextProviderProps<{ config: IMDBContextState }>) => {
  return <IMDBContext.Provider value={config}>{children}</IMDBContext.Provider>;
};

export const useIMDB = () => useContext(IMDBContext);
