import React, { useEffect } from "react";
import { Container, ImageBackground, Title, Logo, IconTexts } from "./styles";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate("HomeScreen"), 2000);
  }, []);

  return (
    <Container>
      <ImageBackground
        style={{ resizeMode: "contain" }}
        source={require("../../assets/splash.png")}
        fadeDuration={0}
      >
        <Logo source={require("../../assets/splash_icon.png")} />
        <IconTexts>
          <Title>Upcoming</Title>
          <Title>Games</Title>
        </IconTexts>
      </ImageBackground>
    </Container>
  );
}

SplashScreen.navigationOptions = {
  header: () => null
};
