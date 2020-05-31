import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DARK_BG_COLOR};
`;

export const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  text-transform: capitalize;
  padding: 40px 0px 30px 0px;
`;

export const HeaderTextContent = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  text-align: center;
`;

export const SearchPlatformsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 30px;
`;

export const SearchPlatformsButton = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 50px;
`;
