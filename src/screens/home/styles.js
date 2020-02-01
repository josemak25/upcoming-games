import styled from "styled-components";
import { colors, fonts } from "../../constants";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
`;

export const PleaseDeleteMe = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_BOLD};
  letter-spacing: 1px;
  line-height: 36px;
  color: ${colors.FONT_DARK_COLOR};
`;
