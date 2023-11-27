import { MainStackNavigationProp } from '@/navigation/MainStack';
import { movieBanner } from '@/services/imdbAPI';
import { DiscoveryMovie } from '@/services/imdbTypes';
import { heightPixel, removePx } from '@/utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components/native';

export type MovieBannerProps = {
  posterPath: string;
  movie: DiscoveryMovie;
};

export const MovieBanner = ({ posterPath, movie }: MovieBannerProps) => {
  const { radii, spacing } = useTheme();

  const navigation = useNavigation<MainStackNavigationProp>();

  const handleDetailMovie = () => {
    navigation.navigate('DetailMovie', { movie });
  };

  return (
    <TouchableOpacity
      testID={`movie-banner-container-${movie?.id}`}
      style={{
        width: 150,
        height: removePx(spacing['64']),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: heightPixel(16),
      }}
      onPress={handleDetailMovie}>
      <FastImage
        testID={`movie-banner-image-${movie?.id}`}
        style={{
          borderRadius: removePx(radii['2xl']),
          width: removePx(spacing['40']),
          height: removePx(spacing['64']),
        }}
        source={{
          uri: movieBanner(posterPath),
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </TouchableOpacity>
  );
};
