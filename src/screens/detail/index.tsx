import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { GameInterface } from '../../store/game/types';
import Carousel from 'react-native-snap-carousel';
import YouTube from 'react-native-youtube';
import FastImage from 'react-native-fast-image';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import LoadingGames from '../../components/LoadingGames';
import ENV from '../../config';
import BookmarkIcon from '../../../assets/icons/bookmark';
import MobileIcon from '../../../assets/icons/mobile';
import NintendoIcon from '../../../assets/icons/nintendo';
import PcIcon from '../../../assets/icons/pc';
import XboxIcon from '../../../assets/icons/xbox';
import PlayStationIcon from '../../../assets/icons/playStation';
import { GameScreenshotInterface } from '../../constants';
import getImageURL from '../../utils/getImageURL';
import getGenres from '../../utils/getGenres';

import {
  Container,
  DescriptionWrapper,
  DescriptionContainer,
  DescriptionInnerTop,
  TopLeft,
  DescriptionText,
  TextGroup,
  TitleText,
  CategoryHeader,
  CategoryDetails,
  DescriptionIconGroup,
  SlideImageContainer,
  SummaryContainer,
  SummaryText
} from './styles';

interface DetailScreenProp extends NavigationInterface {
  testID?: string;
  route: { params: { gameIndex: number } };
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function DetailScreen(props: DetailScreenProp) {
  const { colors } = useThemeContext();

  const {
    store: { gameState }
  } = useStoreContext();

  const { gameIndex } = props.route.params;

  const [state] = useState({
    gameDetails: gameState.games[gameIndex]
  });

  const { screenshots, videos, summary, name, genres } = state.gameDetails;

  const _renderVideos = ({ item, index }) => (
    <YouTube
      //@ts-ignore
      apiKey={ENV.YOUTUBE_API_KEY}
      videoId={item.video_id}
      style={{ width: SCREEN_WIDTH, height: 400 }}
    />
  );

  const _renderPhotos = ({ item, index }) => {
    return (
      <FastImage
        style={{
          width: 55,
          height: 55,
          borderRadius: 5
        }}
        source={{
          uri: `https:${state.gameDetails.url.replace(
            't_thumb',
            't_thumb_2x'
          )}`,
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  };

  return (
    <ScrollView
      style={{ flexGrow: 1, backgroundColor: colors.DARK_BG_COLOR }}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Container>
        {gameState.isLoading ? (
          <LoadingGames />
        ) : (
          <AppIntroSlider
            data={videos}
            renderItem={_renderVideos}
            keyExtractor={(game: GameScreenshotInterface) => `${game.id}`}
            showNextButton={false}
            showPrevButton={false}
            showDoneButton={false}
            horizontal
            renderPagination={() => null}
            showsVerticalScrollIndicator={false}
            style={{ width: SCREEN_WIDTH, height: 400 }}
          />
        )}
        <DescriptionWrapper>
          <DescriptionContainer>
            <DescriptionInnerTop>
              <TopLeft>
                <FastImage
                  style={{
                    width: '35%',
                    height: 140,
                    backgroundColor: colors.DARK_BG_COLOR,
                    marginTop: -30,
                    borderRadius: 3,
                    marginRight: 15
                  }}
                  source={{
                    uri: getImageURL(screenshots),
                    priority: FastImage.priority.normal
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <DescriptionText>
                  <TitleText>{name}</TitleText>
                  <TextGroup>
                    <CategoryHeader>Genres:</CategoryHeader>
                    <CategoryDetails>{getGenres(genres)}</CategoryDetails>
                  </TextGroup>
                  <TextGroup>
                    <CategoryHeader>Engine:</CategoryHeader>
                    <CategoryDetails>Sony Entertainment</CategoryDetails>
                  </TextGroup>
                  <TextGroup>
                    <CategoryHeader>Rating:</CategoryHeader>
                    <CategoryDetails>5,678 Likes</CategoryDetails>
                  </TextGroup>
                </DescriptionText>
              </TopLeft>

              <BookmarkIcon
                width="10%"
                height="35%"
                isFocused={false}
                fillColor={colors.INACTIVE_BG_COLOR}
              />
            </DescriptionInnerTop>
            <DescriptionIconGroup>
              <PcIcon fillColor={colors.ACTION_BG_COLOR} />
              <PlayStationIcon fillColor={colors.ACTION_BG_COLOR} />
              <XboxIcon />
              <NintendoIcon />
              <MobileIcon />
            </DescriptionIconGroup>
          </DescriptionContainer>
        </DescriptionWrapper>
        {gameState.isLoading ? (
          <LoadingGames />
        ) : (
          <Carousel
            renderItem={_renderPhotos}
            sliderHeight={200}
            data={state.gameDetails.screenshots}
            sliderWidth={250}
            itemWidth={250}
          />
        )}

        <SummaryContainer>
          <SummaryText>{summary}</SummaryText>
        </SummaryContainer>
      </Container>
    </ScrollView>
  );
}
