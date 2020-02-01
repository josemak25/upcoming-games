import styled from "styled-components/native";
import { colors, fonts } from "../../constants";

export const Container = styled.View`
  width: 80%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
`;

export const Input = styled.TextInput`
  flex: 8.5;
  height: 100%;
  font-family: ${fonts.FONT_FAMILY_REGULAR};
  color: ${colors.FONT_DARK_COLOR};
  background-color: ${colors.BACKGROUND_LIGHT_COLOR};
`;

export const InputContainer = styled.View`
  flex: 8;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchIconContainer = styled.TouchableOpacity`
  flex: 1.5;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MicrophoneIconContainer = styled.TouchableOpacity`
  flex: 1.3;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
