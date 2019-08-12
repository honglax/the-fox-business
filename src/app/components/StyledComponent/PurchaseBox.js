import React from "react";
import { Container } from "react-bootstrap";
import { PrimaryButton } from "./style";

export default function PurchaseBox({ bgColor }) {
  return (
    <div className="purchase-box" style={{ backgroundColor: bgColor }}>
      <Container>
        <p className="text">Become A Part Of TheFox Business Community Today</p>
        <PrimaryButton
          width="270px"
          height="55px"
          bgColor="transparent"
          borderColor="#fff"
        >
          Purchase Now
        </PrimaryButton>
      </Container>
    </div>
  );
}
