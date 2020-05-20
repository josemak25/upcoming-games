import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
`;
