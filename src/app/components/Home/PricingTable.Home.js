import React from "react";
import { Container } from "react-bootstrap";
import { PricingItem, PrimaryButton } from "../StyledComponent/style";
import BoxSection from "../StyledComponent/BoxSection";

export default function PricingTable() {
  const pricingData = [
    {
      name: "Personal",
      pricePerMonth: 99,
      psdPack: 1,
      wordpressInstall: 1,
      supportTicket: 100,
      recommend: false
    },
    {
      name: "Business",
      pricePerMonth: 599,
      psdPack: 5,
      wordpressInstall: 10,
      supportTicket: 1000,
      recommend: true
    },
    {
      name: "Ultimate",
      pricePerMonth: 999,
      psdPack: 10,
      wordpressInstall: 30,
      supportTicket: -1,
      recommend: false
    }
  ];
  return (
    <BoxSection
      title="Pricing Tables"
      description="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Nulla vehicula nibh vel ante commodo feugiat."
    >
      <Container className="pricing-features">
        {pricingData.map(item => (
          <PricingItem
            numOfItem={pricingData.length}
            key={pricingData.indexOf(item)}
            className={
              item.recommend ? "recommend pricing-item" : "pricing-item"
            }
          >
            {item.recommend ? <div className="selected">Recommend</div> : ""}
            <div className="plan-title">
              <h4>{item.name}</h4>
              <p>
                From <span className="price">${item.pricePerMonth}</span> Per
                Month
              </p>
            </div>
            <div className="plan-description">
              <div className="description-item">
                <h5>
                  {item.psdPack < 10 ? "0" + item.psdPack : item.psdPack} PSD
                  Pack{item.psdPack > 1 ? "s" : ""}
                </h5>
                <p>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </p>
              </div>
              <div className="description-item">
                <h5>
                  {item.wordpressInstall < 10
                    ? "0" + item.wordpressInstall
                    : item.wordpressInstall}{" "}
                  Wordpress Install{item.wordpressInstall > 1 ? "s" : ""}
                </h5>
                <p>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </p>
              </div>
              <div className="description-item">
                <h5>
                  {item.supportTicket === -1
                    ? "Suport Unlimited"
                    : `${item.supportTicket} Support Tickets`}
                </h5>
                <p>
                  Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
                  Vehicula.
                </p>
              </div>
            </div>
            <div className="plan-btn">
              <PrimaryButton width="220px" height="55px">
                Get Started Now
              </PrimaryButton>
            </div>
          </PricingItem>
        ))}
      </Container>
    </BoxSection>
  );
}
