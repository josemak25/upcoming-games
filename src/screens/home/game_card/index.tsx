//@ts-nocheck
import React from 'react';
import { Dimensions } from 'react-native';
import getGenres from '../../../utils/getGenres';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationInterface } from '../../types';
import { GameInterface } from '../../../store/game/types';
import { useThemeContext } from '../../../theme';
import { GameScreenshotInterface } from '../../../constants';
import Card from '../../../components/card';
import FastImage from 'react-native-fast-image';
import GameScreenShotPagination from './pagination';

import {
  Container,
  GamePlatformImage,
  GamePlatformText,
  GamePlatformTitle,
  GameEngineTitle,
  GamePaginationContainer,
  GamePaginationText,
  YearAndGenreSeparator,
  GameGenres
} from './styles';

const { width: PHONE_FULL_WIDTH } = Dimensions.get('window');

interface GameProp extends NavigationInterface, GameInterface {
  testID?: string;
  gameIndex: number;
}

const Game = (props: GameProp) => {
  const { colors } = useThemeContext();

  const {
    release_dates,
    gameIndex,
    navigation,
    screenshots,
    genres,
    name
  } = props;

  const { y: year } = release_dates[release_dates.length - 1];

  const handleGame = () => navigation.navigate('DetailScreen', { gameIndex });

  const handleFavorite = () => {};

  const _renderItem = ({ item }) => {
    return (
      <FastImage
        style={{
          width: PHONE_FULL_WIDTH + 5,
          height: PHONE_FULL_WIDTH - 100
        }}
        source={{
          uri: `https:${item.url.replace('t_thumb', 't_screenshot_med_2x')}`,
          priority: FastImage.priority.high
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  };

  return (
    <Container>
      <Card
        activeOpacity={1}
        onPress={handleGame}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          paddingTop: 0
        }}
      >
        <GamePlatformImage>
          <FastImage
            style={{
              width: 40,
              height: 40,
              borderRadius: 40
            }}
            source={{
              uri: 'https://bit.ly/3cRTZjh',
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </GamePlatformImage>
        <GamePlatformText>
          <GameEngineTitle>cyclone engine</GameEngineTitle>
          <GamePlatformTitle>play station 3</GamePlatformTitle>
        </GamePlatformText>
      </Card>
      <AppIntroSlider
        data={screenshots}
        renderItem={_renderItem}
        keyExtractor={(game: GameScreenshotInterface) => `${game.id}`}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        renderPagination={activeIndex => (
          <GameScreenShotPagination
            activeIndex={activeIndex}
            screenshotsLength={screenshots.length}
          />
        )}
        style={{
          height: PHONE_FULL_WIDTH - 100,
          width: PHONE_FULL_WIDTH
        }}
      />
    </Container>
  );
};

export default Game;
