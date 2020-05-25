import React from 'react';
import { Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import { NavigationInterface } from '../../types';
import { GameInterface } from '../../../store/game/types';
import { useThemeContext } from '../../../theme';
import { GameBookmarkInterface } from '../../../constants';
import { useStoreContext } from '../../../store';
import { BOOKMARK_ACTION_TYPES } from '../../../store/bookmark/types';
import Card from '../../../components/card';
import BookmarkIcon from '../../../../assets/icons/bookmark';
import LoveIcon from '../../../../assets/icons/love_icon';
import bookmarkActions from '../../../store/bookmark/actions';

import { Container } from './styles';
import getImageURL from '../../../utils/getImageURL';

const { width: PHONE_FULL_WIDTH } = Dimensions.get('window');

interface GameProp extends NavigationInterface, GameBookmarkInterface {
  testID?: string;
}

const Bookmark = (props: GameProp) => {
  const { colors } = useThemeContext();

  const { dispatch } = useStoreContext();

  const { navigation, screenshots, name, id: game_id } = props;

  const handleNavigation = () => {
    navigation.navigate('DetailScreen', { game_id });
  };

  const removeBookmark = () => {
    bookmarkActions(
      dispatch,
      BOOKMARK_ACTION_TYPES.REMOVE_BOOKMARK_GAME,
      game_id
    );
  };

  return (
    <Card
      activeOpacity={1}
      onPress={handleNavigation}
      style={{ width: '100%', alignItems: 'center' }}
    >
      <FastImage
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: getImageURL(screenshots),
          priority: FastImage.priority.high
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Card>
  );
};

export default React.memo(Bookmark);
