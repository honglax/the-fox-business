import React from "react";
import { Container } from "react-bootstrap";
import { PrimaryButton, LearnMoreButton } from "../StyledComponent/style";
import webDesign from "../../../assets/services-icon/web-design.png";
import eCommerce from "../../../assets/services-icon/ecommerce.png";
import videoAd from "../../../assets/services-icon/video-advertise.png";
import photography from "../../../assets/services-icon/photography.png";
import graphicDesign from "../../../assets/services-icon/graphic-design.png";
import supportTools from "../../../assets/services-icon/support-tools.png";

export default function Services() {
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

  const services = [
    {
      icon: webDesign,
      title: "Web Design",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra"
    },
    {
      icon: eCommerce,
      title: "Ecommerce",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra"
    },
    {
      icon: videoAd,
      title: "Video Advertising",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra"
    },
    {
      icon: photography,
      title: "Photography",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra"
    },
    {
      icon: graphicDesign,
      title: "Graphic Design",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra"
    },
    {
      icon: supportTools,
      title: "Support Tools",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra"
    }
  ];
  return (
    <Container>
      <div className="left-content">
        <div className="title">What We Do</div>
        <div className="content">
          <p className="gray-text">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            Nulla vehicula nibh vel ante commodo feugiat.
          </p>
          <p>
            TheFox include design that can be used for any type of website:
            business, corporate, portfolio, blog, products, magazine, etc. Buy
            TheFox and join our awesome community, let’s make TheFox better
            together!
          </p>
          <ul className="doing-list">
            {whatWeDo.map(line => (
              <li key={whatWeDo.indexOf(line)}>{line}</li>
            ))}
          </ul>
        </div>
        <PrimaryButton width={270} height={55}>
          <span className="icon ti-light-bulb mr-2" />
          Take a tour
        </PrimaryButton>
      </div>
      <div className="right-content">
        {services.map(service => (
          <div className="service-item" key={services.indexOf(service)}>
            <img src={service.icon} alt={service.title} className="icon" />
            <p className="title">{service.title}</p>
            <p className="content">{service.content}</p>
            <LearnMoreButton href="#">Learn More</LearnMoreButton>
          </div>
        ))}
      </div>
    </Container>
  );
}
