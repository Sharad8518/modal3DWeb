import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import { FaBars } from "react-icons/fa";

export default function NavbarBootsrap() {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Hi there</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >
            <FaBars/>
            </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Service</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
