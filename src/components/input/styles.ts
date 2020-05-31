import styled from 'styled-components/native';
import hexToRGB from '../../utils/hexToRGB';

export const Container = styled.View`
  width: 80%;
  height: 90%;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => hexToRGB(theme.colors.BLACK_FONT_COLOR, 0.5)};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  background-color: ${({ theme }) => theme.colors.DARK_BG_COLOR};
  border-radius: 100px;
  padding-left: 20px;
`;
