import {
  pixelThemeSizeHorizontal,
  pixelThemeSizeVertical,
} from '@/utils/responsive';
import styled from 'styled-components/native';

type Focusable = {
  focused?: boolean;
};

export const StyledInput = styled.TextInput.attrs<Focusable>(
  ({ theme, focused }) => ({
    placeholderTextColor: focused
      ? theme.colors.primary
      : theme.colors.secondary,
    cursorColor: theme.colors.secondary,
  }),
)`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base};

  width: 80%;
  padding: ${pixelThemeSizeVertical(0)} ${pixelThemeSizeHorizontal(0)};
`;

export const InputWrapper = styled.View<Focusable>`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.tertiary};

  width: 100%;
  border-radius: ${({ theme }) => theme.radii.base};
  border-bottom-left-radius: ${({ theme }) => theme.radii.none};
  border-bottom-right-radius: ${({ theme }) => theme.radii.none};
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.colors.primary : theme.colors.secondary};
  border-bottom-width: 0.8px;

  padding: ${pixelThemeSizeVertical()} ${pixelThemeSizeHorizontal()};

  justify-content: space-between;
`;
