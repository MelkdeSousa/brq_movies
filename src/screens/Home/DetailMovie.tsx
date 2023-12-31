import { Screen } from '@/components/Screen';
import { Spinner } from '@/components/Spinner';
import { Text } from '@/components/Text';
import { useImageDimensions } from '@/hooks/useImageDimensions';
import { MainStackParamList } from '@/navigation/MainStack';
import { movieBanner } from '@/services/imdbAPI';
import { removePx } from '@/utils/responsive';
import { useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components/native';

export const DetailMovieScreen: ScreenComponent<
  MainStackParamList,
  'DetailMovie'
> = ({
  route: {
    params: { movie },
  },
}) => {
  const uri = movieBanner(movie?.poster_path);
  const { spacing } = useTheme();
  const { aspectRatio, width, loading } = useImageDimensions(uri);

  const [positionScrollVertical] = useState(new Animated.Value(0));

  return (
    <>
      <Screen.HeaderMovie scrollY={positionScrollVertical} />
      <Screen.Background>
        <ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: positionScrollVertical } } }],
            {
              useNativeDriver: false,
            },
          )}>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <FastImage
                source={{ uri }}
                style={{
                  width: width,
                  height: width / aspectRatio,
                }}
                resizeMode="stretch"
              />
              <Screen.Container style={{ rowGap: removePx(spacing['4']) }}>
                <Text size="3xl" weight="bold">
                  {movie.title}
                </Text>

                <Text size="xl" type="inactive" weight="bold">
                  Sinopse
                </Text>

                <Text size="xl">
                  {movie.overview ?? 'Nenhuma sinopse informada.'}
                  {movie.overview ?? 'Nenhuma sinopse informada.'}
                  {movie.overview ?? 'Nenhuma sinopse informada.'}
                  {movie.overview ?? 'Nenhuma sinopse informada.'}
                  {movie.overview ?? 'Nenhuma sinopse informada.'}
                  {movie.overview ?? 'Nenhuma sinopse informada.'}
                  {movie.overview ?? 'Nenhuma sinopse informada.'}
                </Text>
              </Screen.Container>
            </>
          )}
        </ScrollView>
      </Screen.Background>
    </>
  );
};
