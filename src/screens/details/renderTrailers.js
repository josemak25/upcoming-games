import React from "react";
import { ImageBackground, Platform } from "react-native";
import PlayIcon from "../../../assets/icons/play";
import boxShadow from "../../utils/boxShadow";

import { colors } from "../../constants";
import { PlayTrailer, TrailerContainer } from "./styles";

export default function Trailers({ item }) {
  const imageURI = `https:${item.url.replace("t_thumb", "t_screenshot_huge")}`;

  return (
    <TrailerContainer
      style={Platform.select({
        ios: {
          ...boxShadow({
            elevation: 1,
            color: colors.GAME_CARD_BACKGROUND,
            radius: 3,
            height: 5,
            opacity: 0.3
          })
        }
      })}
    >
      <ImageBackground
        source={{ uri: imageURI }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        imageStyle={{ borderRadius: 15 }}
        resizeMode="cover"
      >
        <PlayTrailer>
          <PlayIcon />
        </PlayTrailer>
      </ImageBackground>
    </TrailerContainer>
  );
}
