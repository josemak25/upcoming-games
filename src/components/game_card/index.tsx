//@ts-nocheck
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationInterface } from '../../screens/types';
import { GameInterface } from '../../store/game/types';
import { useThemeContext } from '../../theme';
import { GameScreenshotInterface } from '../../constants';
import { useStoreContext } from '../../store';
import { BOOKMARK_ACTION_TYPES } from '../../store/bookmark/types';
import Card from '../card';
import BookmarkIcon from '../../../assets/icons/bookmark';
import LoveIcon from '../../../assets/icons/love_icon';
import GameScreenShotPagination from './pagination';
import bookmarkActions from '../../store/bookmark/actions';

import {
  Container,
  GamePlatformImage,
  GamePlatformText,
  GamePlatformTitle,
  GameEngineTitle,
  GameActionContainer,
  GameActionLeftContainer,
  GameRating,
  GameSummary,
  GameReadMore
} from './styles';

const { width: PHONE_FULL_WIDTH } = Dimensions.get('window');

interface GameProp extends NavigationInterface, GameInterface {
  testID?: string;
  gameIndex: number;
  bookmarked: boolean;
  gamesListLastIndex: number;
}

const Game = (props: GameProp) => {
  const { colors } = useThemeContext();

  const { dispatch } = useStoreContext();

  const {
    release_dates,
    gameIndex,
    navigation,
    screenshots,
    name,
    summary,
    bookmarked,
    id: game_id,
    gamesListLastIndex
  } = props;

  const [bookmarkChecked, setBookmarkChecked] = useState(bookmarked);

  const releaseDate = release_dates[release_dates.length - 1];

  const handleGame = () => navigation.navigate('DetailScreen', { gameIndex });

  const handleBookmark = () => {
    if (bookmarkChecked) {
      bookmarkActions(
        dispatch,
        BOOKMARK_ACTION_TYPES.REMOVE_BOOKMARK_GAME,
        game_id
      );

      return setBookmarkChecked(false);
    }

    const bookMarkedTime = Math.floor(new Date().getTime() / 1000);

    bookmarkActions(dispatch, BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_GAME, [
      {
        id: game_id,
        game_id,
        created_at: bookMarkedTime,
        updated_at: bookMarkedTime
      }
    ]);

    setBookmarkChecked(true);
  };

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
    <Container
      style={{ borderBottomWidth: gameIndex === gamesListLastIndex ? 0 : 8 }}
    >
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
            onPress={handleBookmark}
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
              fillColor={
                bookmarkChecked
                  ? colors.ACTION_BG_COLOR
                  : colors.INACTIVE_ICON_COLOR
              }
              isFocused={bookmarkChecked}
            />
          </TouchableOpacity>
        </GameActionContainer>
        <GameRating>10,432 likes</GameRating>
        <GamePlatformText>
          <GameSummary numberOfLines={2}>
            {summary.replace(/\r?\n/, '').substr(0, 100)}
            <GameReadMore> ...more</GameReadMore>
          </GameSummary>
        </GamePlatformText>
      </Card>
    </Container>
  );
};

export default React.memo(Game);
