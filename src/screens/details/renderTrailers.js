import React from "react";
import { Platform } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import PlayIcon from "../../../assets/icons/play";
import boxShadow from "../../utils/boxShadow";
import LoadingGameTrailer from "../../components/LoadingGames";

import { colors } from "../../constants";
import { PlayTrailer, TrailerContainer, LoadingTrailer } from "./styles";

export default function Trailers({ item }) {
  const onReadyState = () => {
    console.log("onReadyState");
  };

  const onErrorState = e => {
    console.log("onErrorState", e);
  };

  const onChangeState = e => {
    console.tron.log("onChangeState", e);
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
      {/* <PlayTrailer onPress={() => console.log("PLAY GAME TRAILER")}>
          <PlayIcon />
        </PlayTrailer> 
    */}

      <LoadingTrailer>
        <YoutubePlayer
          videoId={item.video_id}
          play={false}
          onChangeState={onChangeState}
          onReady={onReadyState}
          onError={onErrorState}
          onPlaybackQualityChange={q => console.warn(q)}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 15
          }}
          webViewStyle={{
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
          renderLoading={LoadingGameTrailer}
        />
      </LoadingTrailer>
    </TrailerContainer>
  );
}
