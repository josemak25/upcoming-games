//@ts-nocheck
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import getGenres from '../../../utils/getGenres';
import { EvilIcons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationInterface } from '../../types';
import { GameInterface } from '../../../store/game/types';
import { useThemeContext } from '../../../theme';
import { GameScreenshotInterface } from '../../../constants';
import Card from '../../../components/card';
import BookmarkIcon from '../../../../assets/icons/bookmark';
import FastImage from 'react-native-fast-image';
import LoveIcon from '../../../../assets/icons/love_icon';
import applyScale from '../../../utils/applyScale';
import GameScreenShotPagination from './pagination';

import {
  Container,
  GamePlatformImage,
  GamePlatformText,
  GamePlatformTitle,
  GameEngineTitle,
  GameActionContainer,
  GameActionLeftContainer,
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

  const handleLove = () => {};

  const _renderItem = ({ item }) => {
    return (
      <FastImage
        style={{ width: '100%', height: '100%' }}
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
              width: 30,
              height: 30,
              borderRadius: 30 / 2
            }}
            source={{
              uri: 'https://bit.ly/3cRTZjh',
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </GamePlatformImage>
        <GamePlatformText>
          <GameEngineTitle>{name}</GameEngineTitle>
          <GamePlatformTitle>cyclone engine</GamePlatformTitle>
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
        horizontal
        showsVerticalScrollIndicator={false}
        style={{ width: PHONE_FULL_WIDTH }}
      />

      <Card
        activeOpacity={1}
        onPress={handleGame}
        style={{
          width: '100%',
          alignItems: 'flex-start',
          paddingRight: 10,
          paddingLeft: 5
        }}
      >
        <GameActionContainer>
          <GameActionLeftContainer>
            <TouchableOpacity
              onPress={handleLove}
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40 / 2
              }}
            >
              <LoveIcon fillColor={colors.INACTIVE_ICON_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLove}
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40 / 2
              }}
            >
              <EvilIcons
                name="share-google"
                size={30}
                color={colors.INACTIVE_ICON_COLOR}
              />
            </TouchableOpacity>
          </GameActionLeftContainer>
          <TouchableOpacity
            onPress={handleFavorite}
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40 / 2
            }}
          >
            <BookmarkIcon
              width={25}
              height="70%"
              fillColor={colors.INACTIVE_ICON_COLOR}
            />
          </TouchableOpacity>
        </GameActionContainer>
        <GamePlatformText></GamePlatformText>
      </Card>
    </Container>
  );
};

export default React.memo(Game);
