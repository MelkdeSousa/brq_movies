import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components/native';
import {Login} from './screens/Login/Login';
import {theme} from './styles/theme';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};
