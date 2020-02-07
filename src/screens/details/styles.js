import styled from "styled-components/native";
import { Platform } from "react-native";

import { colors, fonts } from "../../constants";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.BACKGROUND_DARK_COLOR};
`;

export const Screenshot = styled.View`
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_DARK_COLOR};
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
  position: absolute;
  right: 15px;
  top: 12%;
  border-radius: ${40 / 2}px;
  border: 2.5px ${colors.ICON_SHADOW_COLOR};
  opacity: 0.8;
`;

export const GameDetailsContainer = styled.View`
  width: 85%;
  bottom: 8%;
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
  width: 75%;
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
  line-height: 30px;
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
  margin-bottom: 10px;
  opacity: 0.7;
`;

export const GameGenreContainer = styled.View`
  justify-content: space-between;
  margin-top: 20px;
`;

export const GameDetailsTitle = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE + 2}px;
  font-family: ${fonts.FONT_FAMILY_BOLD};
  color: ${colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const GameGenres = styled.View`
  flex-direction: row;
  width: 80%;
`;

export const GameGenre = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE + 3}px;
  font-family: ${fonts.FONT_FAMILY_REGULAR};
  color: ${colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  padding-top: 4px;
  padding-right: 10px;
`;

export const GameSummary = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE + 3}px;
  font-family: ${fonts.FONT_FAMILY_REGULAR};
  color: ${colors.FONT_DARK_COLOR};
  padding-top: 5px;
`;

export const GameTrailerContainer = styled.View`
  width: 100%;
  height: 340px;
  margin-top: 40px;
`;

export const TrailerContainer = styled.View`
  width: 100%;
  height: 100%;
  border-radius: ${15}px;
  ${Platform.select({
    android: {
      backgroundColor: "#e4e4e4",
      paddingBottom: 4
    },
    ios: {
      paddingBottom: 5
    }
  })}
`;

export const PlayTrailer = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
  border-radius: ${100 / 2}px;
  padding-left: 10px;
`;
