import { HomeScreen } from '@/screens/Home/Home';
import { LoginScreen } from '@/screens/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

export type MainStackParamList = {
  Login: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: colors.neutral,
        statusBarStyle: 'light',
      }}>
      {/* @ts-ignore */}
      <Screen name="Login" component={LoginScreen} /> 
      {/* @ts-ignore */}
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};