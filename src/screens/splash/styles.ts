import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  position: relative;
`;
