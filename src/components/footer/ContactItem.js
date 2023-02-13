import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Typography from '../../util/Typography';

const ContactItem = ({ logo, heading, data }) => {
    return (
        <React.Fragment>
            <Container className="d-flex justify-content-start text-white">
                <Row>
                    <Col>
                        <Image src={logo} className="footer-contact-image" />
                    </Col>
                    <Col xs="auto">
                        <span className='text-2 fw-bold'>{heading}</span>
                        <br />
                        <span className='text-2'>{data}</span>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default ContactItem;