import React from "react";
import { Container, PleaseDeleteMe } from "./styles";

export default function Home() {
  return (
    <Container>
      <PleaseDeleteMe>
        Open up App.js to start working on your app!
      </PleaseDeleteMe>
    </Container>
  );
}

Home.navigationOptions = {
  headerLeft: () => null
};
