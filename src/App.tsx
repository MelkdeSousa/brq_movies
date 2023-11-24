import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './contexts/Auth';
import { MainStack } from './navigation/MainStack';
import { theme, themeRN } from './styles/theme';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer theme={themeRN}>
          <MainStack />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
};
