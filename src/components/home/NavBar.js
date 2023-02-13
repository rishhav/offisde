import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LogoNavbar from '../../assets/images/offside_logo_main.svg';

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={LogoNavbar}
                            className="d-inline-block align-top navbar-logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;