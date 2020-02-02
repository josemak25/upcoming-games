import React, { useEffect, useContext } from "react";
import { FlatList } from "react-native";
import Game from "../../components/Game";
import Header from "../../components/Header";
import LoadingGames from "../../components/LoadingGames";
import temp from "../../database/temp.json";

import { StoreContext, loadGames } from "../../store";

import { Container } from "./styles";

export default function Home({ navigation }) {
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    loadGames(dispatch);
  }, []);

  return !store.isLoading ? (
    <Container>
      <FlatList
        data={store.games}
        renderItem={({ item }) => <Game {...item} />}
        keyExtractor={game => `${game.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </Container>
  ) : (
    <LoadingGames />
  );
}

Home.navigationOptions = ({ navigation }) => ({
  header: () => <Header />
});
