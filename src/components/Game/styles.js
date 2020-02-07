import styled from "styled-components/native";
import { colors, fonts } from "../../constants";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 196px;
  background-color: ${colors.GAME_CARD_BACKGROUND};
`;

export const GameDetails = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 10px;
`;

export const GameTexts = styled.View`
  width: 80%;
  justify-content: space-evenly;
`;

export const GameTextsBottom = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const GameTitle = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE + 2}px;
  font-family: ${fonts.FONT_FAMILY_BOLD};
  letter-spacing: 1px;
  color: ${colors.FONT_MILK_COLOR};
`;

export const GameRealizeYear = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM + 2}px;
  font-family: ${fonts.FONT_FAMILY_REGULAR};
  color: ${colors.FONT_MILK_COLOR};
  margin-right: 5px;
`;

export const YearAndGenreSeparator = styled.View`
  width: 5px;
  height: 5px;
  border-radius: ${5 / 2}px;
  margin-right: 5px;
  background-color: ${colors.BACKGROUND_DARK_COLOR};
`;

export const GameGenres = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM + 2}px;
  font-family: ${fonts.FONT_FAMILY_REGULAR};
  color: ${colors.FONT_MILK_COLOR};
`;

export const Favorite = styled.TouchableHighlight`
  width: 45px;
  height: 45px;
  border-radius: ${45 / 2}px;
  border: 2.5px solid ${colors.ICON_SHADOW_COLOR};
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
`;
