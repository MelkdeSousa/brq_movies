import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components/native';
import {Login} from '../screens/Login/Login';

const {Navigator, Screen} = createNativeStackNavigator();

export const MainStack = () => {
  const {colors} = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: colors.neutral,
        statusBarStyle: 'light',
      }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
