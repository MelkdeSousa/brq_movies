/**
 * @format
 */

import 'react-native';

import { App } from '@/App';
import { imdbMock } from '@/services/imdbMock';
import { fireEvent, render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
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

test('Login form', async () => {
  const { getByText, findAllByTestId, getByPlaceholderText } = render(<App />);

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
