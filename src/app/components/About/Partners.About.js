import React from "react";
import styled from "styled-components";
import newYorkWhite from "../../../assets/partners-logo/newyork-white.png";
import cubaneseWhite from "../../../assets/partners-logo/cubanese-white.png";
import genuineWhite from "../../../assets/partners-logo/genuine-white.png";
import handcraftWhite from "../../../assets/partners-logo/handcraft-white.png";
import nordHausWhite from "../../../assets/partners-logo/nord-haus-white.png";
import premiumWhite from "../../../assets/partners-logo/premium-white.png";
import southBeachWhite from "../../../assets/partners-logo/south-beach-white.png";
import statonWhite from "../../../assets/partners-logo/staton-white.png";

function Partners() {
  const partnerBgColor = "#373c46";
  let partnerLogos = [
    statonWhite,
    handcraftWhite,
    premiumWhite,
    genuineWhite,
    cubaneseWhite,
    southBeachWhite,
    newYorkWhite,
    nordHausWhite
  ];

  const LogoWrapper = styled.div`
    background-color: ${partnerBgColor};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 50px 0;
  `;

  const Partner = styled.img`
    width: calc(100% / 8);
  `;

  return (
    <LogoWrapper className="partner-logos">
      {partnerLogos.map(logo => (
        <Partner className="logo" key={partnerLogos.indexOf(logo)} src={logo} />
      ))}
    </LogoWrapper>
  );
}

export default Partners;
