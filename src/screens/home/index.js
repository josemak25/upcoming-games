import React, { useEffect, useContext } from "react";
import LoadingGames from "../../components/LoadingGames";
import { StoreContext } from "../../store";
import loadGames from "../../store/actions";

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

Home.navigationOptions = {
  headerLeft: () => null
};
