import { Theme } from '@react-navigation/native';
import { DefaultTheme } from 'styled-components/native';

export const colors: DefaultTheme['colors'] = {
  primary: '#EC8B00',
  secondary: '#FFFFFF',
  tertiary: '#2E2F33',
  neutral: '#16171B',
  grey: '#A9A9A9',
  error: '#e98d8d',
};

export const fontFamily: DefaultTheme['fontFamily'] = {
  regular: 'Nunito-Regular',
  bold: 'Nunito-Bold',
};

export const fontSize: DefaultTheme['fontSize'] = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px',
};

export const spacing: DefaultTheme['spacing'] = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
};

export const radii: DefaultTheme['radii'] = {
  none: '0px',
  sm: '2px',
  base: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
};

export const theme: DefaultTheme = {
  colors,
  fontFamily,
  fontSize,
  spacing,
  radii,
};

export const themeRN: Theme = {
  colors: {
    background: colors.neutral,
    primary: colors.primary,
    card: colors.tertiary,
    text: colors.secondary,
    border: colors.primary,
    notification: colors.primary
  },
  dark: false
}
