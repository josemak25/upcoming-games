import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 196px;
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
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.WHITE_FONT_COLOR};
`;

export const GameRealizeYear = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.WHITE_FONT_COLOR};
  margin-right: 5px;
`;

export const YearAndGenreSeparator = styled.View`
  width: 5px;
  height: 5px;
  border-radius: ${5 / 2}px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors.DARK_BG_COLOR};
`;

export const GameGenres = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.WHITE_FONT_COLOR};
`;
