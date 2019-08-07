import React from "react";
import { Container } from "react-bootstrap";

export default function HomeFunctionals() {
  let functionals = [
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
      {functionals.map(item => (
        <div className="functional-item" key={functionals.indexOf(item)}>
          <div className="icon">
            <span className={item.icon + " icon-img"} />
          </div>
          <p className="title">{item.title}</p>
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      ))}
    </Container>
  );
}
