import React from 'react';
import { FlatList } from 'react-native';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import GamePlatform from './game_platform';
import platformsData from '../../libs/platform.json';

interface GameListHeaderProps extends NavigationInterface {
  testID?: string;
}

export default function GameListHeader(props: GameListHeaderProps) {
  const { colors } = useThemeContext();

  return (
    <FlatList
      data={platformsData}
      renderItem={({ item }) => (
        <GamePlatform key={item.id} {...props} {...item} />
      )}
      keyExtractor={platform => `${platform.id}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ backgroundColor: colors.WHITE_BG_COLOR }}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
}
