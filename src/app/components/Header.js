import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import "../../styles/header.scss";
import logo from "../../assets/logo-retina.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navExpanded: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setNavExpanded = this.setNavExpanded.bind(this);
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  handleClick = e => {
    this.setState({ navExpanded: false });
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    const el = document.querySelector("nav");
    let classNames = el.className.split(" ");
    if (this.state.scroll > 0) {
      document.body.style.paddingTop = `${this.state.height}px`;
      if (!classNames.includes("fixed-nav")) {
        el.className += " fixed-nav";
      }
    } else {
      document.body.style.paddingTop = 0;
      el.className = classNames
        .filter(className => className !== "fixed-nav")
        .join(" ");
    }

    const detailBanner = document.getElementById("post-detail-banner");
    if (detailBanner) {
      detailBanner.style.height = `${window.innerHeight -
        (window.innerWidth < 991.98 ? 80 : el.offsetHeight)}px`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  render() {
    return (
      <header className="header page__header">
        <Navbar
          collapseOnSelect
          expand="lg"
          onToggle={this.setNavExpanded}
          expanded={this.state.navExpanded}
        >
          <Container>
            <NavLink onClick={this.handleClick} className="navbar-brand" to="/">
              <img src={logo} alt="The Fox Business" className="logo" />
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto" onClick={this.handleClick}>
                <NavLink
                  // onClick={this.handleClick}
                  className="nav-link"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  // onClick={this.handleClick}
                  className="nav-link"
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                  // onClick={this.handleClick}
                  className="nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                  // onClick={this.handleClick}
                  className="nav-link"
                  to="/blog"
                >
                  Blog
                </NavLink>
                <NavLink
                  // onClick={this.handleClick}
                  className="nav-link"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  // onClick={this.handleClick}
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
