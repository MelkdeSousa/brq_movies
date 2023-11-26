import { theme } from '@/styles/theme';
import {
  pixelThemeSizeHorizontal,
  pixelThemeSizeVertical,
} from '@/utils/responsive';
import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { Spinner } from '../Spinner';

export type KeyColorVariants = 'active' | 'disabled' | 'error' | 'inactive';

export type ColorVariants = {
  type: KeyColorVariants;
};

export type ButtonProps = TouchableOpacityProps &
  ColorVariants & {
    loading?: boolean;
  };

export type ColorVariantsMap = Record<
  ColorVariants['type'],
  keyof typeof theme.colors
>;

const colorVariants: ColorVariantsMap = {
  active: 'primary',
  inactive: 'secondary',
  disabled: 'grey',
  error: 'error',
};

const StyledButton = styled.TouchableOpacity<ColorVariants>`
  background-color: ${({ theme, type }) => theme.colors[colorVariants[type]]};
  opacity: ${({ theme, type }) => (type === 'disabled' ? 0.5 : 1)};

  border-radius: ${({ theme }) => theme.radii['2xl']};
  padding: ${pixelThemeSizeVertical(3)} ${pixelThemeSizeHorizontal()};

  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Button = ({
  type = 'active',
  children,
  loading = false,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <StyledButton type={type} {...props}>
      {loading ? <Spinner type={type} /> : children}
    </StyledButton>
  );
};
