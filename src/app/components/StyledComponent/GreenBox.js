import React from "react";
import { Container } from "react-bootstrap";
import { PrimaryButton } from "../StyledComponent/style";

export default function GreenBox() {
  return (
    <Container>
      <p className="text">Become A Part Of TheFox Business Community Today</p>
      <PrimaryButton
        width={270}
        height={55}
        bgColor="transparent"
        borderColor="#fff"
      >
        Purchase Now
      </PrimaryButton>
    </Container>
  );
}
