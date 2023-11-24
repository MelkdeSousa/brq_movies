import {
  pixelThemeSizeHorizontal,
  pixelThemeSizeVertical,
} from '@/utils/responsive';
import styled from 'styled-components/native';
import { ColorVariantsMap, KeyColorVariants } from '../Button/Button';

export type Focusable = {
  focusColor?: KeyColorVariants;
  focused?: boolean;
  unfocused?: KeyColorVariants;
};
const colorVariants: ColorVariantsMap = {
  active: 'primary',
  disabled: 'secondary',
  error: 'error',
};

export const StyledInput = styled.TextInput.attrs<Focusable>(
  ({ theme, focusColor = 'active', focused, unfocused = 'disabled' }) => ({
    placeholderTextColor: focused
      ? theme.colors[colorVariants[focusColor]]
      : theme.colors[colorVariants[unfocused]],
    cursorColor: theme.colors.secondary,
  }),
)`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base};

  width: 80%;
  padding: ${pixelThemeSizeVertical(0)} ${pixelThemeSizeHorizontal(0)};
`;

export const InputWrapper = styled.View`
  row-gap: 8px;
`;

export const InputContainer = styled.View<Focusable>`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.tertiary};

  width: 100%;
  border-radius: ${({ theme }) => theme.radii.base};
  border-bottom-left-radius: ${({ theme }) => theme.radii.none};
  border-bottom-right-radius: ${({ theme }) => theme.radii.none};
  border-bottom-color: ${({
    theme,
    focusColor = 'active',
    focused,
    unfocused = 'disabled',
  }) =>
    focused
      ? theme.colors[colorVariants[focusColor]]
      : theme.colors[colorVariants[unfocused]]};
  border-bottom-width: 0.8px;

  padding: ${pixelThemeSizeVertical()} ${pixelThemeSizeHorizontal()};

  justify-content: space-between;
`;
