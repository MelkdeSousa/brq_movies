import { useAuth } from '@/contexts/Auth';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
  MainStackNavigationProp,
  MainStackRouteProp,
} from '@/navigation/MainStack';
import { DiscoveryMovie } from '@/services/imdbTypes';
import { removePx } from '@/utils/responsive';
import { useNavigation, useRoute } from '@react-navigation/native';
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft';
import Heart from 'phosphor-react-native/src/icons/Heart';
import { useMemo } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export const HeaderMovie = () => {
  const statusBarHeight = StatusBar.currentHeight ?? 24;

  const { spacing, colors, radii } = useTheme();
  const navigation = useNavigation<MainStackNavigationProp>();
  const { params } = useRoute<MainStackRouteProp<'DetailMovie'>>();
  const { user } = useAuth();

  const favoriteStorageKey = `@brq-movies:${user?.login}:isFavorite:${params.movie.id}`;

  const [isFavorite, setIsFavorite] = useLocalStorage<DiscoveryMovie | null>(
    favoriteStorageKey,
    null,
  );

  const buttonIconsProps = useMemo(
    () => ({
      style: { backgroundColor: 'transparent' },
      size: removePx(spacing['8']),
      color: colors.primary,
    }),
    [],
  );

  return (
    <View
      style={{
        position: 'absolute',
        top: statusBarHeight + removePx(spacing['6']),
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: removePx(spacing['4']),
      }}>
      <TouchableOpacity
        testID="back-button"
        style={{
          backgroundColor: 'transparent',
          borderRadius: removePx(radii.full),
          padding: removePx(spacing['1']),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <ArrowLeft {...buttonIconsProps} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'transparent',
          borderRadius: removePx(radii.full),
          padding: removePx(spacing['1']),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        testID="favorite-button"
        accessibilityState={{ checked: !!isFavorite }}
        onPress={() => {
          setIsFavorite(state => {
            if (!state) {
              return params.movie;
            }

            return null;
          });
        }}>
        <Heart
          {...buttonIconsProps}
          weight={isFavorite?.id ? 'fill' : 'regular'}
        />
      </TouchableOpacity>
    </View>
  );
};
