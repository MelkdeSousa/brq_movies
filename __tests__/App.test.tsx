/**
 * @format
 */

import 'react-native';

import { AuthProvider } from '@/contexts/Auth';
import { IMDBProvider } from '@/contexts/Imdb';
import { MainStack } from '@/navigation/MainStack';
import { movieBanner } from '@/services/imdbAPI';
import {
  imdbDetailResponseMock,
  imdbDiscoverResponseMock,
} from '@/services/imdbMock';
import { theme, themeRN } from '@/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import reactNativeSplashScreen from '../jest/__mocks__/react-native-splash-screen';

beforeAll(() => {
  jest.mock('react-native-splash-screen', () => reactNativeSplashScreen);

  jest.mock('@/services/imdbAPI', (): typeof import('@/services/imdbAPI') => ({
    listMovies: jest.fn().mockReturnValue(imdbDiscoverResponseMock),
    checkAuthentication: jest.fn().mockReturnValue(true),
    detailMovie: jest.fn().mockReturnValue(imdbDiscoverResponseMock.results[0]),
    IMDBConfig: {
      apiKey: '123',
      baseUrl: 'https://api.themoviedb.org/3',
      imageBaseUrl: 'https://image.tmdb.org/t/p',
    },
    movieBanner: jest.fn().mockReturnValue(''),
  }));
});

const detailMovie = jest.fn().mockResolvedValue(imdbDetailResponseMock);
const listMovies = jest.fn().mockResolvedValue(imdbDiscoverResponseMock);

const App = () => (
  <IMDBProvider
    config={{
      checkAuthentication: async () => ({
        status_code: 200,
        status_message: 'Success',
        success: true,
      }),
      detailMovie,
      listMovies,
      movieBanner,
    }}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer theme={themeRN}>
          <MainStack />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  </IMDBProvider>
);

test('Login form', async () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  expect(getByPlaceholderText('Usuário')).toBeVisible();
  expect(getByPlaceholderText('Senha')).toBeVisible();
  expect(getByText('Entrar')).toBeVisible();
  expect(getByText('Entrar')).toBeDisabled();
});

test('Input invalid login', async () => {
  const { getByText, getByPlaceholderText, findAllByTestId } = render(<App />);

  await act(async () => {
    fireEvent.changeText(getByPlaceholderText('Usuário'), 'melk');
    fireEvent.changeText(getByPlaceholderText('Senha'), '321');
  });

  expect(getByText('Entrar')).toBeEnabled();

  await act(async () => {
    fireEvent.press(getByText('Entrar'));
  });

  const errors = await findAllByTestId('error-message');

  expect(errors.length).toEqual(2);
});

test('Input valid login', async () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);

  await act(async () => {
    fireEvent.changeText(getByPlaceholderText('Usuário'), 'user');
    fireEvent.changeText(getByPlaceholderText('Senha'), '123');
  });

  expect(getByText('Entrar')).toBeEnabled();

  await act(async () => {
    fireEvent.press(getByText('Entrar'));
  });

  expect(queryByText('Entrar')).toBeNull();
});

test('List movies on Home', async () => {
  const { getByText, queryByText, findByTestId } = render(<App />);

  expect(getByText('BRQ Movies')).toBeVisible();

  expect(queryByText('😢 Não foi possivel carregar os filmes.')).toBeNull();

  expect(listMovies).toHaveBeenCalled();

  expect(
    await findByTestId(
      `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
    ),
  ).toBeVisible();
});

test('Favorite movie', async () => {
  const { getByText, queryByText, findByTestId } = render(<App />);

  expect(getByText('BRQ Movies')).toBeVisible();

  expect(queryByText('😢 Não foi possivel carregar os filmes.')).toBeNull();

  expect(listMovies).toHaveBeenCalled();

  await act(async () => {
    fireEvent.press(
      await findByTestId(
        `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
      ),
    );
  });

  expect(getByText(imdbDiscoverResponseMock.results[0].title)).toBeVisible();

  await act(async () => {
    fireEvent.press(await findByTestId('favorite-button'));
  });

  expect(await findByTestId('favorite-button')).toHaveProp(
    'accessibilityState',
    { checked: true },
  );
});

test('List movies on Favorite', async () => {
  const { findByTestId, getByLabelText } = render(<App />);

  await act(async () => {
    fireEvent.press(
      await findByTestId(
        `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
      ),
    );
  });

  expect(await findByTestId('back-button')).toBeVisible();

  await act(async () => {
    fireEvent.press(await findByTestId('back-button'));
    fireEvent.press(getByLabelText('Filmes Favoritos'));
  });

  expect(
    await findByTestId(
      `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
    ),
  ).toBeVisible();

  await act(async () => {
    fireEvent.press(
      await findByTestId(
        `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
      ),
    );
  });

  expect(await findByTestId('favorite-button')).toHaveProp(
    'accessibilityState',
    {
      checked: true,
    },
  );
});
