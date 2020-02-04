import React from "react";
import Header from "../../components/Header";

import { Container, PleaseDeleteMe } from "./styles";

export default function Details() {
  return (
    <Container>
      <PleaseDeleteMe>Details Page</PleaseDeleteMe>
    </Container>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  header: () => <Header />
});
