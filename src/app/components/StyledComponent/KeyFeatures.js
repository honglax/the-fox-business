import React from "react";
import { Container } from "react-bootstrap";

export default function KeyFeatures() {
  let features = [
    {
      icon: "ti-desktop",
      title: "100% Responsive",
      content: `Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.`
    },
    {
      icon: "ti-settings",
      title: "Powerful Admin",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      icon: "ti-ruler-pencil",
      title: "Incredible Design",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      icon: "ti-comment-alt",
      title: "The Best Support",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    }
  ];

  return (
    <Container>
      {features.map(feature => (
        <div className="feature-item" key={features.indexOf(feature)}>
          <div className="icon">
            <span className={feature.icon + " icon-img"} />
          </div>
          <p className="title">{feature.title}</p>
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: feature.content }}
          />
        </div>
      ))}
    </Container>
  );
}
