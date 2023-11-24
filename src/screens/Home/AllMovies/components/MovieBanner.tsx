import { movieBanner } from '@/services/imdbAPI';
import { heightPixel, removePx, widthPixel } from '@/utils/responsive';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components/native';

export type MovieBannerProps = {
    posterPath: string;
    index: number;
};

export const MovieBanner = ({ posterPath, index }: MovieBannerProps) => {
    const { radii, spacing } = useTheme();

    return (
        <FastImage
            style={{
                borderRadius: removePx(radii['2xl']),
                width: removePx(spacing['28']),
                height: removePx(spacing['64']),
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

                marginRight: index % 2 === 0 ? widthPixel(16) : 0,
                marginBottom: heightPixel(16),
            }}
            source={{
                uri: movieBanner(posterPath),
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.web,
            }}
            resizeMode={FastImage.resizeMode.stretch}
        />
    );
};
