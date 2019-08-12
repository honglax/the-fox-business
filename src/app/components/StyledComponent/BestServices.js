import React from "react";
import { Container } from "react-bootstrap";
import DarkBox from "../StyledComponent/DarkBox";
import ServiceItems from "../StyledComponent/ServiceItems";

export default function Services({ hideLeft, hideRight }) {
  const whatWeDo = [
    "Clean, modern, multi-purpose design can be used for any type of website",
    "The New Ultimate Multi-Purpose WordPress Theme",
    "WordPress 4.1 Tested and Approved",
    "Built with HTML5 and CSS3",
    "SEO Optimized, Well organized, commented & clean code",
    "Cross-Browser Compatibility: Chrome, Firefox, Safari, IE9 ~ IE11",
    "100% Responsive Theme",
    "Comes with the Visual Composer, most awesome visual page builder"
  ];

  return (
    <Container>
      {hideLeft ? (
        ""
      ) : (
        <DarkBox
          title="What We Do"
          grayText="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Nulla vehicula nibh vel ante commodo feugiat."
          content="TheFox include design that can be used for any type of website: business, corporate, portfolio, blog, products, magazine, etc. Buy TheFox and join our awesome community, let’s make TheFox better together!"
          btnIcon="ti-light-bulb"
          btnContent="Take a tour"
        >
          <ul className="doing-list">
            {whatWeDo.map(line => (
              <li className="arrow-list-item" key={whatWeDo.indexOf(line)}>
                {line}
              </li>
            ))}
          </ul>
        </DarkBox>
      )}
      {hideRight ? (
        ""
      ) : (
        <div className="right-content">
          <ServiceItems />
        </div>
      )}
    </Container>
  );
}
