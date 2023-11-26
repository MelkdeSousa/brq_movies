import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ColorVariants, ColorVariantsMap } from './Button/Button';

export type SpinnerProps = Partial<ColorVariants> & ActivityIndicatorProps;

const colorVariants: ColorVariantsMap = {
  active: 'primary',
  inactive: 'grey',
  disabled: 'secondary',
  error: 'error',
};

export const Spinner = ({ type = 'active', ...props }: SpinnerProps) => {
  const { colors } = useTheme();

  return <ActivityIndicator {...props} color={colors[colorVariants[type]]} />;
};
