import React, { useContext, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions, ScrollView } from "react-native";
import { StoreContext } from "../../store";

import renderScreenshots from "./renderScreenshots";
import renderTrailers from "./renderTrailers";
import Pagination from "./pagination";

import CancelIcon from "../../../assets/icons/cancel";
import boxShadow from "../../utils/boxShadow";
import { colors } from "../../constants";
const { width: sliderWidth } = Dimensions.get("window");

import {
  Container,
  Screenshot,
  BackButton,
  GameName,
  GameDetailsContainer,
  GameBadgeContainer,
  GameBadge,
  GameBadgeHeader,
  GameRating,
  GameWebSiteContainer,
  GameWebSiteText,
  GameExtraText,
  GameGenreContainer,
  GameDetailsTitle,
  GameGenres,
  GameGenre,
  GameSummary,
  GameTrailerContainer
} from "./styles";

export default function Details({ navigation }) {
  const gameIndex = navigation.getParam("gameIndex");

  const [paginate, setPaginate] = useState(0);

  const [{ games }] = useContext(StoreContext);
  const { screenshots, name, genres, summary } = games[gameIndex];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Screenshot>
          <Carousel
            data={screenshots}
            renderItem={renderScreenshots}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            shouldOptimizeUpdates={true}
            lockScrollWhileSnapping={true}
            onSnapToItem={scrollIndex => setPaginate(scrollIndex)}
          />
          <BackButton activeOpacity={0.5} onPress={() => navigation.goBack()}>
            <CancelIcon />
          </BackButton>
          <Pagination {...{ paginate, screenshots }} />
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
                  elevation: 3,
                  color: colors.FONT_DARK_COLOR,
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
          <GameGenreContainer>
            <GameDetailsTitle>genres</GameDetailsTitle>
            <GameGenres>
              {genres ? (
                genres.map(({ name, id }, index) => (
                  <GameGenre key={id}>
                    {genres.length - 1 !== index ? `${name},` : name}
                  </GameGenre>
                ))
              ) : (
                <GameGenre>not available</GameGenre>
              )}
            </GameGenres>
            <GameDetailsTitle style={{ marginTop: 20 }}>
              summary
            </GameDetailsTitle>
            <GameSummary>{summary}</GameSummary>
            <GameDetailsTitle style={{ marginTop: 30 }}>
              trailers
            </GameDetailsTitle>
            <GameTrailerContainer>
              <Carousel
                data={screenshots}
                renderItem={renderTrailers}
                sliderWidth={sliderWidth - 60}
                sliderHeight={sliderWidth + 20}
                itemWidth={sliderWidth - 120}
                loop={true}
                inactiveSlideScale={0.9}
                shouldOptimizeUpdates={true}
                lockScrollWhileSnapping={true}
              />
            </GameTrailerContainer>
          </GameGenreContainer>
        </GameDetailsContainer>
      </Container>
    </ScrollView>
  );
}

Details.navigationOptions = { headerShown: false };
