import { theme } from '@/styles/theme';
import { fontTheme } from '@/utils/responsive';
import styled from 'styled-components/native';

export const Text = styled.Text<{ size?: keyof typeof theme.fontSize }>`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ size = 'base' }) => fontTheme(size)};
`;
