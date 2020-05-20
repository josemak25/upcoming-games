import React from 'react';
import { FlatList } from 'react-native';
import Game from './game_card';
import LoadingGames from '../../components/LoadingGames';
import { NavigationInterface } from '../types';

import { Container } from './styles';
import { useStoreContext } from '../../store';

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
        data={gameState.games}
        renderItem={({ item, index }) => (
          <Game {...item} gameIndex={index} {...props} />
        )}
        keyExtractor={game => `${game.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      />
    </Container>
  ) : (
    <LoadingGames />
  );
}
