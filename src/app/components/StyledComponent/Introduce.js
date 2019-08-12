import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";

export default function Introduce({
  alignItems,
  textAlignment,
  title,
  grayText,
  content,
  children
}) {
  let blockClassName = classNames(
    "introduce",
    alignItems || "aifs",
    textAlignment || "txt-al-l"
  );
  return (
    <Container className={blockClassName}>
      <div className="box-content">
        <div className="title">{title}</div>
        <div className="content">
          <p
            className="gray-text"
            dangerouslySetInnerHTML={{ __html: grayText }}
          />
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {children}
      </div>
    </Container>
  );
}
