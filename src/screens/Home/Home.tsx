import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { MainStackParamList } from "@/navigation/MainStack";

import { fontThemeInNumber } from "@/utils/responsive";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useTheme } from "styled-components/native";
import { AllMoviesTab } from "./AllMovies/AllMovies";
import { FavoritesTab } from "./Favorites/Favorites";

const renderScene = SceneMap({
    AllMovies: AllMoviesTab,
    Favorites: FavoritesTab,
});

export const HomeScreen: ScreenComponent<MainStackParamList, 'Home'> = () => {
    const layout = useWindowDimensions();
    const { colors, fontFamily, } = useTheme()

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'AllMovies', title: 'Todos os Filmes' },
        { key: 'Favorites', title: 'Filmes Favoritos' },
    ]);

    return <Screen.Background>
        <Screen.Container>
            <Text size="3xl" weight="bold">
                BRQ Movies
            </Text>
        </Screen.Container>

        <TabView
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    activeColor={colors.primary}
                    labelStyle={{ fontSize: fontThemeInNumber('lg'), fontFamily: fontFamily.bold }}
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
}