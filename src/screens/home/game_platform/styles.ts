import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

export const ImageClipper = styled.View`
  height: 56px;
  width: 56px;
  border-radius: ${56 / 2}px;
  position: absolute;
  z-index: 2;
  border: 1.2px ${({ theme }) => theme.colors.DARK_BG_COLOR} solid;
`;

export const GamePlatformTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  text-transform: capitalize;
  letter-spacing: 0.5px;
  padding-top: 4px;
`;
