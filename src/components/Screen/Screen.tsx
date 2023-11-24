import { pixelThemeSizeHorizontal, pixelThemeSizeVertical } from "@/utils/responsive";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: ${pixelThemeSizeVertical()} ${pixelThemeSizeHorizontal()};
    `

export const Background = styled.SafeAreaView`
    background-color: ${({ theme }) => theme.colors.neutral};
    flex: 1;
`;


