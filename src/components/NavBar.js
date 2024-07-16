import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logo artistrate.png"
import styles from "../styles/Nav.module.css"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
  <Navbar.Brand ><img src={logo} height='45'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link> <i className='fas fa-home'></i>Home</Nav.Link>
      <Nav.Link ><i className='fas fa-sign-in-alt'></i> Sign in</Nav.Link>
      <Nav.Link ><i className='fas fa-user-plus'></i>Sign up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar;