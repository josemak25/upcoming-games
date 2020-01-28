import React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../../constants";
import { Container } from "./styles";

export default LoadingGames = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.ICON_DARK_COLOR} />
    </Container>
  );
};
