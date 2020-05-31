import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DARK_BG_COLOR};
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
