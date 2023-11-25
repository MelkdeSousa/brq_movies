import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { useTheme } from "styled-components/native";
import { ColorVariants, ColorVariantsMap } from "./Button/Button";

export type SpinnerProps = ColorVariants & ActivityIndicatorProps

const colorVariants: ColorVariantsMap = {
    active: 'primary',
    disabled: 'secondary',
    error: 'error',
};


export const Spinner = ({ type, ...props }: SpinnerProps) => {
    const { colors } = useTheme()

    return <ActivityIndicator {...props} color={colors[colorVariants[type]]} />
}