import React from "react";
import { Container } from "react-bootstrap";

import desktop from "../../../assets/svg/desktop.svg";
import settings from "../../../assets/svg/settings.svg";
import rulerPencil from "../../../assets/svg/ruler-pencil.svg";
import commentAlt from "../../../assets/svg/comment-alt.svg";
export default function HomeFunctionals() {
  let functionals = [
    {
      imgSrc: desktop,
      title: "100% Responsive",
      content: `Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat.`
    },
    {
      imgSrc: settings,
      title: "Powerful Admin",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      imgSrc: rulerPencil,
      title: "Incredible Design",
      content:
        "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Vehicula nibh vel ante commodo feugiat. Nulla ut enim lobortis orci gravida volutpat. "
    },
    {
      imgSrc: commentAlt,
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
            <img className="icon-img" src={item.imgSrc} alt="100% Responsive" />
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
