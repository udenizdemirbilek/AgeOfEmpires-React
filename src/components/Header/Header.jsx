import React from "react";
import "./Header.css";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
function Header() {
  return (
    <Row className="header">
      <Col sm={{ span: 5, offset: 9 }}>
        <Navbar expand="lg" className="my-2" >
          <Container className="links">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto ">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/units"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Units
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Header;
