import {ThemeProvider} from 'styled-components/native';
import {Login} from './screens/Login/Login';
import {theme} from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};
