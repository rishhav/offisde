import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MainContainer from '../../util/MainContainer';
import Typography from '../../util/Typography';
import TestimonialsCards from './TestimonialsCards/TestimonialsCards';

const Testimonials = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <Typography.HeadingExtraBold classes={['text-center']}>Testimonials</Typography.HeadingExtraBold>
                <Container>
                    <Row className="g-5">
                        <TestimonialsCards />
                    </Row>
                </Container>
            </MainContainer>
        </React.Fragment>
    );
};

export default Testimonials;