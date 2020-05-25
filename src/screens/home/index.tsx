import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import FastImage from 'react-native-fast-image';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { GameInterface } from '../../store/game/types';
import { useStoreContext } from '../../store';
import Game from './game_card';
import Card from '../../components/card';
import Header from '../../commons/header';
import GameListHeader from './game_platform';
import LoadingGames from '../../components/loadingGames';
import layoutProvider, { ViewTypes } from './recycler_list_view';
import { GameScreenshotInterface } from '../../constants';

import { Container } from './styles';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useThemeContext();

  const {
    store: { gameState, userState }
  } = useStoreContext();

  const [state] = useState({
    dataProvider: new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows([
      {},
      ...gameState.games
    ]),

    layoutProvider: layoutProvider()
  });

  const _renderGame = (type: string, data: GameInterface, index: number) => {
    switch (type) {
      case ViewTypes.GAME_LIST:
        return (
          <Game
            gameIndex={index}
            gamesListLastIndex={gameState.games.length}
            {...data}
            {...props}
          />
        );

      case ViewTypes.GAME_LIST_HEADER:
        return <GameListHeader {...props} />;

      default:
        return null;
    }
  };

  const _renderFooter = () => gameState.isLoading && <LoadingGames />;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.WHITE_BG_COLOR,
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      <Header
        headerLeft={() => (
          <Card style={{ width: 40, height: 40 }}>
            <FastImage
              style={{
                width: 40,
                height: 40,
                borderRadius: 45,
                borderWidth: 2,
                borderColor: colors.ACTION_BG_COLOR
              }}
              source={{
                uri: `${userState.user.avatar}`,
                priority: FastImage.priority.normal
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Card>
        )}
      />

      <Container>
        {gameState.isLoading ? (
          <LoadingGames />
        ) : (
          <RecyclerListView
            style={{ minHeight: 1, minWidth: 1, flex: 1, width: '100%' }}
            contentContainerStyle={{ paddingTop: 10 }}
            dataProvider={state.dataProvider}
            layoutProvider={state.layoutProvider}
            rowRenderer={_renderGame}
            renderFooter={_renderFooter}
            showsVerticalScrollIndicator={false}
            canChangeSize={true}
            renderAheadOffset={4}
            keyExtractor={(game: GameScreenshotInterface) => `${game.id}`}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}
