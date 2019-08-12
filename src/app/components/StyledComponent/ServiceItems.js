import React from "react";
import { LearnMoreButton } from "../StyledComponent/style";

import webDesign from "../../../assets/services-icon/web-design.png";
import eCommerce from "../../../assets/services-icon/ecommerce.png";
import videoAd from "../../../assets/services-icon/video-advertise.png";
import photography from "../../../assets/services-icon/photography.png";
import graphicDesign from "../../../assets/services-icon/graphic-design.png";
import supportTools from "../../../assets/services-icon/support-tools.png";

export default function ServiceItems() {
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
  return services.map(service => (
    <div className="service-item" key={services.indexOf(service)}>
      <img src={service.icon} alt={service.title} className="icon" />
      <p className="title">{service.title}</p>
      <p className="content">{service.content}</p>
      <LearnMoreButton href="#">Learn More</LearnMoreButton>
    </div>
  ));
}
