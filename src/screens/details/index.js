import React from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions, ImageBackground } from "react-native";
import boxShadow from "../../utils/boxShadow";

import temp from "../../database/temp.json";
import { colors } from "../../constants";
const { width } = Dimensions.get("window");

import {
  Container,
  Screenshot,
  GameName,
  GameDetailsContainer,
  GameBadgeContainer,
  GameBadge,
  GameBadgeHeader,
  GameRating,
  GameWebSiteContainer,
  GameWebSiteText,
  GameExtraText
} from "./styles";

export default function Details() {
  const { screenshots, name } = temp[4];

  const renderScreenshots = ({ item, index }) => {
    const imageURI = `https:${item.url.replace(
      "t_thumb",
      "t_screenshot_huge"
    )}`;

    return (
      <ImageBackground
        source={{ uri: imageURI }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    );
  };

  return (
    <Container>
      <Screenshot>
        <Carousel
          data={screenshots}
          renderItem={renderScreenshots}
          sliderWidth={width}
          itemWidth={width}
          inactiveSlideScale={1}
        />
      </Screenshot>
      <GameDetailsContainer>
        <GameName>{name}</GameName>
        <GameBadgeContainer>
          <GameBadge>
            <GameBadgeHeader>rating</GameBadgeHeader>
            <GameRating>6.5</GameRating>
            <GameBadgeHeader>website</GameBadgeHeader>
            <GameWebSiteContainer
              {...boxShadow({
                elevation: 1,
                color: colors.FONT_DARK_COLOR,
                opacity: 0.1,
                radius: 3,
                width: 6,
                height: 0
              })}
            >
              <GameWebSiteText>visit</GameWebSiteText>
            </GameWebSiteContainer>
          </GameBadge>
          <GameBadge>
            <GameBadgeHeader>company</GameBadgeHeader>
            <GameExtraText>play station</GameExtraText>
            <GameBadgeHeader>release date</GameBadgeHeader>
            <GameExtraText>Dec 30, 2018</GameExtraText>
          </GameBadge>
        </GameBadgeContainer>
      </GameDetailsContainer>
    </Container>
  );
}

Details.navigationOptions = { headerShown: false };
