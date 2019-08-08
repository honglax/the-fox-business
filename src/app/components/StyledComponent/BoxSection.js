import React from "react";
import { BoxSectionStyle } from "./style";

export default function BoxSection(props) {
  return (
    <BoxSectionStyle textAlign={props.alignment}>
      <div className="title">
        <h4>{props.title}</h4>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>
      {props.children}
    </BoxSectionStyle>
  );
}
