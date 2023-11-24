import { Screen } from '@/components/Screen';
import { Text } from '@/components/Text';
import { MainStackParamList } from '@/navigation/MainStack';

import { fontThemeInNumber } from '@/utils/responsive';
import { DotsThreeOutlineVertical, SignOut } from 'phosphor-react-native';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { HeaderButtonsProvider, HiddenItem, OverflowMenu } from 'react-navigation-header-buttons';
import { useTheme } from 'styled-components/native';
import { AllMoviesTab } from './AllMovies/AllMovies';
import { FavoritesTab } from './Favorites/Favorites';

const renderScene = SceneMap({
  AllMovies: AllMoviesTab,
  Favorites: FavoritesTab,
});

export const HomeScreen: ScreenComponent<MainStackParamList, 'Home'> = ({ navigation }) => {
  const layout = useWindowDimensions();
  const { colors, fontFamily } = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'AllMovies', title: 'Todos os Filmes' },
    { key: 'Favorites', title: 'Filmes Favoritos' },
  ]);

  return (
    <HeaderButtonsProvider stackType='native'>
    <Screen.Background>
        <Screen.Container style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text size="3xl" weight="bold">
          BRQ Movies
        </Text>

          <OverflowMenu
            OverflowIcon={() => (
              <DotsThreeOutlineVertical color={colors.grey} weight="fill" />
            )}
          >
            <HiddenItem title="Sair" icon={<SignOut color={colors.grey} size={32} weight="fill" />} />
          </OverflowMenu>
      </Screen.Container>

      <TabView
        renderTabBar={props => (
          <TabBar
            {...props}
            activeColor={colors.primary}
            labelStyle={{
              fontSize: fontThemeInNumber('lg'),
              fontFamily: fontFamily.bold,
            }}
            inactiveColor={colors.grey}
            style={{ backgroundColor: colors.neutral }}
            indicatorStyle={{ backgroundColor: colors.primary }}
          />
          )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </Screen.Background>
    </HeaderButtonsProvider>
  );
};
