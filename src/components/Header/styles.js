import styled from "styled-components";
import { Platform } from "react-native";
import { colors } from "../../constants";

export const Container = styled.View`
  width: 100%;
  ${Platform.select({
    ios: {
      height: "110px"
    },
    android: {
      height: "100px"
    }
  })};
  justify-content: flex-end;
  padding: 15px 0px;
  background-color: ${colors.ICON_DARK_COLOR};
`;

export const HeaderContents = styled.View`
  ${Platform.select({
    ios: {
      height: "65%"
    },
    android: {
      height: "70%"
    }
  })};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: ${colors.ICON_DARK_COLOR};
`;
