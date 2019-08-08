import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import "../../styles/header.scss";
import logo from "../../assets/logo-retina.png";

function Header() {
  return (
    <header className="header page__header">
      <Container>
        <Navbar collapseOnSelect expand="xl">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="The Fox Business" className="logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
