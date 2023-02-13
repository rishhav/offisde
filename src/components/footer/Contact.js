import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailLogo from '../../assets/images/email.svg';
import WhatsappLogo from '../../assets/images/whatsapp.svg';
import ContactItem from './ContactItem';
import Typography from '../../util/Typography';

const Contact = () => {
    return (
        <React.Fragment>
            <Row>
                <Typography.HeadingExtraBold>Contact Us</Typography.HeadingExtraBold>
            </Row>
            <Row>
                <Col xs={12} sm={6} className="my-2 my-sm-0">
                    <ContactItem
                        logo={EmailLogo}
                        heading="Email Address"
                        data="info@offside.club"
                    />
                </Col>
                <Col xs={12} sm={6} className="my-2 my-sm-0">
                    <ContactItem
                        logo={WhatsappLogo}
                        heading="Phone Number"
                        data="+91-8826060074"
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Contact;