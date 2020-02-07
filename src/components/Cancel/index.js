import React from "react";
import CancelIcon from "../../../assets/icons/cancel";

import Container from "./styles";

export default function Cancel(props) {
  return (
    <Container {...props}>
      <CancelIcon />
    </Container>
  );
}
