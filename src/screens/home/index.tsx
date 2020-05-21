import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import Game from './game_card';
import Card from '../../components/card';
import Header from '../../commons/header';
import GameListHeader from './gameListHeader';
import ResponsiveImage from '../../libs/responsiveImage';
import LoadingGames from '../../components/loadingGames';

import { Container } from './styles';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useThemeContext();

  const {
    store: { gameState, userState }
  } = useStoreContext();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_BG_COLOR,
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      <Header
        headerLeft={() => (
          <Card style={{ width: 40, height: 40 }}>
            <ResponsiveImage
              imageUrl={userState.user.avatar}
              width={40}
              height={40}
              style={{
                borderRadius: 45,
                borderWidth: 2,
                borderColor: colors.ACTION_BG_COLOR
              }}
            />
          </Card>
        )}
      />

      <Container>
        <FlatList
          ListHeaderComponent={() => <GameListHeader {...props} />}
          ListEmptyComponent={LoadingGames}
          data={gameState.games}
          renderItem={({ item, index }) => (
            <Game {...item} gameIndex={index} {...props} />
          )}
          keyExtractor={game => `${game.id}`}
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </Container>
    </SafeAreaView>
  );
}
