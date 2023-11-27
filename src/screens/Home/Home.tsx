import { Screen } from '@/components/Screen';
import { Text } from '@/components/Text';
import { MainStackParamList } from '@/navigation/MainStack';

import { useAuth } from '@/contexts/Auth';
import { fontThemeInNumber, removePx } from '@/utils/responsive';
import DotsThreeOutlineVertical from 'phosphor-react-native/src/icons/DotsThreeOutlineVertical';
import SignOut from 'phosphor-react-native/src/icons/SignOut';

import { useFocusEffect } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import {
  DeviceEventEmitter,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import {
  HeaderButtonsProvider,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { useTheme } from 'styled-components/native';
import { AllMoviesTab } from './AllMovies/AllMovies';
import { FavoritesTab } from './Favorites/Favorites';

const renderScene = SceneMap({
  AllMovies: AllMoviesTab,
  Favorites: FavoritesTab,
});

export const HomeScreen: ScreenComponent<MainStackParamList, 'Home'> = ({
  navigation,
}) => {
  const layout = useWindowDimensions();
  const { colors, fontFamily, spacing } = useTheme();
  const { logout } = useAuth();

  const [index, setIndex] = useState(0);
  const routes = useMemo(
    () => [
      { key: 'AllMovies', title: 'Todos os Filmes' },
      { key: 'Favorites', title: 'Filmes Favoritos' },
    ],
    [],
  );

  const handleLogout = () => {
    logout();
    navigation.reset({
      routes: [{ name: 'Login' }],
      history: [],
      index: 0,
    });
  };

  useFocusEffect(() => {
    DeviceEventEmitter.emit('tabChange', index);
  });

  return (
    <HeaderButtonsProvider stackType="native">
      <Screen.Background
        style={{
          paddingTop: StatusBar.currentHeight ?? removePx(spacing['4']),
        }}>
        <Screen.Container
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text size="3xl" weight="bold">
            BRQ Movies
          </Text>

          <OverflowMenu
            OverflowIcon={
              <DotsThreeOutlineVertical color={colors.grey} weight="fill" />
            }>
            <HiddenItem
              title="Sair"
              onPress={handleLogout}
              icon={<SignOut color={colors.grey} size={32} weight="fill" />}
            />
          </OverflowMenu>
        </Screen.Container>

        <TabView
          renderTabBar={props => (
            <TabBar
              {...props}
              activeColor={colors.primary}
              labelStyle={{
                textAlign: 'center',
                fontSize: fontThemeInNumber('base'),
                fontFamily: fontFamily.bold,
              }}
              inactiveColor={colors.grey}
              style={{ backgroundColor: colors.neutral }}
              indicatorStyle={{ backgroundColor: colors.primary }}
            />
          )}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={e => {
            setIndex(e);
            DeviceEventEmitter.emit('tabChange', e);
          }}
          initialLayout={{ width: layout.width }}
        />
      </Screen.Background>
    </HeaderButtonsProvider>
  );
};
