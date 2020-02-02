import styled from "styled-components";
import { colors, fonts } from "../../constants";

export const Container = styled.View`
  width: 100%;
  height: 150%;
  justify-content: flex-end;
  padding: 15px 0px;
  background-color: ${colors.ICON_DARK_COLOR};
`;

export const HeaderContents = styled.View`
  width: 100%;
  height: 60%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: ${colors.ICON_DARK_COLOR};
`;
