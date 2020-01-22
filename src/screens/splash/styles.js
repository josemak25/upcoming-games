import styled from "styled-components";
import { colors, fonts } from "../../constants";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background-color: ${colors.BACKGROUND_DARK_COLOR}; */
`;

export const Title = styled.Text`
  font-size: ${fonts.FONT_SIZE_SPLASH_SCREEN};
  font-family: ${fonts.FONT_FAMILY_BOLD_EXTRA};
  font-weight: ${fonts.FONT_WEIGHT_HEAVY};
  color: ${colors.FONT_SPLASH_COLOR};
`;

export const IconTexts = styled.View`
  justify-content: center;
  align-items: flex-start;
  left: 140px;
  position: absolute;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  position: relative;
`;
