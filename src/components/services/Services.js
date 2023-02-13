import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ServicesIllustration from '../../assets/images/services_illustration.svg';
import ServicesCards from './ServicesCards/ServicesCards';
import MainContainer from '../../util/MainContainer';
import Typography from '../../util/Typography';

const Services = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <Typography.HeadingExtraBold>A place that makes conversations as memorable as the matches.</Typography.HeadingExtraBold>
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Image src={ServicesIllustration} width="100%" />
                        </Col>
                        <Col xs={12} lg={6}>
                            <ServicesCards />
                        </Col>
                    </Row>
                </Container>
            </MainContainer>
        </React.Fragment>
    );
};

export default Services;