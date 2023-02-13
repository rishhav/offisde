import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Contact from './Contact';
import LaunchingSoon from './LaunchingSoon';


const Footer = () => {
    return (
        <React.Fragment>
            <Container fluid style={{ backgroundColor: 'black' }} className="mt-3 mt-md-5 py-5">
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Contact />
                        </Col>
                        <Col>
                            <LaunchingSoon />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="outline-secondary" className='text-2 text-white border border-0 rounded-pill'>Terms & Support</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </React.Fragment>
    );
};

export default Footer;