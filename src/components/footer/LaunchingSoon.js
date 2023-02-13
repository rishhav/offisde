import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BatBall from '../../assets/images/batball.png';
import Tennis from '../../assets/images/tennisracket.png';
import OffsideLogo from '../../assets/images/offside logo.png';
import BasketBall from '../../assets/images/basketball.png';

const LaunchingSoon = () => {
    return (
        <React.Fragment>
            <Container
                className="py-3 footer-icons-container">
                <Row>
                    <Col style={{ width: '50%' }}>
                        <Image src={BatBall} width="100%" />
                    </Col>
                    <Col style={{ width: '50%' }}>
                        <Image src={Tennis} width="100%" />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ width: '50%' }}>
                        <Image src={OffsideLogo} width="100%" />
                    </Col>
                    <Col style={{ width: '50%' }}>
                        <Image src={BasketBall} width="100%" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-2 text-white text-center'>Launching Soon</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default LaunchingSoon;