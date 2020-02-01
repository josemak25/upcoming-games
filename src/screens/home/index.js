import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import LoadingGames from "../../components/LoadingGames";

import { StoreContext, loadGames } from "../../store";

import { Container, PleaseDeleteMe } from "./styles";

export default function Home({ navigation }) {
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    loadGames(dispatch);
  }, []);

  return !store.isLoading ? (
    <Container>
      <PleaseDeleteMe>
        Open up App.js to start working on your app!
      </PleaseDeleteMe>
    </Container>
  ) : (
    <LoadingGames />
  );
}

Home.navigationOptions = ({ navigation }) => ({
  header: () => <Header />
});
