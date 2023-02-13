import React from 'react';
import Col from 'react-bootstrap/Col';
import TestimonialImage1 from '../../../assets/images/testimonial1.png';
import TestimonialImage2 from '../../../assets/images/testimonial2.png';
import TestimonialImage3 from '../../../assets/images/testimonial3.png';
import TestimonialsCard from './TestimonialsCard';

const TESTIMONIALS_DATA = [
    {
        image: TestimonialImage1,
        name: `Varun Iyer,\nSports fan.`,
        text: `"Offside is the best place to be during live matches. Complete match analysis in one go helps me to understand the match better, the game gets even more interesting".`
    },
    {
        image: TestimonialImage2,
        name: `Oscar Fernandes,\nSports fan.`,
        text: `"Being an ardent sports fan, predicting the match result and competing with friends always fascinates me. Watching the matches live and chatting with my friends is the ultimate thing that has happened to me".`
    },
    {
        image: TestimonialImage3,
        name: `Sari Purdue`,
        text: `"Awesome! Events along with live matches appeal to me the most. Referral rewards allow me to win exciting prizes. Expressing my views about the match to my friends is truly satisfying."`
    },
];

const TestimonialsCards = () => {
    return (
        <React.Fragment>
            {
                TESTIMONIALS_DATA.map((data, index) => {
                    return (
                        <Col xs={12} md={6} xl={4} key={index}>
                            <TestimonialsCard {...data} />
                        </Col>
                    )
                })
            }
        </React.Fragment>
    );
};

export default TestimonialsCards;