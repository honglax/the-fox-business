import styled from "styled-components";

const primaryColor = "#4285f4";
const primaryBorderColor = "#2c6cd6";
const flexBoxMixin = (
  direction = "row",
  alignItem = "center",
  justifyContent = "center"
) => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${alignItem};
  justify-content: ${justifyContent}
`;
const customFontMixin = (
  color = "#fff",
  size = 14,
  lineHeight = 1.5,
  weight = 400,
  transform = "none"
) => `
  color: ${color};
  font-size: ${size}px;
  line-height: ${lineHeight};
  font-weight: ${weight};
  text-transform: ${transform};
`;
const customTransition = (
  property = "all",
  duration = 0.2,
  timingFunction = "ease-in-out",
  delay = 0
) => `
  transition: ${property} ${duration}s ${timingFunction} ${delay}s;
  -moz-transition: ${property} ${duration}s ${timingFunction} ${delay}s;
  -webkit-transition: ${property} ${duration}s ${timingFunction} ${delay}s;
  -o-transition: ${property} ${duration}s ${timingFunction} ${delay}s;
`;
const customBoxShadow = (
  horizontal = 0,
  vertical = 0,
  blurRadius = 0,
  spreadRadius = 0,
  shadowColor = "rgba(0, 0, 0, 1)"
) => `
  box-shadow: ${horizontal}px ${vertical}px ${blurRadius}px ${spreadRadius}px ${shadowColor};
  -webkit-box-shadow: ${horizontal}px ${vertical}px ${blurRadius}px ${spreadRadius}px ${shadowColor};
  -moz-box-shadow: ${horizontal}px ${vertical}px ${blurRadius}px ${spreadRadius}px ${shadowColor};
`;
const gradientLine = (width, height) => `
  background: rgb(0, 240, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 240, 255, 1) 0%,
    rgba(235, 172, 253, 1) 100%
  );
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -${width / 2}px;
  width: ${width}px;
  height: ${height}px;
`;

const customGradientBorder = (width, height, top, left) => `
  background: rgb(0, 240, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 240, 255, 1) 0%,
    rgba(235, 172, 253, 1) 100%
  );
  content: '';
  position: absolute;
  left: ${left};
  top: ${top};
  width: ${width};
  height: ${height};

`;

// Primary Button
export const PrimaryButton = styled.button`
  ${flexBoxMixin("row", "center", "center")}
  ${props =>
    customFontMixin(
      props.color,
      undefined,
      undefined,
      700,
      props.transform || "uppercase"
    )}
  background-color: ${props => props.bgColor || primaryColor};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 5px;
  border: 1px solid ${props => props.borderColor || primaryBorderColor};
  ${customTransition("all", 0.2, undefined)}

  &:hover {
    ${props =>
      props.notHover ? "" : customBoxShadow(0, 0, 10, 0, "rgba(0, 0, 0, 0.3)")}
  }

  .icon {
    font-weight: bold;
  }
`;

export const LearnMoreButton = styled.a`
  ${customFontMixin("#4285f4", 12, undefined, 700, "uppercase")}
  display: inline-block;
  padding: 10px 20px;
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

// Common Box Section Style
export const BoxSectionStyle = styled.div`
  .container {
    ${flexBoxMixin("row", "center", "center")}
  }

  .title {
    margin-bottom: 60px;
    text-align: center;
    z-index: 10;

    h4 {
      ${customFontMixin("#333", 36, 1, 300, "capitalize")};
      padding: 30px 0;
      position: relative;
      margin-bottom: 25px;
      font-weight: 300;

      &::after {
        ${gradientLine(100, 1)};
      }
    }

    .description {
      ${customFontMixin("#999", 18, 2, 300, "none")}
    }
  }
`;

export const PricingItem = styled.div`
  width: calc(100% / ${props => props.numOfItem});
  ${flexBoxMixin("column", "center", "center")}
  padding: 70px 0 0 0;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  ${customTransition()}

  .plan-title {
    ${flexBoxMixin("column", "center", "center")}
    ${customFontMixin("#999", 20, undefined, 300, "capitalize")}
    width: 100%;
    padding-bottom: 70px;
    border-bottom: 1px solid #eaeaea;
    position: relative;

    h4 {
      ${customFontMixin("#333", 33, 1, 300, "capitalize")}
      padding-bottom: 30px;
      margin-bottom: 25px;
      position: relative;

      &:after {
        ${gradientLine(70, 1)}
      }
    }

    .price {
      color: ${primaryColor};
      font-weight: 600;
    }

    &::after,
    &::before {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &::after {
      border-color: rgba(255, 255, 255, 0);
      border-top-color: #fff;
      border-width: 20px;
      margin-left: -20px;
    }

    &::before {
      border-color: rgba(234, 234, 234, 0);
      border-top-color: #eaeaea;
      border-width: 21px;
      margin-left: -21px;
    }
  }

  .plan-description {
    width: 100%;
    padding: 0 50px;
    border-bottom: 1px solid #eaeaea;

    .description-item {
      width: 100%;
      padding: 30px 0;
      text-align: center;
      border-bottom: 1px solid #eaeaea;

      h5 {
        ${customFontMixin("#333", 16, 2, 600, undefined)};
        text-align: center;

        &::before {
          content: "\f00c";
          font-family: FontAweSome;
          position: inline-block;
          color: #9bcb5b;
          margin-right: 10px;
        }
      }

      &:last-child {
        border-bottom-color: transparent;
      }
    }
  }

  .plan-btn {
    ${flexBoxMixin("row", "center", "center")}
    width: 100%;
    padding: 40px 0;
  }

  &:hover {
    ${customBoxShadow(0, 0, 10, 0, "rgba(0,0,0,0.2)")}
    &::after {
      width: 100%;
    }
  }

  &::after {
    ${customGradientBorder("0px", "5px", 0, 0)}
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    z-index: 2;
    ${customTransition("all", 0.3)}
  }

  &.recommend {
    position: relative;

    .plan-btn button {
      background-color: #82b440;
      border-color: #82b440;
    }
  }
`;
