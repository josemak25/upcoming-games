import styled from "styled-components/native";
import { colors, fonts } from "../../constants";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.BACKGROUND_DARK_COLOR};
`;

export const Screenshot = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.FONT_SPLASH_COLOR};
  position: relative;
`;

export const GameDetailsContainer = styled.View`
  width: 90%;
  position: absolute;
  top: 25%;
`;

export const GameBadgeContainer = styled.View`
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.ICON_SHADOW_COLOR};
  margin-top: 20px;
  border-radius: 5px;
  padding: 15px;
  padding-left: 20px;
  padding-right: 60px;
`;

export const GameBadge = styled.View`
  justify-content: space-between;
`;

export const GameName = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE + 2}px;
  font-family: ${fonts.FONT_FAMILY_BOLD};
  color: ${colors.FONT_LIGHT_COLOR};
`;

export const GameBadgeHeader = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE}px;
  font-family: ${fonts.FONT_FAMILY_BOLD};
  text-transform: uppercase;
  color: ${colors.FONT_LIGHT_COLOR};
`;

export const GameRating = styled.Text`
  font-size: ${fonts.FONT_SIZE_SPLASH_SCREEN - 8}px;
  font-family: ${fonts.FONT_FAMILY_BOLD_EXTRA};
  color: ${colors.FONT_LIGHT_COLOR};
  opacity: 0.5;
`;

export const GameWebSiteContainer = styled.TouchableOpacity`
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.GAME_WEBSITE_BACKGROUND};
  border-radius: 2px;
`;

export const GameWebSiteText = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE}px;
  font-family: ${fonts.FONT_FAMILY_BOLD_EXTRA};
  color: ${colors.FONT_LIGHT_COLOR};
  text-transform: uppercase;
  opacity: 0.8;
`;

export const GameExtraText = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE + 2}px;
  font-family: ${fonts.FONT_FAMILY_REGULAR};
  color: ${colors.FONT_LIGHT_COLOR};
  text-transform: capitalize;
  margin-bottom: 5px;
  opacity: 0.7;
`;
