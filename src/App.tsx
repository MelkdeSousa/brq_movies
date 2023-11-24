import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { MainStack } from './navigation/MainStack';
import { theme, themeRN } from './styles/theme';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={themeRN}>
        <MainStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};
