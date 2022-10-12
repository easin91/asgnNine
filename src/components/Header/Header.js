import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../true_false.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <Navbar bg="primary" variant="dark">
                <Container className='p-2 fs-4 text'>
                    <Link to='/home' className='text-decoration-none text-white'>
                        <Navbar.Brand className='fs-4 text' href="/home">

                            <img
                                src={img}
                                width="30"
                                height="30"
                                className="d-inline-block align-top mx-2"
                                alt="React Bootstrap logo"
                            />
                            Merit Testing Site</Navbar.Brand></Link>
                    <Nav className="justify-content-end text-white">


                        <Link to='/home' className='text-decoration-none text-white'>Home</Link>


                        <Link to='/topics' className='text-decoration-none text-white'>Topics</Link>


                        <Link to='/statistics' className='text-decoration-none text-white'>Statistics</Link>


                        <Link to='/blog' className='text-decoration-none text-white'>Blog</Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='below-header'>

            </div>
        </div>
    );
};

export default Header;