import styled from "styled-components";

let primaryColor = "#4285f4";
let primaryBorderColor = "#2c6cd6";

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${primaryColor};
  width: 270px;
  height: 55px;
  border-radius: 5px;
  border: 1px solid ${primaryBorderColor};
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .icon {
    font-weight: bold;
  }
`;

export const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: bold;
  color: #4285f4;
  text-transform: uppercase;
  position: relative;

  &:hover {
    text-decoration: none;
  }

  &::before {
    content: "\f054";
    font-family: FontAweSome;
    position: inline-block;
    margin-right: 10px;
  }
`;
