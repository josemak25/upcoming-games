import React from 'react';
import { ImageBackground } from 'react-native';
import getImageURL from '../../../utils/getImageURL';
import getGenres from '../../../utils/getGenres';
import FavoriteIcon from '../../../../assets/icons/favorite';
import { NavigationInterface } from '../../types';
import { GameInterface } from '../../../store/game/types';
import { useThemeContext } from '../../../theme';

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
} from './styles';

interface GameProp extends NavigationInterface, GameInterface {
  testID?: string;
  gameIndex: number;
}

export default function Game(props: GameProp) {
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

  return (
    <Container activeOpacity={0.7} onPress={handleGame}>
      <ImageBackground
        source={{ uri: getImageURL(screenshots) }}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end'
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
        </GameDetails>
      </ImageBackground>
    </Container>
  );
}
