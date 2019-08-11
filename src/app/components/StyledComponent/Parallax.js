import React from "react";
import { Container } from "react-bootstrap";

export default function Parallax({ quote, author, description, children }) {
  return (
    <Container>
      {children}
      {quote ? (
        <div className="quote" dangerouslySetInnerHTML={{ __html: quote }} />
      ) : (
        ""
      )}
      {author ? (
        <div className="signing">
          <p className="author">{author}</p>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}
