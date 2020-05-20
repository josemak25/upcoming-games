import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  min-width: 100px;
  min-height: 50px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ACTION_BG_COLOR};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  text-transform: capitalize;
`;
