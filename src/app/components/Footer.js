import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "../../styles/footer.scss";
import footerLogo from "../../assets/logo-footer.png";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function Footer() {
  let socialIcons = [
    {
      url: "https://facebook.com",
      library: "fab",
      name: "facebook-f"
    },
    {
      url: "https://vn.linkedin.com/",
      library: "fab",
      name: "linkedin-in"
    },
    {
      url: "https://twitter.com/",
      library: "fab",
      name: "twitter"
    },
    {
      url: "https://vimeo.com/",
      library: "fab",
      name: "vimeo-v"
    },
    {
      url: "https://www.pinterest.com/",
      library: "fab",
      name: "pinterest-p"
    }
  ];

  return (
    <footer className="footer page__footer">
      <div className="top-content">
        <Container>
          <div className="contact-box">
            <Link
              onClick={scrollToTop}
              className="nav-link"
              exact="true"
              to="/"
            >
              {" "}
              <img
                className="logo-footer"
                src={footerLogo}
                alt="TheFox Plus - Made for Business"
              />
            </Link>
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
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <a href={icon.url}>
                    <FontAwesomeIcon icon={[icon.library, icon.name]} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
