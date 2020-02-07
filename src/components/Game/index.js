import React, { useState } from "react";
import { ImageBackground } from "react-native";
import getImageURL from "../../utils/getImageURL";
import getGenres from "../../utils/getGenres";
import FavoriteIcon from "../../../assets/icons/favorite";
import { colors } from "../../constants";

import {
  Container,
  GameTitle,
  GameDetails,
  Favorite,
  GameTexts,
  GameRealizeYear,
  YearAndGenreSeparator,
  GameTextsBottom,
  GameGenres
} from "./styles";

export default function Game({
  name,
  release_dates,
  genres,
  screenshots,
  navigate,
  gameIndex
}) {
  const [state, setState] = useState({ favoriteClicked: false });

  const { y: year } = release_dates[release_dates.length - 1];

  const handleGame = () => navigate("DetailScreen", { gameIndex });

  const handleFavorite = () => {};

  return (
    <Container activeOpacity={0.7} onPress={handleGame}>
      <ImageBackground
        source={{ uri: getImageURL(screenshots) }}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.8,
          justifyContent: "flex-end"
        }}
        resizeMode="cover"
      >
        <GameDetails>
          <GameTexts>
            <GameTitle>{name}</GameTitle>
            <GameTextsBottom>
              <GameRealizeYear>{year}</GameRealizeYear>
              <YearAndGenreSeparator />
              <GameGenres>{getGenres(genres)}</GameGenres>
            </GameTextsBottom>
          </GameTexts>
          <Favorite
            onPress={handleFavorite}
            underlayColor={colors.ICON_DARK_COLOR}
          >
            <FavoriteIcon />
          </Favorite>
        </GameDetails>
      </ImageBackground>
    </Container>
  );
}
