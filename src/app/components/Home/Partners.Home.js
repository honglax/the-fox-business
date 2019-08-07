import React from "react";
import { Container } from "react-bootstrap";

import cubanese from "../../../assets/partners-logo/cubanese.png";
import genuine from "../../../assets/partners-logo/genuine.png";
import handcraft from "../../../assets/partners-logo/handcraft.png";
import newYorkTm from "../../../assets/partners-logo/new-york-tm.png";
import nordHaus from "../../../assets/partners-logo/nord-haus.png";
import premium from "../../../assets/partners-logo/premium.png";
import southBeach from "../../../assets/partners-logo/south-beach.png";
import staton from "../../../assets/partners-logo/staton.png";

export default function Partners() {
  const logos = [
    cubanese,
    handcraft,
    premium,
    genuine,
    staton,
    southBeach,
    nordHaus,
    newYorkTm
  ];

  return (
    <Container>
      <div className="title">The Best Partner</div>
      <div className="description">
        Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
        <br />Nulla vehicula nibh vel ante commodo feugiat.
      </div>
      <div className="partner-logos">
        {logos.map(logo => (
          <img
            src={logo}
            alt="Partner Logo"
            className="logo"
            key={logos.indexOf(logo)}
          />
        ))}
      </div>
    </Container>
  );
}
