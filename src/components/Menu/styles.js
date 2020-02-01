import styled from "styled-components/native";
import { colors } from "../../constants";

export const Container = styled.TouchableOpacity`
  width: 62px;
  height: 62px;
  border-radius: ${62 / 2}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
`;
