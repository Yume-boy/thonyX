import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <Navbar expand="lg" className={` navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="../public/ThonyX_transparent.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="primary" href="/path-to-your-cv.pdf" download>
              Download CV
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
