import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "../../styles/footer.scss";
import footerLogo from "../../assets/logo-footer.png";
function Footer() {
  return (
    <footer className="footer page__footer">
      <div className="top-content">
        <Container>
          <div>
            <img
              className="logo-footer"
              src={footerLogo}
              alt="TheFox Plus - Made for Business"
            />
          </div>
          <div className="contact-box">
            <div className="title">Postal Address</div>
            <p>PO Box 16122 Collins Street </p>
            <p>West</p>
            <p>Victoria 8007</p>
            <p>Australia</p>
          </div>
          <div className="contact-box">
            <div className="title">Envato Headquaters</div>
            <p>121 King Street,</p>
            <p>Melbourne</p>
            <p>Victoria 3000</p>
            <p>Australia</p>
          </div>
          <div className="contact-box">
            <div className="title">La Xuan Hong</div>
            <p>hongla.html@gmail.com</p>
            <p>+84 989 11 09 91</p>
            <p>
              <a href="https://jasonlax.info">jasonlax.info</a>
            </p>
            <p>Vietnam</p>
          </div>
        </Container>
      </div>
      <div className="bot-content">
        <Container>
          <div className="copyright">
            <p>
              <FontAwesomeIcon icon={faCopyright} /> 2019 All Rights Reserved{" "}
              <span className="semibold">La Xuan Hong</span> - Envato Pty Ltd.
              Contact the Envato Market Help Team.
            </p>
          </div>
          <div className="social">
            <ul className="nav">
              <li>
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
              </li>
              <li>
                <a href="https://vn.linkedin.com/">
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
              <li>
                <a href="https://vimeo.com/">
                  <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <FontAwesomeIcon icon={["fab", "pinterest-p"]} />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
