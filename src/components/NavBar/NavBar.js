import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Merit Test</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Topics">Topics</Nav.Link>
                            <Nav.Link href="#Statistics">Statistics</Nav.Link>
                            <Nav.Link href="#Blog">Blog</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>


            </>
        </div>
    );
};

export default NavBar;