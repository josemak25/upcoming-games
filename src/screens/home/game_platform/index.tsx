import React, { useState } from 'react';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import FastImage from 'react-native-fast-image';
import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import Card from '../../../components/card';
import platformsData from '../../../libs/platform.json';
import { headerLayoutProvider } from '../../../components/recycler_list_view';

import { Container, GamePlatformTitle, ImageClipper } from './styles';

interface GameListHeaderProps extends NavigationInterface {
  testID?: string;
}

interface GameProp {
  id: number;
  abbreviation?: string;
  alternative_name?: string;
  generation?: number;
  name: string;
  platform_logo: {
    id: number;
    alpha_channel: boolean;
    animated: boolean;
    height: number;
    image_id: string;
    url: string;
    width: number;
  };
}

function GameListHeader(props: GameListHeaderProps) {
  const { colors } = useThemeContext();

  const [state] = useState({
    dataProvider: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
      platformsData
    ),

    layoutProvider: headerLayoutProvider()
  });

  const handlePlatform = () => {
    props.navigation.navigate('DetailScreen');
  };

  const renderGamePlatform = (_type: string, data: GameProp) => {
    const {
      name,
      abbreviation,
      platform_logo: { url }
    } = data;

    return (
      <Container>
        <Card
          activeOpacity={0.7}
          onPress={handlePlatform}
          style={{
            width: 65,
            height: 65,
            borderRadius: 65 / 2,
            overflow: 'hidden',
            borderWidth: 2,
            borderColor: colors.ACTION_BG_COLOR,
            justifyContent: 'center'
          }}
        >
          <ImageClipper />

          <FastImage
            style={{
              width: 55,
              height: 55,
              borderRadius: 55 / 2
            }}
            source={{
              uri: `https:${url.replace('t_thumb', 't_thumb_2x')}`,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Card>
        <GamePlatformTitle>
          {name.length > 12 ? abbreviation : name}
        </GamePlatformTitle>
      </Container>
    );
  };

  return (
    <RecyclerListView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 0 }}
      isHorizontal
      dataProvider={state.dataProvider}
      layoutProvider={state.layoutProvider}
      rowRenderer={renderGamePlatform}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(game: GameProp) => `${game.id}`}
    />
  );
}

export default GameListHeader;
