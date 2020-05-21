import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  z-index: 999;
`;

export const HeaderBackTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  position: absolute;
  right: -10px;
`;

export const HeaderLeft = styled.View`
  width: ${applyScale(70)}px;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const HeaderRight = styled.View`
  width: ${applyScale(50)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
