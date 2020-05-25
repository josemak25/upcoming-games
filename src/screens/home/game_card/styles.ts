import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const Container = styled.View`
  width: 100%;
  height: ${applyScale(550)}px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  border-color: ${({ theme }) => theme.colors.DARK_BG_COLOR};
  border-style: solid;
  border-top-width: 1px;
`;

export const GamePlatformImage = styled.View`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: ${35 / 2}px;
  border: 1.5px ${({ theme }) => theme.colors.ACTION_BG_COLOR} solid;
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

export const GameActionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GameActionLeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GamePlatformText = styled.View`
  justify-content: center;
  padding: 3px 10px 10px 10px;
`;

export const GameRating = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 0.5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  padding: 0px 10px 0px 10px;
`;

export const GameSummary = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 0.5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  position: relative;
`;

export const GameReadMore = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 0.5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  opacity: 0.6;
  position: absolute;
  right: 0;
  bottom: 0;
`;
