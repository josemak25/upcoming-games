import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const Container = styled.View`
  width: 100%;
  height: ${applyScale(450)}px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
`;

export const GamePlatformImage = styled.View`
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  padding: 21.5px;
  border-radius: 42px;
  border: 1.5px ${({ theme }) => theme.colors.ACTION_BG_COLOR} solid;
`;

export const GamePlatformText = styled.View`
  justify-content: center;
  padding-left: 10px;
`;

export const GameEngineTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 1}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  text-transform: capitalize;
`;

export const GamePlatformTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  text-transform: capitalize;
`;

export const GamePaginationContainer = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: rgba(47, 50, 63, 0.8);
  border-radius: 20px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const GamePaginationText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.WHITE_FONT_COLOR};
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
