import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ACTION_BG_COLOR};
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  text-transform: capitalize;
`;
