import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './header.css'
import auth from '../../firebase.init'
import icon from '../Home/Home/vector.png'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav-bar' variant="dark">
                <Container>
                    <Navbar.Brand className='d-flex align-center' href="/"><h3 className='my-2 p-3 header-name ' >Spice Heaven  </h3>
                        <img src={icon} className='w-25 h-75 my-auto' alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <NavDropdown title="Your Stocks" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Add to Stock</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About</Nav.Link>
                            {user ?
                                <button onClick={handleSignOut} className='text-decoration-none btn text-light'>sign-out</button>
                                : <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;