import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {


    return (
        <Navbar className="bg-body-tertiary" justify-content-between fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
    )
}

export default Header;
