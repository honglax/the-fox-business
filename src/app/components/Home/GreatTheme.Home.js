import React from "react";
import { Container } from "react-bootstrap";
import { PrimaryButton } from "../StyledComponent/style";

export default function GreatTheme(props) {
  let { alignItems } = props;
  return (
    <Container className={alignItems}>
      <div className="box-content">
        <div className="title">Greate Theme for Your Business</div>
        <div className="content">
          <p className="gray-text">
            Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            <br />
            Nulla vehicula nibh vel ante commodo feugiat.
          </p>
          <p>
            Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis.
          </p>
        </div>
        <PrimaryButton>
          <span className="icon ti-light-bulb mr-2" />
          Take a tour
        </PrimaryButton>
      </div>
    </Container>
  );
}
