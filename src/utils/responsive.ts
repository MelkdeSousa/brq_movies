import { Dimensions, PixelRatio } from 'react-native';
import { theme } from '../styles/theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const widthPixel = (size: number) => normalize(size, 'width');
const heightPixel = (size: number) => normalize(size, 'height');
const fontTheme = (size: keyof typeof theme.fontSize) => {
    const value = Number(theme.fontSize[size].replace('px', ''))
    return `${heightPixel(value)}px`
};

const fontPixel = (size: number) => heightPixel(size);

const pixelSizeVertical = (size: number) => heightPixel(size);
const pixelSizeHorizontal = (size: number) => widthPixel(size);

export { fontPixel, fontTheme, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel };

