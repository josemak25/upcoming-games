import React from 'react';
import { FlatList } from 'react-native';
import { NavigationInterface } from '../types';
import { useStoreContext } from '../../store';
import Game from './game_card';
import LoadingGames from '../../components/LoadingGames';

import { Container } from './styles';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen(props: HomeScreenProps) {
  const {
    store: { gameState }
  } = useStoreContext();

  return !gameState.isLoading ? (
    <Container>
      <FlatList
        ListEmptyComponent={LoadingGames}
        data={gameState.games}
        renderItem={({ item, index }) => (
          <Game {...item} gameIndex={index} {...props} />
        )}
        keyExtractor={game => `${game.id}`}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 10
        }}
      />
    </Container>
  ) : (
    <LoadingGames />
  );
}
