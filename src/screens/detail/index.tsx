import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { GameInterface } from '../../store/game/types';
import Button from '../../components/button';
import Carousel from 'react-native-snap-carousel';
import YouTube from 'react-native-youtube';
import FastImage from 'react-native-fast-image';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import LoadingGames from '../../components/LoadingGames';
import layoutProvider, { ViewTypes } from '../../components/recycler_list_view';

import BookmarkIcon from '../../../assets/icons/mark';
import MobileIcon from '../../../assets/icons/mobile';
import NintendoIcon from '../../../assets/icons/nintendo';
import PcIcon from '../../../assets/icons/pc';
import PlayStationIcon from '../../../assets/icons/playStation';

import {
  Container,
  DescriptionWrapper,
  DescriptionContainer,
  DescriptionInnerTop,
  TopLeft,
  TopRight,
  ImageCard,
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
import { GameScreenshotInterface } from '../../constants';

interface DetailScreenProp extends NavigationInterface {
  testID?: string;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function DetailScreen(props: DetailScreenProp) {
  const { colors } = useThemeContext();

  const {
    store: { gameState }
  } = useStoreContext();

  const [state] = useState({
    gameDetails: gameState.games[4]
  });

  const _renderVideos = ({ item, index }) => {
    console.log(state.gameDetails);
    return (
      <YouTube
        videoId={item.video_id}
        style={{ width: SCREEN_WIDTH, height: 400, borderWidth: 1 }}
      />
    );
  };

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
    <ScrollView style={{ flexGrow: 1 }}>
      <Container>
        {gameState.isLoading ? (
          <LoadingGames />
        ) : (
          <AppIntroSlider
            data={state.gameDetails.videos}
            renderItem={_renderVideos}
            keyExtractor={(game: GameScreenshotInterface) => `${game.id}`}
            showNextButton={false}
            showPrevButton={false}
            showDoneButton={false}
            horizontal
            showsVerticalScrollIndicator={false}
            style={{ width: SCREEN_WIDTH, height: 400 }}
          />
        )}
        <DescriptionWrapper>
          <DescriptionContainer>
            <DescriptionInnerTop>
              <TopLeft>
                <ImageCard></ImageCard>
                <DescriptionText>
                  <TitleText>God of war</TitleText>
                  <TextGroup>
                    <CategoryHeader>Genres:</CategoryHeader>
                    <CategoryDetails>Action, Adventure</CategoryDetails>
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

              <BookmarkIcon />
            </DescriptionInnerTop>
            <DescriptionIconGroup>
              <PcIcon />
              <MobileIcon />
              <NintendoIcon />
              <PlayStationIcon />
              <PcIcon />
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
          <SummaryText>
            {state.gameDetails.summary}
          </SummaryText>
        </SummaryContainer>
      </Container>
    </ScrollView>
  );
}
