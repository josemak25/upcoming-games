import styled from 'styled-components/native';
import hexToRGB from '../../utils/hexToRGB';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DARK_BG_COLOR};
`;

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  z-index: 999;
  padding: 10px 10px;
`;

export const SearchCancelIconContainer = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 100px;
`;

export const SearchContainerHeader = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  border-color: ${({ theme }) => hexToRGB(theme.colors.BLACK_FONT_COLOR, 0.2)};
  border-style: solid;
  border-bottom-width: 0.2px;
  padding: 0px 20px;
`;

export const SearchContainerHeaderText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  opacity: 0.7;
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
