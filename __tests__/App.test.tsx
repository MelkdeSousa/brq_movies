/**
 * @format
 */

import 'react-native';

import { App } from '@/App';
import { imdbMock } from '@/services/imdbMock';
import { fireEvent, render, screen } from '@testing-library/react-native';
import reactNativeSplashScreen from '../jest/__mocks__/react-native-splash-screen';

beforeAll(() => {
  jest.mock('react-native-splash-screen', () => reactNativeSplashScreen);

  jest.mock('@/services/imdbAPI', (): typeof import('@/services/imdbAPI') => ({
    listMovies: jest.fn().mockReturnValue(imdbMock),
    checkAuthentication: jest.fn().mockReturnValue(true),
    detailMovie: jest.fn().mockReturnValue(imdbMock.results[0]),
    IMDBConfig: {
      apiKey: '123',
      baseUrl: 'https://api.themoviedb.org/3',
      imageBaseUrl: 'https://image.tmdb.org/t/p',
    },
    movieBanner: jest.fn().mockReturnValue(''),
  }));
});

test('shows profile screen when View Profile is pressed', () => {
  render(<App />);

  fireEvent.press(screen.getByText('Entrar'));

  expect(screen.getByText('Entrar')).toBeVisible();
});
