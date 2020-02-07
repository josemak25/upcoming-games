import styled from "styled-components/native";
import { colors } from "../../constants";

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
  position: absolute;
  right: 15px;
  top: 12%;
  border-radius: ${40 / 2}px;
  border: 2.5px ${colors.ICON_SHADOW_COLOR};
  opacity: 0.8;
`;
