import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  padding: 15px;
  border-radius: 40px;
  margin: 5px;
`;

export const OptionColor = styled.View`
  height: 15px;
  width: 15px;
  border-radius: ${15 / 2}px;
`;

export const Option = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 4}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  margin: 0px 10px;
`;

export const CancelOptionContainer = styled.TouchableOpacity`
  height: 48px;
  justify-content: center;
  align-items: center;
`;
