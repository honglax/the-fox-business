import React from "react";
import { Container } from "react-bootstrap";
export default function AdditionalFeatures() {
  let additionalFeatures = [
    {
      icon: "ti-layout",
      title: "Multiple Layouts",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      icon: "ti-crown",
      title: "Mordern Designs",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      icon: "ti-bag",
      title: "Powerful Shopping",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      icon: "ti-timer",
      title: "Incredible Support",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      icon: "ti-stats-up",
      title: "Optimized for SEO",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      icon: "ti-panel",
      title: "Flexible Admin Options",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    }
  ];
  return (
    <div>
      <Container>
        {additionalFeatures.map(feature => (
          <div
            className="additional-feature-item"
            key={additionalFeatures.indexOf(feature)}
          >
            <span className={feature.icon + " icon"} />
            <div className="content">
              <div className="title">{feature.title}</div>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
