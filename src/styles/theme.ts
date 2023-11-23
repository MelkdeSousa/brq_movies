import { DefaultTheme } from "styled-components/native";

export const colors: DefaultTheme['colors'] = {
    primary: "#EC8B00",
    secondary: "#FFFFFF",
    tertiary: "#2E2F33",
    neutral: "#16171B",
    grey: "#A9A9A9"
}

export const fontFamily: DefaultTheme['fontFamily'] = {
    regular: "Nunito-Regular",
    bold: "Nunito-Bold"
}

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
}

export const theme: DefaultTheme = {
    colors,
    fontFamily,
    fontSize
}
