import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './contexts/Auth';
import { IMDBProvider } from './contexts/Imdb';
import { MainStack } from './navigation/MainStack';
import { theme, themeRN } from './styles/theme';

import {
  checkAuthentication,
  detailMovie,
  listMovies,
  movieBanner,
} from '@/services/imdbAPI';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <IMDBProvider
      config={{ checkAuthentication, detailMovie, listMovies, movieBanner }}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <NavigationContainer theme={themeRN}>
            <MainStack />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </IMDBProvider>
  );
};
