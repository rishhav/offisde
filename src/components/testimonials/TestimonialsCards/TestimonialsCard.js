import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Typography from '../../../util/Typography';

const TestimonialsCard = ({ image, name, text }) => {
    return (
        <React.Fragment>
            <Card className="mx-auto d-block text-white rounded-5 testimonial-card-container">
                <Card.Body>
                    <Image variant="top" src={image} className="rounded-circle mx-auto d-block mb-2 testimonial-card-image" />
                    <Card.Title>
                        <Typography.HeadingBold>{name}</Typography.HeadingBold>
                    </Card.Title>
                    <Card.Text className="text-2">{text}</Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default TestimonialsCard;