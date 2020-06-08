import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

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
