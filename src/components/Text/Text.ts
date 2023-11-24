import { theme } from '@/styles/theme';
import { fontTheme } from '@/utils/responsive';
import styled from 'styled-components/native';
import { ColorVariants, ColorVariantsMap, } from '../Button/Button';

export type FontVariants = {
  size?: keyof typeof theme.fontSize;
  weight?: keyof typeof theme.fontFamily;
};

const colorVariants: ColorVariantsMap = {
  active: 'secondary',
  disabled: 'tertiary',
  error: 'error',
}

export const Text = styled.Text<FontVariants & Partial<ColorVariants>>`
  color: ${({theme, type = 'active'}) => theme.colors[colorVariants[type]]};
  font-family: ${({theme, weight = 'regular'}) => theme.fontFamily[weight]};
  font-size: ${({size = 'base'}) => fontTheme(size)};
`;
