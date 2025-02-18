import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navb.css';
import logo from "/public/images/food-logo-ideas-1.jpg"

export default function Navb() {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top"id='myNav'>
        <Container className='' >
            <Navbar.Brand to="/home">
                <img title='log' src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='w-100' >
              <Nav className="  ms-auto">
                  <Nav.Link href="home">Home</Nav.Link>
                  <Nav.Link href="about">About</Nav.Link>
                  <Nav.Link href="explore">Explore Food  </Nav.Link>
                  <Nav.Link href="#link">Review</Nav.Link>
                  <Nav.Link href="#link">FQA</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="" id='brandNum'>01011254856</Nav.Link>
              
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}
