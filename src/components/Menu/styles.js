import styled from "styled-components/native";
import { colors } from "../../constants";

export const Container = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: ${45 / 2}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
`;
