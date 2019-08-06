import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import "../../styles/header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="Header">
      <Container>
        <Navbar>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="The Fox Business" className="logo" />
            </Navbar.Brand>
          </NavLink>
          <NavLink to="/">
            <Navbar.Brand className="title">TheFox Business</Navbar.Brand>
          </NavLink>
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
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
