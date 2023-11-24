import { pixelThemeSizeVertical } from "@/utils/responsive";
import styled from "styled-components/native";

export const WrapperScreen = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral};

  flex: 1;
  justify-content: center;
  align-items: center;

  gap: ${pixelThemeSizeVertical(6)};
`;

export const FormContainer = styled.View`
  width: 80%;

  gap: ${pixelThemeSizeVertical(11)};
`;