import React from "react";
import SearchIcon from "../../../assets/icons/search";
import MicrophoneIcon from "../../../assets/icons/microphone";
import { colors } from "../../constants";

import {
  Container,
  Input,
  InputContainer,
  MicrophoneIconContainer,
  SearchIconContainer
} from "./styles";

export default function Search() {
  return (
    <Container>
      <InputContainer>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <Input
          placeholder="Search..."
          placeholderTextColor={colors.FONT_DARK_COLOR}
        />
      </InputContainer>
      <MicrophoneIconContainer>
        <MicrophoneIcon />
      </MicrophoneIconContainer>
    </Container>
  );
}
