import { useAuth } from '@/contexts/Auth';
import { DetailMovieScreen } from '@/screens/Home/DetailMovie';
import { HomeScreen } from '@/screens/Home/Home';
import { LoginScreen } from '@/screens/Login/Login';
import { DiscoveryMovie } from '@/services/imdbTypes';
import { NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

export type MainStackParamList = {
  Login: undefined;
  Home: undefined;
  DetailMovie: {
    movieId: DiscoveryMovie['id']
  }
};

export type MainStackNavigationProp = NavigationProp<MainStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  const { colors } = useTheme();
  const { user } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: colors.neutral,
        statusBarStyle: 'light',
      }}
      initialRouteName={user?.login ? 'Home' : 'Login'}>
      {/* @ts-ignore */}
      <Screen name="Login" component={LoginScreen} />
      {/* @ts-ignore */}
      <Screen name="Home" component={HomeScreen} />
      {/* @ts-ignore */}
      <Screen name='DetailMovie' component={DetailMovieScreen} />
    </Navigator>
  );
};
