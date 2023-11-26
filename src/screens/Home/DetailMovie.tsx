import { Screen } from '@/components/Screen';
import { Spinner } from '@/components/Spinner';
import { Text } from '@/components/Text';
import { useImageDimensions } from '@/hooks/useImageDimensions';
import { MainStackParamList } from '@/navigation/MainStack';
import { movieBanner } from '@/services/imdbAPI';
import { ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';

export const DetailMovieScreen: ScreenComponent<
  MainStackParamList,
  'DetailMovie'
> = ({
  route: {
    params: { movie },
  },
}) => {
  const uri = movieBanner(movie?.poster_path);

  const { aspectRatio, width, loading } = useImageDimensions(uri);

  return (
    <Screen.Background>
      <ScrollView
        contentContainerStyle={
          loading
            ? { flex: 1, justifyContent: 'center', alignItems: 'center' }
            : {}
        }>
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
            <Screen.Container>
              <Text size="4xl" weight="bold">
                {movie.title}
              </Text>
            </Screen.Container>
          </>
        )}
      </ScrollView>
    </Screen.Background>
  );
};
