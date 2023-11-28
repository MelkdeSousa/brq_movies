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
import { render, userEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import reactNativeSplashScreen from '../jest/__mocks__/react-native-splash-screen';

const user = userEvent.setup();

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

describe('Login flow', () => {
  it('Login form', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText('Usuário')).toBeVisible();
    expect(getByPlaceholderText('Senha')).toBeVisible();
    expect(getByText('Entrar')).toBeVisible();
    expect(getByText('Entrar')).toBeDisabled();
  });

  it('Input invalid login', async () => {
    const { getByText, getByPlaceholderText, findAllByTestId } = render(
      <App />,
    );

    await user.type(getByPlaceholderText('Usuário'), 'melk');
    await user.type(getByPlaceholderText('Senha'), '321');

    expect(getByText('Entrar')).toBeEnabled();
    await user.press(getByText('Entrar'));

    const errors = await findAllByTestId('error-message');

    expect(errors.length).toEqual(2);
  });

  it('Input valid login', async () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<App />);

    await user.type(getByPlaceholderText('Usuário'), 'user');
    await user.type(getByPlaceholderText('Senha'), '123');

    expect(getByText('Entrar')).toBeEnabled();

    await user.press(getByText('Entrar'));

    expect(queryByText('Entrar')).toBeNull();
  });
});

describe('Favorite movie flow', () => {
  it('Favorite movie', async () => {
    const { getByText, queryByText, findByTestId } = render(<App />);

    expect(getByText('BRQ Movies')).toBeVisible();

    expect(queryByText('😢 Não foi possivel carregar os filmes.')).toBeNull();

    expect(listMovies).toHaveBeenCalled();

    await user.press(
      await findByTestId(
        `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
      ),
    );

    expect(getByText(imdbDiscoverResponseMock.results[0].title)).toBeVisible();

    await user.press(await findByTestId('favorite-button'));

    expect(await findByTestId('favorite-button')).toHaveProp(
      'accessibilityState',
      { checked: true },
    );
  });
});

describe('List movies', () => {
  it('List movies on Home', async () => {
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

  it('List movies on Favorite', async () => {
    const { findByTestId, getByLabelText } = render(<App />);

    await user.press(
      await findByTestId(
        `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
      ),
    );

    expect(await findByTestId('back-button')).toBeVisible();

    await user.press(await findByTestId('back-button'));
    await user.press(getByLabelText('Filmes Favoritos'));

    expect(
      await findByTestId(
        `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
      ),
    ).toBeVisible();

    await user.press(
      await findByTestId(
        `movie-banner-container-${imdbDiscoverResponseMock.results[0].id}`,
      ),
    );

    expect(await findByTestId('favorite-button')).toHaveProp(
      'accessibilityState',
      {
        checked: true,
      },
    );
  });
});
