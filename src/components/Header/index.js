import React from "react";
import Search from "../Search";
import Menu from "../Menu";

import { Container, HeaderContents } from "./styles";

export default function Header() {
  return (
    <Container>
      <HeaderContents>
        <Search />
        <Menu />
      </HeaderContents>
    </Container>
  );
}
