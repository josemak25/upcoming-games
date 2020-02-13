import React from "react";
import { Platform } from "react-native";
import YouTube from "react-native-youtube";

import PlayIcon from "../../../assets/icons/play";
import boxShadow from "../../utils/boxShadow";

import { colors } from "../../constants";
import { PlayTrailer, TrailerContainer } from "./styles";

export default function Trailers({ item }) {
  const { video_id } = item;

  const onFullScreen = fullScreen => {
    console.log("fullscreen ", fullScreen);
  };

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
      {/* 
        <PlayTrailer onPress={() => console.log("PLAY GAME TRAILER")}>
          <PlayIcon />
        </PlayTrailer>
       */}

      <YouTube
        videoId={video_id}
        onReady={e => console.log("READY")}
        onError={e => this.setState({ error: e.error })}
        style={{ height: "100%", borderRadius: 15 }}
        play // control playback of video with true/false
        fullscreen
      />
    </TrailerContainer>
  );
}
